import React from 'react'
import { useState,useRef,useEffect } from 'react';
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth,db } from '../DataBase/firebase-config'
import useBodyScrollLock from "../Functions/useBodyScrollLock";
import NotificationCard from '../Notifications/NotificationCard';
import {CgDanger} from 'react-icons/cg'
import {AiFillCheckCircle} from 'react-icons/ai'

import { doc, setDoc,addDoc,collection,getDoc,snapshot,getDocs,query,where } from "firebase/firestore"; 
const SignUp = ({locked}) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [isLocked,setLock]=useBodyScrollLock(true);
  const [registerPassword, setRegisterPassword] = useState("");
  const [comfirmRegisterPassword,setComfirmRegisterPassword]=useState("");
  const [walletAddress,setWalletAddress]=useState("")
  const [transactionId,setTransactionId]=useState("")
  const [discordName,setDiscordName]=useState("")
  const [twitterName,setTwitterName]=useState("")  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [country,setCountry]=useState("")
  const [sign,setSign]=useState(true)
  const [user] = useAuthState(auth);
  const [registerError,setRegisterError]=useState("")
  const [errorNotification,setErrorNotification]=useState(-1)
  const [animOn,setAnimOn]=useState(false)
  const [userData,setUserData]=useState();

  const validateRegister = () => {
    let isValid = true
  
    if (registerPassword !== '' && comfirmRegisterPassword !==''){
      if (registerPassword !== comfirmRegisterPassword) {
        setRegisterError("The passwords are not the same")
        isValid=false;
      }
    else
    {   
      if(!registerPassword?.match(/[A-Z]/) || !registerPassword?.match(/[0-9]/) )
    {
      setRegisterError("Your password MUST contain at least 6 characters (12+ recommended),  at least one uppercase letter,  at least one lowercase letter and at least one number")
      isValid=false;  
    }
    console.log(registerPassword?.match(/[A-Z]/))
  }}
    if(!registerEmail.includes("@"))
    {
      setRegisterError("Enter a valid email")
      isValid=false;  
    }
  if(!isValid)
   {
   
    setTimeout(()=>{
        setAnimOn(false)
        
        setErrorNotification(-1)
        
    },5000)
  }

    return isValid
  }
    const handleSignIn=()=>{
      setSign(prev=>!prev)
    }
    const register =  async (e) => {
   
     
      
     e.preventDefault()
     if(sign)
     {    
 
        
      if(validateRegister()) {
        
        // Create a new user with email and password using firebase


         await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      
       
         
          .then((res) => {
            console.log(discordName)
            let username=registerEmail.split("@")
            username=username[0]
            addDoc(collection(db,"usersinformation"), {
              discord: discordName,
              twitter:twitterName,
              name:username,
              country:country,
              wallet:"",
              surname:"",
              forename:"",
              birthDate:"",
              formCompleted:false,
              userid:res.user.uid
            
            })
            gettingData(res.user.uid)
            console.log(twitterName)
            localStorage.setItem("username",userData.name)
            localStorage.setItem("discord",userData.discord)
            localStorage.setItem("twitter",userData.twitter)
            localStorage.setItem("country",userData.country)
            localStorage.setItem("walletAdress",userData.wallet)
            localStorage.setItem("forename",userData.forename)
            localStorage.setItem("surname",userData.surname)
            localStorage.setItem("birthdate",userData.birthDate)
            localStorage.setItem("formCompleted",userData.formCompleted)
            })
          .catch(err => {
            setRegisterError(err.message)
            setErrorNotification(0)        
            })
      }
      else{
        setErrorNotification(0)
      }
 
 
      
      setRegisterEmail('')
      setRegisterPassword('')
      setComfirmRegisterPassword('')
      setCountry("")
      setDiscordName('')
      setTwitterName('')
    }
      else
      {
        await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        )
        .then((res) => {
          console.log("singin fuctioneaza")
      gettingData(res.user.uid)
          localStorage.setItem("username",userData.name)
          localStorage.setItem("discord",userData.discord)
          localStorage.setItem("twitter",userData.twitter)
          localStorage.setItem("country",userData.country)
         localStorage.setItem("formCompleted",userData.formCompleted)
          localStorage.setItem("walletAdress",userData.wallet)
      
        })
      .catch(err => {
            setRegisterError("Invalid email or password.Please try again")
        setErrorNotification(0)
        setTimeout(()=>{
          setAnimOn(false)
          
          setErrorNotification(-1)
          
      },7000)
      })
      
      setLoginEmail('')
      setLoginPassword('')
      }
      
    };
  
    const logout=()=>{
     
      signOut(auth);
    }
 const gettingData=(idUser)=>{
;(async ()=>{
  const userRef=query(collection(db,"usersinformation"),where("userid","==",idUser))
  const snapshots=await getDocs(userRef)
  const docs =snapshots.docs.map((doc)=>{
   const data= doc.data()
   data.id=doc.id
   localStorage.setItem("userid",data.id)
   return data
  })

  setUserData(docs[0])
  localStorage.setItem("forename",docs[0].forename)
  localStorage.setItem("surname",docs[0].surname)
  localStorage.setItem("birthdate",docs[0].birthDate)
  localStorage.setItem("discord",docs[0].discord)
  localStorage.setItem("twitter",docs[0].twitter)
  localStorage.setItem("country",docs[0].country)
})()
 }
  return (
    <form onSubmit={e=>register(e)} className={`absolute text-white z-30 flex flex-col items-center w-[30rem] top-[1rem]
      } w-full `} noValidate>
             <label className="relative  text-white text-[20px] xl:text-[24px] font-[400]">
                    {sign ? "Sign Up":"Sign In"}
             </label>
             <input
        className={`relative ${!sign&&"hidden"}  outline-none  px-8 mt-6   text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
        name="user_email"
        placeholder="Email *"
        value={registerEmail}
        onChange={(event)=>{
          setRegisterEmail(event.target.value);
        }}
       
        required
      ></input>
          <input
        className={`relative ${!sign&&"hidden"}  outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
     
        placeholder="Password"
        type="password"
        value={registerPassword}
        minLength={6}
        onChange={(event)=>{
          setRegisterPassword(event.target.value);
        }}
    
        required
      ></input>
        <input
        className={`relative ${!sign&&"hidden"} outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
     
        placeholder="Comfirm password"
        type="password"
        value={comfirmRegisterPassword}
        minLength={6}
        onChange={(event)=>{
          setComfirmRegisterPassword(event.target.value);
        }}
        required
      ></input>
          
          <input
        className={`relative ${sign&&"absolute hidden top-[9999rem]"}  outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
        name="user_twitter"
        placeholder="Email *"
        value={loginEmail}
        onChange={(event)=>{
          setLoginEmail(event.target.value);
        }}
       
        required
      ></input>
          <input
        className={`relative ${sign&&"absolute hidden top-[9999rem]"}  outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]`}
        name="user_twitter"
        placeholder="Password"
        type="password"
        value={loginPassword}
        minLength={6}
        onChange={(event)=>{
          setLoginPassword(event.target.value);
        }}
    
        required
      ></input>
     
      <select onChange={e=>setCountry(e.target.value)}  className={`relative ${!sign &&"hidden"} mb-8 top-6 outline-none text-slate-200  bg-transparent   px-8  text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] border-[1px] border-[#7B48ED]`} >
      <option className='text-black'  value="default" selected>Choose Your Country</option>
    <option className='text-black'  value="Afghanistan">Afghanistan</option>
<option className='text-black' value="Albania">Albania</option>
<option className='text-black' value="Algeria">Algeria</option>
<option className='text-black' value="American Samoa">American Samoa</option>
<option className='text-black' value="Andorra">Andorra</option>
<option className='text-black' value="Angola">Angola</option>
<option className='text-black' value="Anguilla">Anguilla</option>
<option className='text-black' value="Antartica">Antarctica</option>
<option className='text-black' value="Antigua and Barbuda">Antigua and Barbuda</option>
<option className='text-black' value="Argentina">Argentina</option>
<option className='text-black' value="Armenia">Armenia</option>
<option className='text-black' value="Aruba">Aruba</option>
<option className='text-black' value="Australia">Australia</option>
<option className='text-black' value="Austria">Austria</option>
<option className='text-black' value="Azerbaijan">Azerbaijan</option>
<option className='text-black' value="Bahamas">Bahamas</option>
<option className='text-black' value="Bahrain">Bahrain</option>
<option className='text-black' value="Bangladesh">Bangladesh</option>
<option className='text-black' value="Barbados">Barbados</option>
<option className='text-black' value="Belarus">Belarus</option>
<option className='text-black' value="Belgium">Belgium</option>
<option className='text-black' value="Belize">Belize</option>
<option className='text-black' value="Benin">Benin</option>
<option className='text-black' value="Bermuda">Bermuda</option>
<option className='text-black' value="Bhutan">Bhutan</option>
<option className='text-black' value="Bolivia">Bolivia</option>
<option className='text-black' value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option className='text-black' value="Botswana">Botswana</option>
<option className='text-black' value="Bouvet Island">Bouvet Island</option>
<option className='text-black' value="Brazil">Brazil</option>
<option className='text-black' value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option className='text-black' value="Brunei Darussalam">Brunei Darussalam</option>
<option className='text-black' value="Bulgaria">Bulgaria</option>
<option className='text-black' value="Burkina Faso">Burkina Faso</option>
<option className='text-black' value="Burundi">Burundi</option>
<option className='text-black' value="Cambodia">Cambodia</option>
<option className='text-black' value="Cameroon">Cameroon</option>
<option className='text-black' value="Canada">Canada</option>
<option className='text-black' value="Cape Verde">Cape Verde</option>
<option className='text-black' value="Cayman Islands">Cayman Islands</option>
<option className='text-black' value="Central African Republic">Central African Republic</option>
<option className='text-black' value="Chad">Chad</option>
<option className='text-black' value="Chile">Chile</option>
<option className='text-black' value="China">China</option>
<option className='text-black' value="Christmas Island">Christmas Island</option>
<option className='text-black' value="Cocos Islands">Cocos (Keeling) Islands</option>
<option className='text-black' value="Colombia">Colombia</option>
<option className='text-black' value="Comoros">Comoros</option>
<option className='text-black' value="Congo">Congo</option>
<option className='text-black' value="Congo">Congo, the Democratic Republic of the</option>
<option className='text-black' value="Cook Islands">Cook Islands</option>
<option className='text-black' value="Costa Rica">Costa Rica</option>
<option className='text-black' value="Cota D'Ivoire">Cote d'Ivoire</option>
<option className='text-black' value="Croatia">Croatia (Hrvatska)</option>
<option className='text-black' value="Cuba">Cuba</option>
<option className='text-black' value="Cyprus">Cyprus</option>
<option className='text-black' value="Czech Republic">Czech Republic</option>
<option className='text-black' value="Denmark">Denmark</option>
<option className='text-black' value="Djibouti">Djibouti</option>
<option className='text-black' value="Dominica">Dominica</option>
<option className='text-black' value="Dominican Republic">Dominican Republic</option>
<option className='text-black' value="East Timor">East Timor</option>
<option className='text-black' value="Ecuador">Ecuador</option>
<option className='text-black' value="Egypt">Egypt</option>
<option className='text-black' value="El Salvador">El Salvador</option>
<option className='text-black' value="Equatorial Guinea">Equatorial Guinea</option>
<option className='text-black' value="Eritrea">Eritrea</option>
<option className='text-black' value="Estonia">Estonia</option>
<option className='text-black' value="Ethiopia">Ethiopia</option>
<option className='text-black' value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option className='text-black' value="Faroe Islands">Faroe Islands</option>
<option className='text-black' value="Fiji">Fiji</option>
<option className='text-black' value="Finland">Finland</option>
<option className='text-black' value="France">France</option>
<option className='text-black' value="France Metropolitan">France, Metropolitan</option>
<option className='text-black' value="French Guiana">French Guiana</option>
<option className='text-black' value="French Polynesia">French Polynesia</option>
<option className='text-black' value="French Southern Territories">French Southern Territories</option>
<option className='text-black' value="Gabon">Gabon</option>
<option className='text-black' value="Gambia">Gambia</option>
<option className='text-black' value="Georgia">Georgia</option>
<option className='text-black' value="Germany">Germany</option>
<option className='text-black' value="Ghana">Ghana</option>
<option className='text-black' value="Gibraltar">Gibraltar</option>
<option className='text-black' value="Greece">Greece</option>
<option className='text-black' value="Greenland">Greenland</option>
<option className='text-black' value="Grenada">Grenada</option>
<option className='text-black' value="Guadeloupe">Guadeloupe</option>
<option className='text-black' value="Guam">Guam</option>
<option className='text-black' value="Guatemala">Guatemala</option>
<option className='text-black' value="Guinea">Guinea</option>
<option className='text-black' value="Guinea-Bissau">Guinea-Bissau</option>
<option className='text-black' value="Guyana">Guyana</option>
<option className='text-black' value="Haiti">Haiti</option>
<option className='text-black' value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option className='text-black' value="Holy See">Holy See (Vatican City State)</option>
<option className='text-black' value="Honduras">Honduras</option>
<option className='text-black' value="Hong Kong">Hong Kong</option>
<option className='text-black' value="Hungary">Hungary</option>
<option className='text-black' value="Iceland">Iceland</option>
<option className='text-black' value="India">India</option>
<option className='text-black' value="Indonesia">Indonesia</option>
<option className='text-black' value="Iran">Iran (Islamic Republic of)</option>
<option className='text-black' value="Iraq">Iraq</option>
<option className='text-black' value="Ireland">Ireland</option>
<option className='text-black' value="Israel">Israel</option>
<option className='text-black' value="Italy">Italy</option>
<option className='text-black' value="Jamaica">Jamaica</option>
<option className='text-black' value="Japan">Japan</option>
<option className='text-black' value="Jordan">Jordan</option>
<option className='text-black' value="Kazakhstan">Kazakhstan</option>
<option className='text-black' value="Kenya">Kenya</option>
<option className='text-black' value="Kiribati">Kiribati</option>
<option className='text-black' value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option className='text-black' value="Korea">Korea, Republic of</option>
<option className='text-black' value="Kuwait">Kuwait</option>
<option className='text-black' value="Kyrgyzstan">Kyrgyzstan</option>
<option className='text-black' value="Lao">Lao People's Democratic Republic</option>
<option className='text-black' value="Latvia">Latvia</option>
<option className='text-black' value="Lebanon" >Lebanon</option>
<option className='text-black' value="Lesotho">Lesotho</option>
<option className='text-black' value="Liberia">Liberia</option>
<option className='text-black' value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option className='text-black' value="Liechtenstein">Liechtenstein</option>
<option className='text-black' value="Lithuania">Lithuania</option>
<option className='text-black' value="Luxembourg">Luxembourg</option>
<option className='text-black' value="Macau">Macau</option>
<option className='text-black' value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option className='text-black' value="Madagascar">Madagascar</option>
<option className='text-black' value="Malawi">Malawi</option>
<option className='text-black' value="Malaysia">Malaysia</option>
<option className='text-black' value="Maldives">Maldives</option>
<option className='text-black' value="Mali">Mali</option>
<option className='text-black' value="Malta">Malta</option>
<option className='text-black' value="Marshall Islands">Marshall Islands</option>
<option className='text-black' value="Martinique">Martinique</option>
<option className='text-black' value="Mauritania">Mauritania</option>
<option className='text-black' value="Mauritius">Mauritius</option>
<option className='text-black' value="Mayotte">Mayotte</option>
<option className='text-black' value="Mexico">Mexico</option>
<option className='text-black' value="Micronesia">Micronesia, Federated States of</option>
<option className='text-black' value="Moldova">Moldova, Republic of</option>
<option className='text-black' value="Monaco">Monaco</option>
<option className='text-black' value="Mongolia">Mongolia</option>
<option className='text-black' value="Montserrat">Montserrat</option>
<option className='text-black' value="Morocco">Morocco</option>
<option className='text-black' value="Mozambique">Mozambique</option>
<option className='text-black' value="Myanmar">Myanmar</option>
<option className='text-black' value="Namibia">Namibia</option>
<option className='text-black' value="Nauru">Nauru</option>
<option className='text-black' value="Nepal">Nepal</option>
<option className='text-black' value="Netherlands">Netherlands</option>
<option className='text-black' value="Netherlands Antilles">Netherlands Antilles</option>
<option className='text-black' value="New Caledonia">New Caledonia</option>
<option className='text-black' value="New Zealand">New Zealand</option>
<option className='text-black' value="Nicaragua">Nicaragua</option>
<option className='text-black' value="Niger">Niger</option>
<option className='text-black' value="Nigeria">Nigeria</option>
<option className='text-black' value="Niue">Niue</option>
<option className='text-black' value="Norfolk Island">Norfolk Island</option>
<option className='text-black' value="Northern Mariana Islands">Northern Mariana Islands</option>
<option className='text-black' value="Norway">Norway</option>
<option className='text-black' value="Oman">Oman</option>
<option className='text-black' value="Pakistan">Pakistan</option>
<option className='text-black' value="Palau">Palau</option>
<option className='text-black' value="Panama">Panama</option>
<option className='text-black' value="Papua New Guinea">Papua New Guinea</option>
<option className='text-black' value="Paraguay">Paraguay</option>
<option className='text-black' value="Peru">Peru</option>
<option className='text-black' value="Philippines">Philippines</option>
<option className='text-black' value="Pitcairn">Pitcairn</option>
<option className='text-black' value="Poland">Poland</option>
<option className='text-black' value="Portugal">Portugal</option>
<option className='text-black' value="Puerto Rico">Puerto Rico</option>
<option className='text-black' value="Qatar">Qatar</option>
<option className='text-black' value="Reunion">Reunion</option>
<option className='text-black' value="Romania">Romania</option>
<option className='text-black' value="Russia">Russian Federation</option>
<option className='text-black' value="Rwanda">Rwanda</option>
<option className='text-black' value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option className='text-black' value="Saint LUCIA">Saint LUCIA</option>
<option className='text-black' value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option className='text-black' value="Samoa">Samoa</option>
<option className='text-black' value="San Marino">San Marino</option>
<option className='text-black' value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option className='text-black' value="Saudi Arabia">Saudi Arabia</option>
<option className='text-black' value="Senegal">Senegal</option>
<option className='text-black' value="Seychelles">Seychelles</option>
<option className='text-black' value="Sierra">Sierra Leone</option>
<option className='text-black' value="Singapore">Singapore</option>
<option className='text-black' value="Slovakia">Slovakia (Slovak Republic)</option>
<option className='text-black' value="Slovenia">Slovenia</option>
<option className='text-black' value="Solomon Islands">Solomon Islands</option>
<option className='text-black' value="Somalia">Somalia</option>
<option className='text-black' value="South Africa">South Africa</option>
<option className='text-black' value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option className='text-black' value="Span">Spain</option>
<option className='text-black' value="SriLanka">Sri Lanka</option>
<option className='text-black' value="St. Helena">St. Helena</option>
<option className='text-black' value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option className='text-black' value="Sudan">Sudan</option>
<option className='text-black' value="Suriname">Suriname</option>
<option className='text-black' value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option className='text-black' value="Swaziland">Swaziland</option>
<option className='text-black' value="Sweden">Sweden</option>
<option className='text-black' value="Switzerland">Switzerland</option>
<option className='text-black' value="Syria">Syrian Arab Republic</option>
<option className='text-black' value="Taiwan">Taiwan, Province of China</option>
<option className='text-black' value="Tajikistan">Tajikistan</option>
<option className='text-black' value="Tanzania">Tanzania, United Republic of</option>
<option className='text-black' value="Thailand">Thailand</option>
<option className='text-black' value="Togo">Togo</option>
<option className='text-black' value="Tokelau">Tokelau</option>
<option className='text-black' value="Tonga">Tonga</option>
<option className='text-black' value="Trinidad and Tobago">Trinidad and Tobago</option>
<option className='text-black' value="Tunisia">Tunisia</option>
<option className='text-black' value="Turkey">Turkey</option>
<option className='text-black' value="Turkmenistan">Turkmenistan</option>
<option className='text-black' value="Turks and Caicos">Turks and Caicos Islands</option>
<option className='text-black' value="Tuvalu">Tuvalu</option>
<option className='text-black' value="Uganda">Uganda</option>
<option className='text-black' value="Ukraine">Ukraine</option>
<option className='text-black' value="United Arab Emirates">United Arab Emirates</option>
<option className='text-black' value="United Kingdom">United Kingdom</option>
<option className='text-black' value="United States">United States</option>
<option className='text-black' value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option className='text-black' value="Uruguay">Uruguay</option>
<option className='text-black' value="Uzbekistan">Uzbekistan</option>
<option className='text-black' value="Vanuatu">Vanuatu</option>
<option className='text-black' value="Venezuela">Venezuela</option>
<option className='text-black' value="Vietnam">Viet Nam</option>
<option className='text-black' value="Virgin Islands (British)">Virgin Islands (British)</option>
<option className='text-black' value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option className='text-black' value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option className='text-black' value="Western Sahara">Western Sahara</option>
<option className='text-black' value="Yemen">Yemen</option>
<option className='text-black' value="Serbia">Serbia</option>
<option className='text-black' value="Zambia">Zambia</option>
<option className='text-black' value="Zimbabwe">Zimbabwe</option>
</select>
<div className={`flex flex-col ${!sign && "hidden"}`}>

          <input
        className="relative outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        name="user_discord"
        placeholder="Discord Username"
        value={discordName}
        onChange={(event)=>{
          setDiscordName(event.target.value)
        }}
        required
      ></input>
          <input
        className="relative outline-none  px-8 mt-4 text-[16px] xl:text-[18px]  rounded-[10px] w-[350px] xl:w-[468px] h-[50px] bg-transparent opacity-80 border-[1px] border-[#7B48ED]"
        name="user_twitter"
        placeholder="Twitter Username"
        value={twitterName}
        onChange={(event)=>{
          setTwitterName(event.target.value)
        }}
        required
      ></input>
     
<button
        type="submit"
        value="Send"
        
        className="relative bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 mt-4 w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
     
      >
        Create Account
      </button>
      </div>
      <button
        type="submit"
        value="Send"
       
        className={`relative ${sign && "hidden"} bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10 mt-4 w-[350px] xl:w-[468px] h-[56px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] `}
     
      >
        Sign In
      </button>
             <div className={`absolute ${ sign?"top-[33.3rem]":"top-[15.3rem]"} flex flex-col xl:flex-row`}>
             <label className="relative left-12 xl:left-6 top-2 text-[16px] xl:text-[18px] font-[700]">
                You already have an account? {user?.email}
             </label>
             
             <div
      value="Login"
      className="relative flex justify-center items-center cursor-pointer bg-gradient-to-r from-[#FFFFFF00]/10 to-[#523F83]/10  xl:left-[2rem] top-8 xl:top-1   w-[350px] xl:w-[68px] h-[36px] text-[16px] font-[600] border-[1px] rounded-[16px] border-[#a98be4] "
      onClick={handleSignIn}
    >
        {sign ?"Sign In":"Sign Up"}
        </div>
        </div>
   
        <div className={`absolute top-0 ${animOn && "animate-[errornotificationdisappear_.5s_linear_forwards]"} ${errorNotification==0 ? "animate-[errornotificationappear_.5s_linear_forwards]":"hidden"}  right-[4.5rem] xl:right-[-24rem] `}>
     <NotificationCard logo={<div className='text-[40px]'><CgDanger /> </div>} message={registerError} messagesize=" text-[14px] "  messagebg="bg-[#e03c3c]" colorbg="bg-[#c62222]" size= " w-[340px] xl:w-[380px] h-[100px]" />
     
     </div>
    
    </form>
  )
}

export default SignUp
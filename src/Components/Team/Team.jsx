import React,{useState} from 'react'
import DescriptionSlider from './DescriptionSlider';
import MemberCard from './MemberCard';
import Fade from 'react-reveal/Fade'

const Team = () => {
  const [showDiscord,setShowDiscord]=useState(-1)
  return (

    <div name="Team" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col h-[70rem] items-center w-[23rem] xl:w-[78rem]">
    <Fade top>
      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white   ">
    TEAM
      </h1>
      </Fade>

      <div  className='relative z-20   xl:flex flex-col items-center w-full h-[200rem] top-[10rem] xl:top-[8rem]  '>
        <Fade bottom >
        <h1 className='absolute top-[-5rem] xl:top-[-6rem] text-white text-[34px] xl:text-[48px] font-[600] left-[7.5rem]  xl:left-[33.5rem]'>Founder</h1>
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] left-[.3rem] xl:left-[20rem] z-20' />
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] right-[0.3rem] xl:right-[20rem] z-20' />
          <div className='absolute h-[.5rem] w-[22.2rem] xl:w-[38rem] bg-white top-[-1rem] left-[.3rem] xl:left-[20rem]' />  
          <div className='xl:flex xl:flex-row grid grid-cols-2  left-[2rem] xl:left-0   w-full justify-center'>
          <div> <MemberCard linkedin="https://www.linkedin.com/in/cristian-bujorea-105a851a1/" discord="Cristian87#2629" rolemember="Founder" namemember="BUJOREA CRISTIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Cristian.jpeg')} />} /></div>
      <div className='relative'><MemberCard show={showDiscord==-1 && true} discord="Livon#9432" twitter="https://twitter.com/BujoreaDaniel" instagram="https://www.instagram.com/bujo.didi/" rolemember="Founder" namemember="BUJOREA DANIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Daniel.jpeg')} />} /></div>
      <div className='relative left-[5.5rem] xl:left-0'>
      <div><MemberCard telegram="https://t.me/MihaiM369" discord="MihaiM369#6929" twitter="https://twitter.com/MihaiM369" instagram="https://www.instagram.com/mihaim369/" rolemember="Founder" namemember="MARINESCU MIHAI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Marinescu_Mihai.jpeg')} />} /></div>
      </div>
      </div>
      </Fade>

      <Fade bottom >
        <div className=' grid grid-cols-2 xl:flex xl:flex-row  xl:justify-center mt-[10rem] xl:mt-40' >
          <h1 className='absolute top-[-5rem] xl:top-[-6rem] text-white text-[34px] xl:text-[48px] font-[600] left-[6rem]  xl:left-[13rem]'>Technology</h1>
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] left-[.3rem] xl:left-[1rem]' />
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] right-[0.3rem] xl:right-[17rem]' />
          <div className='absolute h-[.5rem] w-[22.2rem] xl:w-[15rem] xl:w-[37rem] bg-white top-[-1rem] left-[.3rem] xl:left-[1rem]' />
         
          <h1 className='absolute top-[77rem] xl:top-[-6rem]  text-white text-[34px] xl:text-[48px] font-[600] left-[7rem] xl:left-[42.5rem]'>Marketing</h1>
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[83rem] xl:top-[-1rem] left-[.3rem] xl:left-[54rem] z-20' />
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[83rem] xl:top-[-1rem] right-[.3rem] xl:right-[12rem] z-20' />
          <div className='absolute h-[.5rem] w-[22.2rem] xl:w-[11rem] bg-white top-[83rem] xl:top-[-1rem] left-[.3rem] xl:left-[43rem]' />  
          <div className='flex flex-col'>
          <div className='relative'>
      <MemberCard linkedin="https://www.linkedin.com/in/ionescu-catalin-a7846524b/" discord="Adrian I SAFARI ACADEMY#5440" rolemember="NFT Designer & Arhitect" namemember="IONESCU CATALIN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Ionescu_Catalin.jpeg')} />} />
      </div>
      <div className='relative'><MemberCard telegram="https://t.me/CorneliusD94" discord="Cornelius#3664" instagram="https://www.instagram.com/cornelius.daniell/" linkedin="https://t.co/ljMgToLRKa" rolemember="Mobile App Developer" namemember="FIRCA CORNELIUS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Firca_Cornelius.jpeg')} />} />
      </div>
   </div>
   <div className='flex flex-col'>
   <div className='relative'>
   <MemberCard instagram="https://www.instagram.com/iulian.cehan/" discord="CehanIulian#0566" rolemember="Arhitect & Designer" namemember="CEHAN IULIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cehan_Iulian.jpeg')} />} />
   </div>
   <div className='relative'>
   <MemberCard rolemember="Website Developer" namemember="POLEAC STEFAN" discord="Quequeg#1447" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Poleac_Stefan.jpeg')} />} />
   </div>
      </div>
      <div className='xl:flex grid grid-cols-2 w-[23rem] xl:w-full flex-col'>
      <div className='relative'> 
      <MemberCard twitter="https://twitter.com/NegresBogdan" discord="Bogdan.N#2773" telegram="https://t.me/NegresBogdan" rolemember="Cryptoforest Manager"  namemember="NEGRES BOGDAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Negres_Bogdan.jpeg')} />} />
      </div>
        <div className='relative'>  
      <MemberCard linkedin="https://www.linkedin.com/in/%C5%9Ftefan-carchilan-216839228/" discord="Carchilan Stefan#4551" twitter="https://twitter.com/stefancarchilan" rolemember="Video Editor & Copywriter" namemember="CARCHILAN STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Carchilan_Stefan.jpeg')} />} />
      </div>
      </div>
     <div className='relative grid grid-cols-2 w-[23rem] xl:w-full xl:flex xl:left-0 left-[-12rem] top-[34.5rem] xl:top-0 xl:ml-[3rem] xl:flex-col'>
     <div className='relative'> <MemberCard linkedin="https://www.linkedin.com/in/stefan-marius-burchiu-517b49187/" discord="Burchiu Stefan#4882" telegram="https://t.me/stefanburchiu" twitter="https://twitter.com/burchiustefanmk" rolemember="Marketing Project Manager" namemember="BURCHIU STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Burchiu_Stefan.jpeg')} />} />
     </div>
     <div className='relative'>
     <MemberCard linkedin="https://www.linkedin.com/in/stefan-marius-burchiu-517b49187/" discord="Nothing to see here" telegram="https://t.me/stefanburchiu" twitter="https://twitter.com/burchiustefanmk" rolemember="Tiktok" namemember="GEORGIANA BIANU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Georgiana_Bianu.jpg')} />} />
     </div>
     </div>
     

   
      </div>
      </Fade>
      <Fade bottom >
     <div className='grid grid-cols-2 xl:flex xl:flex-row mt-[47rem] xl:mt-40 w-full justify-center'>
     <h1 className='absolute top-[-6rem] text-white text-[34px] xl:text-[48px] font-[600] left-[8.2rem] xl:left-[35rem]'>Social</h1>
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] left-[.3rem] xl:left-[7rem] z-20' />
          <div className='absolute h-[4rem] w-[.5rem] bg-white top-[-1rem] right-[0.3rem] xl:right-[7rem] z-20' />
          <div className='absolute h-[.5rem] w-[22.2rem] xl:w-[64rem] bg-white top-[-1rem] left-[.3rem] xl:left-[7rem]' />  
          <div className='relative'>
      <MemberCard rolemember="Discord Manager" namemember="STANCA PATRICK" discord="Bid House#4568" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanca_Patrick.jpeg')} />} />
      </div>
      <div className='relative'> <MemberCard telegram="https://t.me/andrey_cioloca5" discord="Andrei Cioloca#5766" twitter="https://twitter.com/AndreiCioloca" linkedin="https://www.linkedin.com/in/andrei-cioloca-b88730225/" rolemember="Twitter & Copywriter" namemember="CIOLOCA ANDREI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cioloaca_Andrei.jpeg')} />} />
      </div>
      <div className='relative' >
      <MemberCard telegram="https://t.me/dragoslics" discord="Dragos | Dj#9514" rolemember="Telegram Manager" namemember="LICSANDRU DRAGOS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Licsandru_Dragos.jpeg')} />} />
      </div>
      <div className='relative'>
      <MemberCard twitter="https://twitter.com/GabrielOprica?t=WI99LovXg9XTA0hrqFFm3A&s=09" discord="loțiunea | BIDHOUSE#9359" rolemember="Discord Moderator"  namemember="OPRICA GABRIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Oprica_Gabriel.jpeg')} />} />  
      </div>
      <div className='relative left-[5.5rem] xl:left-0'>
      <MemberCard rolemember="FB & Insta Moderator" namemember="STANESCU ALEXANDRU" discord="Exe#6837" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanescu_Alexandru.jpeg')} />} />
      </div>
      </div>
      </Fade>
    

   
      </div>
      <Fade bottom >
      <div className='absolute z-20 hidden xl:block top-[347rem] xl:top-[150rem] '>
      <DescriptionSlider />


      </div>
      </Fade>
      </div>
      </div>
  )
}

export default Team;
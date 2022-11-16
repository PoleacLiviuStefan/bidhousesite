import React from 'react'
import DescriptionSlider from './DescriptionSlider';
import MemberCard from './MemberCard';
import Fade from 'react-reveal/Fade'

const Team = () => {
  return (

    <div name="Team" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col h-[70rem] items-center w-[23rem] xl:w-[78rem]">
    <Fade top>
      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white   ">
    TEAM
      </h1>
      </Fade>
      <div  className='relative z-20  grid grid-cols-2 xl:grid-cols-6 w-full h-[200rem] top-[-2rem] xl:top-[8rem] w-full '>
        <Fade bottom >
      <MemberCard linkedin="https://www.linkedin.com/in/cristian-bujorea-105a851a1/" rolemember="Founder" namemember="BUJOREA CRISTIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Cristian.jpeg')} />} />
      <MemberCard twitter="https://twitter.com/BujoreaDaniel" instagram="https://www.instagram.com/bujo.didi/" rolemember="Founder" namemember="BUJOREA DANIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Daniel.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard telegram="https://t.me/MihaiM369" twitter="https://twitter.com/MihaiM369" instagram="https://www.instagram.com/mihaim369/" rolemember="Founder" namemember="MARINESCU MIHAI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Marinescu_Mihai.jpeg')} />} />
      <MemberCard linkedin="https://www.linkedin.com/in/bianca-dobre-0799a3248/" rolemember="NFT Marketing Analyst" namemember="DOBRE BIANCA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Dobre_Bianca.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard instagram="https://www.instagram.com/p/CkTaoSTDCbC/?igshid=YmMyMTA2M2Y=" rolemember="NFT Designer & Arhitect" namemember="COJOCARI LIUBOVI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cojocari_Liubovi.jpeg')} />} />
      <MemberCard linkedin="https://www.linkedin.com/in/ionescu-catalin-a7846524b/" rolemember="NFT Designer & Arhitect" namemember="IONESCU CATALIN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Ionescu_Catalin.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard instagram="https://www.instagram.com/iulian.cehan/" rolemember="Arhitect" namemember="CEHAN IULIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cehan_Iulian.jpeg')} />} />
      <MemberCard linkedin="https://www.linkedin.com/in/stefan-marius-burchiu-517b49187/" telegram="https://t.me/stefanburchiu" twitter="https://twitter.com/burchiustefanmk" rolemember="Marketing Project Manager" namemember="BURCHIU STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Burchiu_Stefan.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard instagram="https://instagram.com/s.fabianaaa?igshid=YmMyMTA2M2Y=" linkedin="https://www.linkedin.com/in/fabiana-georgiana-stroie-574b6b245/" rolemember="Social Media Manager" namemember="STROIE FABIANA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stroie_Fabiana.jpeg')} />} />
      <MemberCard rolemember="Discord Manager" namemember="STANCA PATRICK" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanca_Patrick.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard twitter="https://twitter.com/AndreiBunta?t=eDD-CgEi5b9QIfrFMACdUQ&s=07" telegram="https://t.me/andreibunta" rolemember="Discord Collab Manager" namemember="BUNTA ANDREI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bunta_Andrei.jpeg')} />} />
      <MemberCard twitter="https://twitter.com/GabrielOprica?t=WI99LovXg9XTA0hrqFFm3A&s=09" rolemember="Discord Moderator"  namemember="OPRICA GABRIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Oprica_Gabriel.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard telegram="https://t.me/CorneliusD94" instagram="https://www.instagram.com/cornelius.daniell/" linkedin="https://t.co/ljMgToLRKa" rolemember="Mobile App Developer" namemember="FIRCA CORNELIUS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Firca_Cornelius.jpeg')} />} />
      <MemberCard instagram="https://www.instagram.com/patrickradu/" rolemember="Website Developer" namemember="SAMSON RADU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Samson_Radu.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard rolemember="Website Developer" namemember="POLEAC STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Poleac_Stefan.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="VRINCEANU ROBERT" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Vrinceanu_Robert.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard linkedin="https://www.linkedin.com/in/%C5%9Ftefan-carchilan-216839228/" twitter="https://twitter.com/stefancarchilan" rolemember="Video Editor & Copywriter" namemember="CARCHILAN STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Carchilan_Stefan.jpeg')} />} />
      <MemberCard rolemember="Copywriter" namemember="DASCALU IOANA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Dascalu_Ioana.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard telegram="https://t.me/andrey_cioloca5" twitter="https://twitter.com/AndreiCioloca" linkedin="https://www.linkedin.com/in/andrei-cioloca-b88730225/" rolemember="Copywriter" namemember="CIOLOCA ANDREI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cioloaca_Andrei.jpeg')} />} />
      <MemberCard twitter="https://twitter.com/NegresBogdan" telegram="https://t.me/NegresBogdan" rolemember="Cryptoforest Manager"  namemember="NEGRES BOGDAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Negres_Bogdan.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard telegram="https://t.me/dragoslics" rolemember="Telegram Manager" namemember="LICSANDRU DRAGOS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Licsandru_Dragos.jpeg')} />} />
      <MemberCard rolemember="Sound Enginner" namemember="STANESCU ALEXANDRU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanescu_Alexandru.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard rolemember="Photoshop Editor" namemember="MARIA SEVASTRE" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Maria_Sevastre.jpeg')} />} />
      <MemberCard rolemember="Telegram Manager" namemember="VISALOM IOAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Visalom_Ioan.jpeg')} />} />
      </Fade>
      <Fade bottom >
      <MemberCard instagram="https://www.instagram.com/floreaa__/" rolemember="Arhitect" namemember="FLORESCU ALEXANDRU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Florea_Alexandru.jpeg')} />} />
      <MemberCard instagram="https://www.instagram.com/fabi_lm11/" rolemember="Arhitect" namemember="FLORESCU FABIAN" photo={<img className='w-[170px] h-[170px]  xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Florea_Fabian.jpeg')} />} />
      </Fade>
      </div>
      <Fade bottom >
      <div className='absolute z-20 hidden xl:block top-[372rem] xl:top-[175rem] '>
      <DescriptionSlider />


      </div>
      </Fade>
      </div>
      </div>
  )
}

export default Team;
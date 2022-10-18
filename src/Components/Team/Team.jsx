import React from 'react'
<<<<<<< HEAD
import DescriptionSlider from './DescriptionSlider';
=======
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
import MemberCard from './MemberCard';

const Team = () => {
  return (
<<<<<<< HEAD
    <div name="Team" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col h-[70rem] items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[76px]  leading-[112px] text-white   ">
    TEAM
      </h1>
      <div  className='relative grid grid-cols-4 w-full h-[50rem] top-[8rem] w-full '>
      <MemberCard rolemember="Founder" namemember="BUJOREA CRISTIAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Bujorea_Cristian.jpeg')} />} />
      <MemberCard rolemember="Founder" namemember="BUJOREA DANIEL" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Bujorea_Daniel.jpeg')} />} />
      <MemberCard rolemember="Founder" namemember="MARINESCU MIHAI" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Marinescu_Mihai.jpeg')} />} />
      <MemberCard rolemember="NFT Marketing Analyst" namemember="DOBRE BIANCA" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Dobre_Bianca.jpeg')} />} />
      <MemberCard rolemember="NFT Designer & Arhitect" namemember="COJOCARI LIUBOVI" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Bujorea_Cristian.jpeg')} />} />
      <MemberCard rolemember="NFT Designer & Arhitect" namemember="IONESCU CATALIN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Ionescu_Catalin.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="CEHAN IULIAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Cehan_Iulian.jpeg')} />} />
      <MemberCard rolemember="Marketing Project Manager" namemember="BURCHIU STEFAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Burchiu_Stefan.jpeg')} />} />
      <MemberCard rolemember="Social Media Manager" namemember="STROIE FABIANA" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Stroie_Fabiana.jpeg')} />} />
      <MemberCard rolemember="Discord Manager" namemember="STANCA PATRICK" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Stanca_Patrick.jpeg')} />} />
      <MemberCard rolemember="Discord Collab Manager" namemember="BUNTA ANDREI" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Bunta_Andrei.jpeg')} />} />
      <MemberCard rolemember="Discord Moderator" namemember="OPRICA GABRIEL" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Oprica_Gabriel.jpeg')} />} />
      <MemberCard rolemember="Mobile App Developer" namemember="FIRCA CORNELIUS" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Firca_Cornelius.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="SAMSON RADU" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Samson_Radu.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="POLEAC STEFAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Poleac_Stefan.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="VRINCEANU ROBERT" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Vrinceanu_Robert.jpeg')} />} />
      <MemberCard rolemember="Video Editor & Copywriter" namemember="CARCHILAN STEFAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Carchilan_Stefan.jpeg')} />} />
      <MemberCard rolemember="Copywriter" namemember="DASCALU IOANA" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Dascalu_Ioana.jpeg')} />} />
      <MemberCard rolemember="Copywriter" namemember="CIOLOACA ANDREI" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Cioloaca_Andrei.jpeg')} />} />
      <MemberCard rolemember="Cryptoforest Manager" namemember="NEGRES BOGDAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Negres_Bogdan.jpeg')} />} />
      <MemberCard rolemember="Telegram Manager" namemember="LICSANDRU DRAGOS" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Licsandru_Dragos.jpeg')} />} />
      <MemberCard rolemember="Sound Enginner" namemember="STANESCU ALEXANDRU" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Stanescu_Alexandru.jpeg')} />} />
      <MemberCard rolemember="Photoshop Editor" namemember="MARIA SEVASTRE" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Maria_Sevastre.jpeg')} />} />
      <MemberCard rolemember="Telegram Manager" namemember="VISALOM IOAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Visalom_Ioan.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="FLOREA ALEXANDRU" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Florea_Alexandru.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="FLOREA FABIAN" photo={<img className='w-[240px] h-[240px]' src={require('./membersphotos/Florea_Fabian.jpeg')} />} />
      </div>
      <div className='absolute top-[270rem] '>
      <DescriptionSlider />
=======
    <div className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col items-center w-[78rem]">
      <h1 className="font-[600] text-[45px] 2xl:text-[80px] 3xl:text-[96px] leading-[112px] text-white   ">
    TEAM
      </h1>
      <div  className='relative flex justify-center w-full h-[50rem] top-[10rem] w-full '>
      <MemberCard rolemember="Founder" namemember="CRISTIAN " />
>>>>>>> f561e35afb1aa40fede2b32598c9017a0f6ae9a8
      </div>
      </div>
      </div>
  )
}

export default Team;
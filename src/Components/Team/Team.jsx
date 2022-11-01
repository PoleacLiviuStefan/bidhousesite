import React from 'react'
import DescriptionSlider from './DescriptionSlider';
import MemberCard from './MemberCard';

const Team = () => {
  return (

    <div name="Team" className="relative flex flex-col items-center w-full h-[130rem] ">
    <div className="flex flex-col h-[70rem] items-center w-[23rem] xl:w-[78rem]">
      <h1 className="font-[600] text-[30px] xl:text-[52px] xl:leading-[72px] 2xl:text-[76px]  2xl:xl:leading-[112px] text-white   ">
    TEAM
      </h1>
      <div  className='relative z-20  grid grid-cols-2 xl:grid-cols-6 w-full h-[200rem] top-[-2rem] xl:top-[8rem] w-full '>
      <MemberCard rolemember="Founder" namemember="BUJOREA CRISTIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Cristian.jpeg')} />} />
      <MemberCard rolemember="Founder" namemember="BUJOREA DANIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bujorea_Daniel.jpeg')} />} />
      <MemberCard rolemember="Founder" namemember="MARINESCU MIHAI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Marinescu_Mihai.jpeg')} />} />
      <MemberCard rolemember="NFT Marketing Analyst" namemember="DOBRE BIANCA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Dobre_Bianca.jpeg')} />} />
      <MemberCard rolemember="NFT Designer & Arhitect" namemember="COJOCARI LIUBOVI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cojocari_Liubovi.jpeg')} />} />
      <MemberCard rolemember="NFT Designer & Arhitect" namemember="IONESCU CATALIN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Ionescu_Catalin.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="CEHAN IULIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cehan_Iulian.jpeg')} />} />
      <MemberCard rolemember="Marketing Project Manager" namemember="BURCHIU STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Burchiu_Stefan.jpeg')} />} />
      <MemberCard rolemember="Social Media Manager" namemember="STROIE FABIANA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stroie_Fabiana.jpeg')} />} />
      <MemberCard rolemember="Discord Manager" namemember="STANCA PATRICK" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanca_Patrick.jpeg')} />} />
      <MemberCard rolemember="Discord Collab Manager" namemember="BUNTA ANDREI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Bunta_Andrei.jpeg')} />} />
      <MemberCard rolemember="Discord Moderator" namemember="OPRICA GABRIEL" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Oprica_Gabriel.jpeg')} />} />
      <MemberCard rolemember="Mobile App Developer" namemember="FIRCA CORNELIUS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Firca_Cornelius.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="SAMSON RADU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Samson_Radu.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="POLEAC STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Poleac_Stefan.jpeg')} />} />
      <MemberCard rolemember="Website Developer" namemember="VRINCEANU ROBERT" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Vrinceanu_Robert.jpeg')} />} />
      <MemberCard rolemember="Video Editor & Copywriter" namemember="CARCHILAN STEFAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Carchilan_Stefan.jpeg')} />} />
      <MemberCard rolemember="Copywriter" namemember="DASCALU IOANA" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Dascalu_Ioana.jpeg')} />} />
      <MemberCard rolemember="Copywriter" namemember="CIOLOCA ANDREI" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Cioloaca_Andrei.jpeg')} />} />
      <MemberCard rolemember="Cryptoforest Manager" namemember="NEGRES BOGDAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Negres_Bogdan.jpeg')} />} />
      <MemberCard rolemember="Telegram Manager" namemember="LICSANDRU DRAGOS" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Licsandru_Dragos.jpeg')} />} />
      <MemberCard rolemember="Sound Enginner" namemember="STANESCU ALEXANDRU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Stanescu_Alexandru.jpeg')} />} />
      <MemberCard rolemember="Photoshop Editor" namemember="MARIA SEVASTRE" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Maria_Sevastre.jpeg')} />} />
      <MemberCard rolemember="Telegram Manager" namemember="VISALOM IOAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Visalom_Ioan.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="FLORESCU ALEXANDRU" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Florea_Alexandru.jpeg')} />} />
      <MemberCard rolemember="Arhitect" namemember="FLORESCU FABIAN" photo={<img className='w-[170px] h-[170px] xl:w-[180px] xl:h-[180px]' src={require('./membersphotos/Florea_Fabian.jpeg')} />} />
      </div>
      <div className='absolute z-20 hidden xl:block top-[372rem] xl:top-[175rem] '>
      <DescriptionSlider />


      </div>
      </div>
      </div>
  )
}

export default Team;
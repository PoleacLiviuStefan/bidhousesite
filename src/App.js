
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/Navbar/NavbarMobile';
import PrincipalInfo from './Components/PrincipalInfo/PrincipalInfo';
import TheBenefits from './Components/TheBenefits/TheBenefits';



function App() {
  return (
    <div >
      <div className='hidden xl:block'>
        <Navbar />
      </div>
      <div className='block xl:hidden'>
        <NavbarMobile />
      </div>
      <Hero />
      <TheBenefits />
      <PrincipalInfo />

    </div>
  );
}

export default App;

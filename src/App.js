
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/Navbar/NavbarMobile';
import PrincipalInfo from './Components/PrincipalInfo/PrincipalInfo';
import TheBenefits from './Components/TheBenefits/TheBenefits';
import { Route, Routes, Link } from "react-router-dom"



function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<>  <div className='hidden xl:block'>
        <Navbar />
      </div>
      <div className='block xl:hidden'>
        <NavbarMobile />
      </div>
      <Hero />
      
      <TheBenefits />
      <PrincipalInfo /></>
        } />
      </Routes>
    </div>
  );
}

export default App;

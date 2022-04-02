import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import ME from "../../assets/me.png";

const Header = () => {
  useEffect(()=>{
    Aos.init({
      offset:0,
      duration:1200
    });
    }, [])
  return (
    <>
      <header id="header" data-aos="fade-up">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Saurabh Anand</h1>
          <h5 className="text-light">MERN Stack Developer</h5>
          <Cta />
          <HeaderSocials />
          <div className="me">
              <img src={ME} alt="me" />
          </div>
          <a href="#Contacts" className="scroll__down">Scroll Down</a>
        </div>
        
      </header>
    </>
  );
};

export default Header;

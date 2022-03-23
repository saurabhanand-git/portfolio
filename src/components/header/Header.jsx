import React from "react";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Saurabh Anand</h1>
          <h5 className="text-light">MERN Stack Developer</h5>
          <Cta />
          <HeaderSocials />
          <div className="me">
              <img src={ME} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
        
      </header>
    </>
  );
};

export default Header;

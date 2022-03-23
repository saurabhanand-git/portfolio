import React from "react";
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/"><BsLinkedin /></a>
      <a href="https://github.com/"><BsGithub /></a>
      <a href="https://www.instagram.com/"><BsInstagram /></a>
     
    </div>
  );
};

export default HeaderSocials;

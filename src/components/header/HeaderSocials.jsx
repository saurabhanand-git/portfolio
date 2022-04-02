import React from "react";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/saurabh-anand-4a5459193/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/saurabhanand-git/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.discordapp.com/users/cypher_._#1618/" target="_blank">
      <BsDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;

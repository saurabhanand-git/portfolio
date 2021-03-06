import { React, useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineExperiment,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {BsAward} from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="About Me"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        title="My Experiences"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#Skills"
        title="My Skills"
        onClick={() => setActiveNav("#Skills")}
        className={activeNav === "#Skills" ? "active" : ""}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href="#projects"
        title="My Projects"
        onClick={() => setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#achievement"
        title="Achievement"
        onClick={() => setActiveNav("#Contacts")}
        className={activeNav === "#Contacts" ? "active" : ""}
      >
        <BsAward />
      </a>
    </nav>
  );
};

export default Nav;

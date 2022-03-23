import { React,useState } from "react";
import "./Nav.css";
import { AiOutlineHome,AiOutlineContacts,AiOutlineUser,AiOutlineBook,AiOutlineExperiment,AiOutlineFundProjectionScreen} from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav]= useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav==="#" ?"active":""}>
        <AiOutlineHome />
      </a>
      <a href="#about" title="About Me" onClick={()=>setActiveNav("#about")} className={activeNav==="#about" ?"active":""}><AiOutlineUser /></a>
      <a href="#experience" title="My Experiences" onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience" ?"active":""}><AiOutlineBook /></a>
      <a href="#Skills" title="My Skills" onClick={()=>setActiveNav("#Skills")} className={activeNav==="#Skills" ?"active":""}><AiOutlineExperiment /></a>
      <a href="#Projects" title="My Projects" onClick={()=>setActiveNav("#Projects")} className={activeNav==="#Projects" ?"active":""}><AiOutlineFundProjectionScreen /></a>
      <a href="#Contacts" title="Contact Me" onClick={()=>setActiveNav("#Contacts")} className={activeNav==="#Contacts" ?"active":""}><AiOutlineContacts /></a>
    </nav>
  );
};

export default Nav;

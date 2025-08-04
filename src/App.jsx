import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Achievement from "./components/achievements/Achievement";  


const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <About data-aos="fade-up" />
      <Experience />
      <Skills />
      <Projects />
      <Achievement />
      <Contacts />
    </>
  );
};

export default App;

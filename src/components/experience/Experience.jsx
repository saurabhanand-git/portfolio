import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { VscDebugBreakpointData } from "react-icons/vsc";
import "./Experience.css";
const Experience = () => {
  useEffect(()=>{
    Aos.init({
      offset:150,
      duration:1200
    });
    }, [])
  return (
    <section id="experience" data-aos="fade-up">
      <h5>Real Life Exposure</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experiences">
          <h3>Coding Ninjas | INTERN </h3>
          <div className="experience__content">
            <h2 className="experience__duration">MAR 2022‐JUNE 2022 | REMOTE</h2>
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons"/>
              <h4>Technical Content Writer</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData className="experience__deatils-icons"/>
              <h4>DSA, Cloud Computing, Web-Dev</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4><a href="https://docs.google.com/document/d/1mRJhoFYIgyVU3BoAq1boUFV7qQ2rmWnh0oBge6GOYOc/edit?usp=sharing" target="_blank" >Live Article Links</a></h4>
            </div>
            
          </div>
        </div>
        <div className="experiences">
          <h3>GeekforGeeks | INTERN </h3>
          <div className="experience__content">
            <h2 className="experience__duration">JAN 2022‐FEB 2022 | REMOTE</h2>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4>Technical Content Writer</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4>Research, write, edit and revise content</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4><a href="https://auth.geeksforgeeks.org/user/saurabh_anand/articles" target="_blank">Live Article Links</a></h4>
            </div>
          </div>
        </div>
        <div className="experiences">
          <h3>Conneqtion Group | INTERN ORACLE TRAINEE </h3>
          <div className="experience__content">
            <h2 className="experience__duration">DEC 2021‐FEB 2022 | REMOTE</h2>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4>Worked on data integration and automation.</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4>Consumed ORDS services in VBCS.</h4>
            </div>
            <div className="experience__details">
              <VscDebugBreakpointData />
              <h4>WEB‐D using VBCS</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

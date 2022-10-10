import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import about_image from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import {MdOutlineSchool} from "react-icons/md";
import "./About.css";


const About = () => {
  useEffect(()=>{
    Aos.init({
      offset:150,
      duration:900
    });
    }, [])
  return (
    <section id="about" data-aos="fade-up">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={about_image} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5><a href="http://www.mmmut.ac.in/" target="_blank">MMMUT</a></h5>
              <small>2019-2023</small>
              <h5>B.tech(IT)</h5>
              <small>CGPA 8.0</small>
            </article>

            <article className="about__card">
            <MdOutlineSchool className="about__icon" />
              <h5><a href="http://www.sunbeamschools.com/school/lahartara" target="_blank">SUNBEAM</a></h5>
              <small>2017-2018</small>
              <h5>12th</h5>
              <small>83.8%</small>
            </article>
            

            <article className="about__card">
            <MdOutlineSchool className="about__icon" />
              <h5><a href="http://www.sunbeamschools.com/school/lahartara" target="_blank">SUNBEAM</a></h5>
              <small>2014-2015</small>
              <h5>10th</h5>
              <small>CGPA 9.6</small>
            </article>
          </div>
          <p>
            I am a Final Year Undergraduate at MMMUT, Gorakhpur, pursuing
            Bachelors of Technology in Information Technology. I'm adaptable and
            a quick learner who is eager to learn new technologies and utilising
            my free time in a better way. I have a keen interest in Web
            Development . I am just a beginner in this development field and
            looking forward to explore and expertise in it. Also, I have a
            decent knowledge of C, C++ (Most Comfortable) ,and JavaScript. I am
            currently working on sharpening my Problem Solving skills and hope
            that I will get good in near future.
          </p>
          <a href="#Contacts" className="contact__button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

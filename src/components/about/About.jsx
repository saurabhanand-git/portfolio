import React from "react";
import about_image from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <section id="about">
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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <BsPeople className="about__icon" />
              <h5>Clients</h5>
              <small>200+ world</small>
            </article>

            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ complited</small>
            </article>
          </div>
          <p>
            I am a Third Year Undergraduate at MMMUT, Gorakhpur, pursuing
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

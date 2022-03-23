import React from "react";
import about_image from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {VscFolder} from "react-icons/vsc";
import {BsPeople} from "react-icons/bs";
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
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className="about__card">
            <BsPeople className="about__icon"/>
            <h5>Clients</h5>
            <small>200+ world</small>
          </article>

          <article className="about__card">
            <VscFolder className="about__icon"/>
            <h5>Projects</h5>
            <small>80+ complited</small>
          </article>
          </div>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus necessitatibus nihil ab natus harum, dignissimos aperiam quidem eum consequuntur incidunt ipsa porro sequi commodi cumque itaque fuga iste exercitationem neque.</p>
          <a href="#contacts" className="cta btn btn-primary">Contact Me</a>
        </div>
      </div>
     
    </section>
  );
};

export default About;

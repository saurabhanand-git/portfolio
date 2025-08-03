import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import about_image from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 900,
    });
  }, []);
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
              <h5>
                <a href="http://www.mmmut.ac.in/" target="_blank">
                  MMMUT
                </a>
              </h5>
              <small>2019-2023</small>
              <h5>B.tech(IT)</h5>
              <small>CGPA 7.8</small>
            </article>

            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5>
                <a
                  href="http://www.sunbeamschools.com/school/lahartara"
                  target="_blank"
                >
                  SUNBEAM
                </a>
              </h5>
              <small>2017-2018</small>
              <h5>12th</h5>
              <small>83.8%</small>
            </article>

            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5>
                <a
                  href="http://www.sunbeamschools.com/school/lahartara"
                  target="_blank"
                >
                  SUNBEAM
                </a>
              </h5>
              <small>2014-2015</small>
              <h5>10th</h5>
              <small>CGPA 9.6</small>
            </article>
          </div>
          <p>
            <ul>
              <li>
                <strong>ReactJS Developer</strong> at <strong>HCLTech</strong>{" "}
                with <strong>1 year and 10 months</strong> of experience in
                building scalable web applications.
              </li>
              <li>
                Strong interest in the <strong>MERN stack</strong> and creating
                real-world, user-friendly solutions.
              </li>
              <li>
                Actively sharpening problem-solving skills through{" "}
                <strong>DSA</strong> and competitive programming.
              </li>
              <li>
                Published <strong>100+ technical articles</strong> on platforms
                like <em>GeeksforGeeks</em>, <em>Coding Ninjas</em>, and{" "}
                <em>TutorialsPoint</em>.
              </li>
              <li>
                Quick learner, tech enthusiast, and always eager to explore new
                technologies and challenges.
              </li>
            </ul>
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

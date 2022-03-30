import React from "react";
import { BsCheck } from "react-icons/bs";
import "./Skills.css";
const Skills = () => {
  return (
    <section id="Skills">
      <h5>Things I know</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <article className="skills">
          <div className="skills__head">
            <h3>Programming</h3>
          </div>
          <ul className="skills__list">
            <li>
              <BsCheck className="skills__list-icons" />
              <p>C, C++, JavaScript</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>SQL, OOPS</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Data Structures</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Algorithms</p>
            </li>
          </ul>
        </article>

        <article className="skills">
          <div className="skills__head">
            <h3>FRAMEWORK/PLATFORM</h3>
          </div>
          <ul className="skills__list">
            <li>
              <BsCheck className="skills__list-icons" />
              <p>ReactJS</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>NodeJS(working On)</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>MongoDB(working On)</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Oracle Integration Cloud(OIC)</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>HTML,CSS</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Git</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Linux</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Shell scripting</p>
            </li>
          </ul>
        </article>

        <article className="skills">
          <div className="skills__head">
            <h3>TRAINING/COURSES</h3>
          </div>
          <ul className="skills__list">
            <li>
              <BsCheck className="skills__list-icons" />
              <p><a href="https://www.coursera.org/account/accomplishments/certificate/W2FMUGM7UHR9" target="_blank">Front-End Web-D with React</a></p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p><a href="https://www.coursera.org/account/accomplishments/certificate/EC2URA7PZD9Y" target="_blank">INTRODUCTION TO WEB‐D</a></p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>30 DAYS OF GOOGLE CLOUD</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Data Structures and algorithm</p>
            </li>
            <li>
              <BsCheck className="skills__list-icons" />
              <p>Computer Networks</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;

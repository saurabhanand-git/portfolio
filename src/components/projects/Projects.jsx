import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./Projects.css";
import project__data from "./project-data";
import img1 from "../../assets/portfolio1.jpg";

const Projects = () => {
  useEffect(()=>{
    Aos.init({
      offset:150,
      duration:1200
    });
    }, [])
  return (
    <section id="projects" data-aos="fade-up">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      {console.log(project__data.data.projects)}
      <div className="container projects__container">
       
       {
         project__data.data.projects.map(items => {
           return(
          
          <article key={items.id} className="projects__items">
            <div className="projects__items-img">
              <img src={items.image} alt="portfolio1" />
            </div>
            <h3>{items.title}</h3>
           <div className="projects__items-cta">
              <a href={items.github} className="btn" target="_blank">
                Github
              </a>
              <a href={items.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
           </div>
          </article>
           )
         })
       }
         
      

      
        

      </div>
    </section>
  );
};

export default Projects;

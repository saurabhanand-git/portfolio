import React from "react";
import "./Projects.css";
import project__data from "./project-data";
import img1 from "../../assets/portfolio1.jpg";
// import img2 from "../../assets/portfolio2.jpg";
// import img3 from "../../assets/portfolio3.jpg";
// import img4 from "../../assets/portfolio4.jpg";
// import img5 from "../../assets/portfolio5.png";
// import img6 from "../../assets/portfolio6.jpg";
const Projects = () => {
  return (
    <section id="Projects">
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

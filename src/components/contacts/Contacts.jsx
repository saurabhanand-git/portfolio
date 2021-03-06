import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./Contacts.css";
import {MdOutlineMail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com";
const Contacts = () => {
  useEffect(()=>{
    Aos.init({
      offset:150,
      duration:1200
    });
    }, [])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r76isxf', 'template_8l5xgob', form.current, 'ivGbC6LU08Hliho4q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="Contacts" data-aos="fade-up">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__items">
            <MdOutlineMail className="contact__items-icons" />
            <h4>Email</h4>
            <h5>saurabhk3001@gmail.com</h5>
            <a href="mailto:saurabhk3001@gmail.com" target="_blank">Email Me</a>
          </article>

          <article className="contact__items">
            <BsWhatsapp className="contact__items-icons" />
            <h4>WhatsApp</h4>
            <h5>+91 7571015271</h5>
            <a href="https://api.whatsapp.com/send?phone=+917571015271" target="_blank">WhatsApp Me</a>
          </article>

          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required  />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary contact-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

import React from 'react';
import CV from '../../assets/cv.pdf';
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#Contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Cta
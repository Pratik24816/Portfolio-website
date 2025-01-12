import React from 'react';
import logo from "../assets/logo11.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; 

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src={logo} alt="Logo" className="mx-2 w-[150px] h-[150px]" />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/prajapati-pratik-449315265/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>

        <a
          href='https://github.com/Pratik24816'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.instagram.com/prajapati_pratik1022?igsh=MTFhcDAwbmVzMXpleA=='
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

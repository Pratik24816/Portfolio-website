import React from "react";
import profileImage from "../assets/pratik.png"; 
import { HERO_CONTENT } from "../constants/index";
import resume from "../assets/Pratik_resume.pdf"

const Hero = () => {
  return (
    <div className="pb-4 lg:pb-36">
      <div className="flex flex-wrap lg:flex-row-reverse"> 
        <div className="w-full lg:w-1/2 mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="border border-stone-900 rounded-3xl transform transition-all duration-300 ease-in-out hover:ring-4 hover:ring-blue-500 focus:ring-4 focus:ring-blue-500" 
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10">
          {/*Name*/}
          <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
            Pratik Prajapati
          </h2>

          {/*Role*/}
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
            Full Stack Developer
          </span>

          {/* Description*/}
          <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            {HERO_CONTENT}
          </p>

          {/*Resume*/}
          <a
            href={resume} 
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

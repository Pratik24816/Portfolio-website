import React from "react";
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiCplusplus } from "react-icons/si"; 
import { GrCode } from 'react-icons/gr';
import hibernate from '../assets/hibernet.png'


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="bg-gradient-to-l from-blue-900 to-blue-300 bg-clip-text text-4xl font-bold text-center mb-8 text-transparent">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* HTML */}
        <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
          <p className="text-center text-xl">HTML</p>
        </div>

        {/* CSS */}
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
          <p className="text-center text-xl">CSS</p>
        </div>

        {/* JavaScript */}
        <div className="p-4">
          <DiJavascript1 className="text-7xl text-yellow-600" />
          <p className="text-center text-xl">JavaScript</p>
        </div>

        {/* Java */}
        <div className="p-4">
          <FaJava className="text-7xl text-red-600" />
          <p className="text-center text-xl">Java</p>
        </div>

        {/* ReactJS */}
        <div className="p-4">
          <FaReact className="text-7xl text-cyan-400" />
          <p className="text-center text-xl">React.js</p>
        </div>

        {/* MongoDB */}
        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
          <p className="text-center text-xl">MongoDB</p>
        </div>

        {/* C++ */}
        <div className="p-4">
          <GrCode className="text-7xl text-sky-700" />
          <p className="text-center text-xl">C++</p>
        </div>

        {/* C */}
        <div className="p-4">
          <SiCplusplus className="text-7xl text-green-500" />
          <p className="text-center text-xl">C</p>
        </div>

        {/* Hibernate */}
        <div className="p-4">
          <img src={hibernate} alt="Hibernate" className="text-7xl w-24 h-24" />
          <p className="text-center text-xl">Hibernate</p>
        </div>

        {/* DSA */}
        <div className="p-4">
          <span className="text-7xl text-purple-700">🔗</span>
          <p className="text-center text-xl">DSA</p>
        </div>

        {/* Competitive Programming */}
        <div className="p-4">
          <span className="text-7xl text-yellow-500">🏆</span>
          <p className="text-center text-xl">CP</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

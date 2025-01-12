import React from "react";

const studyExperience = [
  {
    period: "2012 - 2022",
    title: "Schooling",
    description:
      "Completed primary and secondary education with a strong focus on science and mathematics with 10th : 79% 12th : 83%(PCM). Achieved excellent academic performance and participated in various extracurricular activities.",
  },
  {
    period: "2022 - Present",
    title: "Undergraduate",
    description:
      "Pursuing a degree information Technology in Dharmsinh Desai Institute of Technology. Gained expertise in web development, real-time systems, and data structures while working on multiple academic and personal projects. also maintain CPI : 8.68 / 10 . ",
  },
];

const StudyExperience = () => {
  return (
    <div className="w-full px-6 py-12">
      <h1 className="bg-gradient-to-l from-blue-900 to-blue-300 bg-clip-text text-4xl font-bold text-center mb-8 text-transparent">
    Study Experience
  </h1>

      <div className="relative w-full border-l-2 border-blue-500 ml-8">
        {studyExperience.map((item, index) => (
          <div
            key={index}
            className="mb-8 ml-4 relative flex flex-col space-y-2"
          >
           
            <div className="absolute left-[-48px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-semibold">
              {index + 1}
            </div>
            <div className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-500 transition-all duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.period}</p>
              <div className="max-h-0 overflow-hidden group-hover:max-h-48 group-hover:mt-2 transition-all duration-500 ease-in-out">
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyExperience;

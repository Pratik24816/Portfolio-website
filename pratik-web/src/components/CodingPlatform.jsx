import React from "react";
import leetcodeimg from '../assets/leetcode.png';
import codechefimg from '../assets/codechef.jpeg';
import leetcodeimg1 from '../assets/leetcode1.png';
import codechefimg1 from '../assets/codechef1.png';

const Platforms = () => {
  const platforms = [
    {
      name: "LeetCode",
      mainImage: leetcodeimg,  
      profileImage:codechefimg1,
      link : "https://leetcode.com/u/Pratik4016/",
    },
    {
      name: "Codechef",
      mainImage: codechefimg,  
      profileImage:leetcodeimg1,
      link :"https://www.codechef.com/users/pratik84",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center py-6">
        <h1 className="bg-gradient-to-l from-blue-900 to-blue-300 bg-clip-text text-4xl font-bold text-center mb-8 text-transparent">
          Welcome to Coding Platforms
        </h1>
      </div>

     
      <div className="flex justify-around items-center w-full">
        {platforms.map((platform, index) => (
          <div key={index} className="relative group w-80">
            <div className="relative overflow-hidden">
              <img
                src={platform.mainImage}
                alt={`${platform.name} Main`}
                className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/*hover */}
              <img
                src={platform.profileImage}
                alt={`${platform.name} Profile`}
                className="absolute inset-0 w-full h-full object-cover transform translate-x-full group-hover:translate-x-0 transition-all duration-500 group-hover:blur-0"
              />
            </div>

            <div className="absolute bottom-10 left-4 text-white text-xl font-semibold transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-4">
              {platform.name}
            </div>

            <a
              href={platform.link}
              className="absolute bottom-4 right-4 px-6 py-2 text-white bg-blue-600 rounded-lg opacity-100 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 hover:bg-blue-700"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;

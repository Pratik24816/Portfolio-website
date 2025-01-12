import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Driven and innovative software engineering student with a solid background
in building dynamic web applications and real-time systems. Skilled in
creating scalable solutions through web projects and Firebase-powered
apps, with a focus on backend development. Passionate about solving
complex problems and delivering meaningful, impactful results, always
ready to approach new challenges with enthusiasm and creativity.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "SyncEditor",
    image: project1,
    description:
      "SyncEditor is a real-time collaborative editing platform that allows users to seamlessly work together on documents, with features like version control, trackable changes, and cloud integration for efficient content management.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB","Socket.io","QuillEditor"],
  },
  {
    title: "MentorMate App",
    image: project2,
    description:
    "Developed an Android app using Java, XML, and Firebase,providing mentorship for users dealing with relationship issuesoverthinking, self-doubt, family conflicts, and career challenges.The app connects users with mentors who offer guidance andsolutions to help them overcome their difficulties",
    technologies: ["XML", "JAVA","Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills,CodingPlatform and contact information.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDb-Atlas"],
  },
  {
    title: "AgriFarm",
    image: project4,
    description:
   " Co-developed a platform offering farmers access to governmentschemes, disease information and solutions, a fertilizer calculator,and a chatbot for resolving queries. The project aimed to enhanceagricultural efficiency and provide real-time support to farmers.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

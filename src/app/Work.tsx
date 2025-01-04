import React from "react";
import {
  SiCplusplus, SiJavascript, SiTypescript, SiPython, SiGit, SiGithub,
  SiPostman, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiJest, SiMysql, SiPostgresql, SiPrisma, SiSocketdotio, SiTailwindcss,
  SiSass, SiNextdotjs, SiMui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ExperienceItem from "./components/Work/ExperienceItem";

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg sm:text-xl font-light text-stone-300">{title}</h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-lime-400/50 transition-all group"
          >
            <div className="text-xl sm:text-2xl text-lime-400 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-sm sm:text-base text-zinc-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkPage: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <SiPython /> },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      title: "Technologies/Frameworks",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Sass", icon: <SiSass /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2 sm:p-4">
      <main className="max-w-4xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <section className="space-y-6 sm:space-y-8 mb-16 sm:mb-24">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-xl opacity-70" />
            <div className="absolute -inset-12 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-base sm:text-lg text-stone-400" style={{textShadow:'0px 2px 2px black'}}>SKILLS</p>
              </div>
              <div className="mb-6 sm:mb-8 ml-0 sm:ml-5">
                <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed" style={{textShadow:'0px 2px 2px black'}}>
                  Over the years, I have honed my skills in a wide range of
                  programming languages, developer tools, and modern
                  technologies. Here&apos;s a glimpse of the technologies that power my
                  journey.
                </p>
              </div>

              {/* Skills Categories */}
              <div className="space-y-6 sm:space-y-8 ml-0 sm:ml-5">
                {skillCategories.map((category, index) => (
                  <SkillCategory
                    key={index}
                    title={category.title}
                    skills={category.skills}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8 sm:space-y-10">
          {/* Experience Header */}
          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-base sm:text-lg text-stone-400">WHERE I HAVE WORKED</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Only visible on large screens */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {/* Automation Edge */}
              <ExperienceItem
                logo="/Automation_edge_logo.png"
                company="Automation Edge"
                location="Pune, India"
                role="Software Developer Intern"
                date="Jan 2025 – Present"
                extraInfo={["Active Contributor"]}
              />

              {/* Pi Reality */}
              <ExperienceItem
                logo="/Pi_reality_logo.png"
                company="Pi Reality"
                location="Bangalore, Remote"
                role="Backend Developer Intern"
                date="Nov 2024 – Dec 2024"
                extraInfo={[
                  "Enhanced the development and optimization of RESTful APIs using Node.js for a gaming application, ensuring efficient data handling and seamless user experience.",
                  "Worked collaboratively with cross-functional teams to design and deliver scalable, maintainable code, integrating authentication, authorization, and caching strategies, resulting in improved system efficiency and performance.",
                ]}
              />

              {/* Growhut */}
              <ExperienceItem
                logo="/Growhut_logo.png"
                company="Growhut"
                location="Gurgaon, Remote"
                role="Frontend Developer Intern"
                date="May 2023 – July 2023"
                extraInfo={[
                  "Contributed to the development of robust web applications leveraging React JS focusing on delivering seamless user interactions.",
                  "Worked closely with backend and UI team to seamlessly integrate frontend features, resolved UI issues and engineered reusable, modular components ensuring a cohesive development process.",
                  "Monitored and analyzed application performance using Google Lighthouse, boosting desktop scores from 42 to 74 and mobile scores from 35 to 50 through techniques like caching and image optimization.",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkPage;
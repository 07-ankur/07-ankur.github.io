import React from "react";
import Image from "next/image";
import { LuActivity } from "react-icons/lu";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJest,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiMui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface ExperienceProps {
  logo: string;
  company: string;
  location: string;
  role: string;
  date: string;
  extraInfo: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  logo,
  company,
  location,
  role,
  date,
  extraInfo,
}) => {
  return (
    <div className="relative grid grid-cols-[100px_1fr] gap-6">
      {/* Timeline Node */}
      <div className="relative flex justify-center">
        <div className="relative w-3 h-3 mt-6">
          <div className="absolute inset-0 rounded-full bg-lime-400" />
          <div className="absolute inset-0 rounded-full bg-lime-400 blur-sm" />
          <div className="absolute -inset-2 rounded-full bg-lime-400/20 blur-md" />
          <div className="absolute -inset-3 rounded-full bg-lime-400/10 blur-lg" />
        </div>
      </div>

      {/* Experience Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
            <Image
              src={logo}
              width={80}
              height={80}
              alt={`${company} Logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h4 className="text-4xl font-light text-zinc-100">{company}</h4>
            <p className="text-stone-400">{location}</p>
          </div>
        </div>
        <div className="pl-[96px]">
          <h4 className="text-2xl mb-1 text-zinc-300">{role}</h4>
          <p className="text-zinc-400 mb-3">{date}</p>
          <div className="text-zinc-300 text-lg">
            {extraInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <LuActivity className="w-5 h-5 text-lime-500" />
                </div>
                <span className="flex-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <h3 className="text-xl font-light text-stone-300">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-lime-400/50 transition-all group"
          >
            <div className="text-2xl text-lime-400 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-zinc-300">{skill.name}</span>
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
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <main className="max-w-4xl mx-auto relative">
        {/* Skills Section */}
        <section className="space-y-8 mb-24">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-xl opacity-70" />
            <div className="absolute -inset-12 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-lg text-stone-400" style={{textShadow:'0px 2px 2px black'}}>SKILLS</p>
              </div>
              <div className="mb-8 ml-5">
                <p className="text-xl text-zinc-300 leading-relaxed" style={{textShadow:'0px 2px 2px black'}}>
                  Over the years, I have honed my skills in a wide range of
                  programming languages, developer tools, and modern
                  technologies. Here&apos;s a glimpse of the technologies that power my
                  journey.
                </p>
              </div>

              {/* Skills Categories */}
              <div className="space-y-8 ml-5">
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
        <section className="space-y-10">
          {/* Experience Header */}
          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-lg text-stone-400">WHERE I HAVE WORKED</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-16">
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

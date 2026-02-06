import React from "react";
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
  SiBitbucket
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";
import ExperienceItem from "./components/Work/ExperienceItem";
import { motion } from "framer-motion";
import { headerVariants, containerVariants, skillCardVariants, itemVariants } from "./animations";

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    icon: IconType;
  }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <motion.div
      className="space-y-4"
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h3 className="text-lg sm:text-xl font-light text-stone-300">{title}</h3>
      <motion.div
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-lime-400/50 transition-all group"
              variants={skillCardVariants}
              whileHover="hover"
            >
              <div className="text-xl sm:text-2xl text-lime-400 group-hover:scale-110 transition-transform">
                <IconComponent />
              </div>
              <span className="text-sm sm:text-base text-zinc-300">
                {skill.name}
              </span>
            </motion.div>
            );
        })}
      </motion.div>
    </motion.div>
  );
};

const WorkPage: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C / C++", icon: SiCplusplus },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: VscVscode },
        { name: "Postman", icon: SiPostman },
        { name: "Bit Bucket", icon: SiBitbucket }
      ],
    },
    {
      title: "Technologies/Frameworks",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Firebase", icon: SiFirebase },
        { name: "Jest", icon: SiJest },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Material UI", icon: SiMui },
        { name: "Sass", icon: SiSass },
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

            <motion.div
              className="relative z-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="flex items-center gap-3 mb-4 sm:mb-6" variants={headerVariants}>
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p
                  className="text-base sm:text-lg text-stone-400"
                  style={{ textShadow: "0px 2px 2px black" }}
                >
                  SKILLS
                </p>
              </motion.div>
              <motion.div className="mb-6 sm:mb-8 ml-0 sm:ml-5" variants={itemVariants}>
                <p
                  className="text-lg sm:text-xl text-zinc-300 leading-relaxed"
                  style={{ textShadow: "0px 2px 2px black" }}
                >
                  Over the years, I have honed my skills in a wide range of
                  programming languages, developer tools, and modern
                  technologies. Here&apos;s a glimpse of the technologies that
                  power my journey.
                </p>
              </motion.div>

              {/* Skills Categories */}
              <motion.div
                className="space-y-6 sm:space-y-8 ml-0 sm:ml-5"
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {skillCategories.map((category, index) => (
                  <SkillCategory
                    key={index}
                    title={category.title}
                    skills={category.skills}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8 sm:space-y-10">
          {/* Experience Header */}
          <motion.div
            className="flex items-center gap-3"
            variants={headerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-base sm:text-lg text-stone-400">
              WHERE I HAVE WORKED
            </p>
          </motion.div>

          {/* Timeline Container */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Timeline Line - Only visible on large screens */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {/* AutomationEdge */}
              <ExperienceItem
                logo="/Automation_edge_logo.png"
                company="AutomationEdge"
                location="Pune, Maharashtra"
                role="Software Development Engineer"
                date="Jul 2025 – Present"
                extraInfo={[
                  "Played a key role in architecting and developing CareFlo, a multi-tenant, multi-module platform for home care agencies with robust role-based access control and AI-driven process automation, enhancing operational efficiency.",
                  "Refactored the Nx monorepo architecture by migrating to a single-layout system for multiple apps, removing an entire dependency layer from the Nx graph, and significantly improving maintainability and build performance.",
                  "Designed and implemented a JSON-based customizable UI support to streamline multi-tenant UI configurations, reducing development effort and increasing scalability.",
                  "Led development efforts for critical modules including Referral Summary and EVV (Electronic Visit Verification), and managed the complete suite of System Admin applications with native user authentication and role management."
                ]}
              />

              <ExperienceItem
                logo="/Automation_edge_logo.png"
                company="AutomationEdge"
                location="Pune, Maharashtra"
                role="Software Developer Intern"
                date="Jan 2025 – Jun 2025"
                extraInfo={[
                  "Developed an interactive UI for referral summarization with features like drag-n-drop and section-wise insights.",
                  "Independently delivered the frontend for an automated email responder chatbot alongside CRUD implementation for Accounts and Transactions.",
                  "Resolved critical issues in AI Studio by addressing JIRA tickets, enhancing code reusability and overall user experience.",
                ]}
              />

              {/* Pi Reality */}
              <ExperienceItem
                logo="/Pi_reality_logo.png"
                company="Pi Reality"
                location="Bangalore, Remote"
                role="Software Developer Intern"
                date="Nov 2024 – Jan 2025"
                extraInfo={[
                  "Developed and optimized RESTful APIs using Node.js and DynamoDB for a gaming application, ensuring seamless data handling and refined code structure.",
                  "Led the end-to-end development of Crafty, a full-fledged web application for users to generate 3D models from images and text prompts.",
                  "Integrated a 3D model viewer into the application, enabling immersive user experiences along with a payment gateway using Stripe ensuring secure transactions.",
                ]}
              />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default WorkPage;

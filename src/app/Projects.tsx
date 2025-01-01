import React, { useState, useEffect } from "react";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { VscAdd, VscChevronDown, VscCode } from "react-icons/vsc";
import {
  IoImageOutline,
  IoLinkOutline,
  IoCodeSlash,
  IoGitBranch,
} from "react-icons/io5";
import Image from "next/image";
import { LuActivity } from "react-icons/lu";

interface ProjectProps {
  title: string;
  description: Array<string>;
  imageUrl: string;
  projectUrl: string;
  gitUrl: string;
  color: string;
  techstack: Array<string>;
}

const Projects = () => {
  const [scrolling, setScrolling] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const messages = [
    "I'm sorry, I can't do that",
    "Did you seriously expect this button to do something",
    "Come on, stop trying...it's fake UI and you know it",
    "I can't control your mouse, but you are wasting your time",
    "I am impressed, what are you trying to accomplish?",
    "STOP. DOING. THAT.",
    "I'm done, keep trying I am not even responding now.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrolling((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleIconHover = (iconIndex: number) => {
    if (hoveredIcon !== iconIndex) {
      setHoveredIcon(iconIndex);
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }
  };

  const Tooltip = ({
    show,
    position,
    children,
  }: {
    show: boolean;
    position?: "left" | "right";
    children: React.ReactNode;
  }) => {
    if (!show) return null;

    const positionClass =
      position === "right"
        ? "-translate-x-full left-0"
        : position === "left"
        ? "translate-x-0 right-0"
        : "-translate-x-1/2 left-1/2";

    return (
      <div className={`absolute top-full ${positionClass} mt-2 z-50`}>
        <div className="relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-zinc-800"></div>
          <div className="bg-zinc-800 text-white text-sm rounded py-1 px-2 min-w-max">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const ProjectItem: React.FC<ProjectProps> = ({
    title,
    description,
    imageUrl,
    projectUrl,
    gitUrl,
    color,
    techstack,
  }) => {
    return (
      <div className="my-20 rounded-xl overflow-hidden">
        <div className="bg-zinc-900/90 border border-zinc-700 rounded-xl">
          {/* Header Bar */}
          <div className="px-4 py-3 bg-zinc-800/50 border-b border-zinc-700 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-700/50 rounded-md">
                <IoCodeSlash className={`text-${color}-400`} />
                <span className={`text-${color}-400 text-sm font-mono`}>
                  {title}.tsx
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoGitBranch className="text-zinc-400" />
              <span className="text-zinc-400 text-sm font-mono">main</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {title}
                  </h3>

                  {description.map((des) => (
                    <div key={des} className="flex items-start gap-2 mb-2">
                      <div className="flex-shrink-0 mt-1">
                        <LuActivity className="w-3 h-3 text-lime-500" />
                      </div>
                      <p className="text-zinc-400 text-sm">{des}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200"
                  >
                    <IoLinkOutline className={`text-${color}-400`} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200"
                  >
                    <IoGitBranch className={`text-${color}-400`} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Project Preview */}
              <div className="relative group">
                <div className="relative rounded-lg overflow-hidden border border-zinc-700">
                  <div className="h-8 bg-zinc-800 flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex-1 bg-zinc-700/50 h-5 rounded-md px-2 text-sm pb-2">
                      {projectUrl}
                    </div>
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={1200}
                      height={675}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {techstack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal-like footer */}
          <div className="px-6 py-4 bg-zinc-900/50 border-t border-zinc-800 font-mono text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="text-green-500">$</span>
              <span className="text-blue-400">git</span> push origin main
              <span className="ml-2 text-green-400">
                {"✓ deployed to production"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  interface AdditionalProjectProps {
    title: string;
    description: string;
    language: string;
    hasWebsite?: boolean;
    websiteUrl?: string;
    codeUrl: string;
    bgColor?: string;
  }
  
  const AdditionalProjectCard: React.FC<AdditionalProjectProps> = ({
    title,
    description,
    language,
    hasWebsite = false,
    websiteUrl = "",
    codeUrl,
    bgColor = "bg-zinc-900"
  }) => {
    return (
      <div className={`p-6 rounded-xl ${bgColor} border border-zinc-400 hover:border-lime-400 transition-colors duration-200 my-4`}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-zinc-800">
            <VscCode className="w-6 h-6 text-lime-400" />
          </div>
          
          <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {title}
            </h3>
            <p className="text-sm text-zinc-400 mb-2">
              {language}
            </p>
          </div>
            <p className="text-zinc-300 text-md mr-4">
              {description}
            </p>
  
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200 text-sm"
                >
                  <VscCode className="text-lime-400" />
                  <span>Code</span>
                </a>
                
                {hasWebsite && websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 bg-lime-400 hover:bg-lime-400 rounded-md transition-colors duration-200 text-sm"
                  >
                    <IoLinkOutline className="text-black" />
                    <span className="text-black">Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
      <main className="max-w-4xl mx-auto relative">
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-70" />
            <div className="absolute -inset-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-3xl opacity-50" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-2 h-2 mx-1">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-lg text-zinc-400">
                  SOME THINGS I HAVE BUILT
                </p>
              </div>

              <div className="p-1 mb-8 rounded-md bg-zinc-600">
                <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border-2 border-stone-500">
                  <div className="bg-[#2d2d2d] px-3 py-2 flex items-center justify-between">
                    <div className="flex gap-5">
                      <div className="p-2 flex items-center">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-zinc-700 p-2 border-white rounded-lg">
                        <IoImageOutline className="text-gray-400" />
                        <span className="text-gray-300 text-sm">
                          Featured Projects
                        </span>
                        <div
                          className="cursor-pointer relative"
                          onMouseEnter={() => handleIconHover(5)}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <VscChromeClose className="text-gray-400" />
                          <Tooltip show={hoveredIcon === 5}>
                            {messages[messageIndex]}
                          </Tooltip>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div
                          className="relative"
                          onMouseEnter={() => handleIconHover(3)}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <div className="hover:bg-zinc-600 p-1 cursor-pointer rounded-md">
                            <VscAdd className="text-gray-400" />
                          </div>
                          <Tooltip show={hoveredIcon === 3}>
                            {messages[messageIndex]}
                          </Tooltip>
                        </div>
                        <div
                          className="relative"
                          onMouseEnter={() => handleIconHover(4)}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <div className="hover:bg-zinc-600 p-1 cursor-pointer rounded-md">
                            <VscChevronDown className="text-gray-400" />
                          </div>
                          <Tooltip show={hoveredIcon === 4}>
                            {messages[messageIndex]}
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 ml-2">
                      <div
                        className="cursor-pointer relative"
                        onMouseEnter={() => handleIconHover(0)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <VscChromeMinimize className="text-gray-400 hover:text-white" />
                        <Tooltip show={hoveredIcon === 0} position="right">
                          {messages[messageIndex]}
                        </Tooltip>
                      </div>
                      <div
                        className="cursor-pointer relative"
                        onMouseEnter={() => handleIconHover(1)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <VscChromeMaximize className="text-gray-400 hover:text-white" />
                        <Tooltip show={hoveredIcon === 1} position="right">
                          {messages[messageIndex]}
                        </Tooltip>
                      </div>
                      <div
                        className="cursor-pointer relative"
                        onMouseEnter={() => handleIconHover(2)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <VscChromeClose className="text-gray-400 hover:text-red-600" />
                        <Tooltip show={hoveredIcon === 2} position="right">
                          {messages[messageIndex]}
                        </Tooltip>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 font-mono text-md">
                    <p>PowerShell 7.3.4</p>
                    <p>https://ankur-kumar.netlify.app/</p>
                    <p>Loading the Projects and info.......</p>
                    <p className="mb-10">
                      <span className="text-blue-500">root@ankur:~$ </span>
                      <span>ankur.exe ‑‑projects|</span>
                    </p>
                    <p className="mb-1">
                      <span className="text-green-500">root@ankur:~$ </span>
                      <span>Found ‑‑Learnify|</span>
                    </p>
                    <p className="mb-1">
                      <span className="text-green-500">root@ankur:~$ </span>
                      <span>Found ‑‑Project Pilot|</span>
                    </p>
                    <p className="mb-1">
                      <span className="text-green-500">root@ankur:~$ </span>
                      <span>Found ‑‑Buzz|</span>
                    </p>
                    <p className="mb-1">
                      <span className="text-blue-500">root@ankur:~$ </span>
                      <span>Loading other projects...</span>
                    </p>
                    <div className="my-10">
                      Scroll down to view all the projects!!
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`mt-20 transition-transform duration-500 ${
                  scrolling ? "translate-y-2" : "-translate-y-2"
                }`}
              >
                <svg
                  className="w-12 h-12 mx-auto text-zinc-200 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m0 0l-4-4m4 4l4-4"
                  />
                </svg>
              </div>
              <ProjectItem
                title="Learnify"
                description={[
                  "Engineered Learnify, an online learning web application designed to empower users to acquire various tech skills.",
                  "Implemented features such as QuizMastery for tests and practice, providing users with interactive quizzes.",
                  "Incorporated Analytics functionality for detailed performance analysis, allowing users to track their progress and identify areas for improvement.",
                  "Developed the Mapper feature, offering roadmaps for different skills along with tutorials, facilitating a structured learning path for users. Also involves Blogs section with various filtering functionalties.",
                ]}
                imageUrl="/Learnify_cover.png"
                projectUrl="https://learnify-in.netlify.app"
                gitUrl="http://localhost:3000/"
                color="cyan"
                techstack={[
                  "React JS",
                  "Express JS",
                  "Mongo DB",
                  "Material UI",
                  "Zustand",
                  "JWT",
                  "Nodemailer",
                ]}
              />
              <ProjectItem
                title="Project Pilot"
                description={[
                  "Contributed to Project Pilot, an inventive project management tool accompanied by Github repository integration for a hackathon.",
                  "Introduced Kanban-style progress tracking, a scheduling Calendar, and Conversations for team discussions, promoting collaboration and structured project execution, leading to a 40% reduction in project delays and a 25% increase in team productivity.",
                ]}
                imageUrl="/ProjectPilot_cover.png"
                projectUrl="https://project-pilot-ten.vercel.app/"
                gitUrl="http://localhost:3000/"
                color="emerald"
                techstack={[
                  "React JS",
                  "Express JS",
                  "Mongo DB",
                  "Material UI",
                  "Redux",
                  "JWT",
                  "Nodemailer",
                ]}
              />
              <ProjectItem
                title="Buzz"
                description={[
                  "Built Buzz, a feature-rich chat application, featuring video and voice call functionalities via ZEGOCLOUD SDK integration.",
                  "Implemented authentication with Google via firebase and real-time messaging using Socket.io.",
                  "Implemented real-time communication features, including live audio waveforms for voice notes, emoji support, image sharing and seamless messaging with Socket.io for an engaging user experience.",
                ]}
                imageUrl="/Buzz_cover.png"
                projectUrl="https://buzz-in.netlify.app"
                gitUrl="http://localhost:3000/"
                color="fuchsia"
                techstack={[
                  "Next JS",
                  "Express JS",
                  "Postgres SQL",
                  "Firebase",
                  "Prisma",
                  "Socket.io",
                  "Tailwind CSS",
                  "Zegocloud SDK",
                ]}
              />
            </div>
            <div
              className={`mt-20 transition-transform duration-500 ${
                scrolling ? "translate-y-2" : "-translate-y-2"
              }`}
            >
              <svg
                className="w-12 h-12 mx-auto text-zinc-200 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
          </div>
          <div className="my-10 text-center">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Still curious?
            </h2>
            <p className="text-xl text-zinc-300">
              Explore more of my work below!
            </p>
          </div>
          <AdditionalProjectCard
            title="Save The Meal"
            description="A Food Rescue and Redistribution System designed to minimize food waste and fight hunger by connecting surplus food donors with volunteers and NGOs."
            language="Javascript"
            codeUrl="https://github.com/07-ankur/SaveTheMeal"
            hasWebsite
            websiteUrl="https://github.com/07-ankur/SaveTheMeal"
          />
          <AdditionalProjectCard
            title="Treasure Hunt"
            description="A multiplayer real-time game to hunt the treasure with interactive chat functionality using socket.io"
            language="Javascript"
            codeUrl="https://github.com/07-ankur/Treasure-Hunt"
            hasWebsite
            websiteUrl="https://treasure-hunt-phi.vercel.app"
          />
        </div>
      </main>
    </div>
  );
};

export default Projects;

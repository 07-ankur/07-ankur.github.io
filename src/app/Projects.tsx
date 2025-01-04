import React, { useState, useEffect } from "react";
import Terminal from "./components/Projects/Terminal";
import ProjectItem from "./components/Projects/ProjectItem";
import AdditionalProjectCard from "./components/Projects/AdditionalProjectCard";

const Projects = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setScrolling((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2 md:p-4">
      <main className="max-w-4xl mx-auto relative">
        <div className="mb-12 md:mb-24">
          <div className="relative">
            <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-70" />
            <div className="absolute -inset-10 md:-inset-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-3xl opacity-50" />

            <div className="relative z-10 space-y-4 md:space-y-6">
              {/* Header section */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="relative w-1.5 md:w-2 h-1.5 md:h-2 mx-1">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-base md:text-lg text-zinc-400">
                  SOME THINGS I HAVE BUILT
                </p>
              </div>

              {/* Terminal section */}
              <Terminal />

              <div
                className={`mt-10 md:mt-20 transition-transform duration-500 ${
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
          <div className="my-8 md:my-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-4">
              Still curious?
            </h2>
            <p className="text-lg md:text-xl text-zinc-300">
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

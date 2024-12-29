"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / scrollHeight) * 100 || 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 20;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
      <nav className="sticky top-0 bg-zinc-900 z-50 flex justify-between items-center mb-24 p-4">
        <div>
          <h1 className="text-3xl font-semibold">Ankur Kumar</h1>
          <p className="text-zinc-400">Software Developer</p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bg-zinc-800 rounded-full p-1 border border-white group">
          <div className="relative flex items-center">
            <Image
              src="/arrow-icon.png"
              width={50}
              height={10}
              alt="Left arrow"
              style={{ transform: "scaleX(-1)" }}
              className="object-contain"
            />
            {/* Wrapper for buttons with overflow hidden */}
            <div className="overflow-hidden w-0 group-hover:w-[300px] transition-all duration-300 ease-in-out">
              <div className="flex gap-3 px-3 whitespace-nowrap">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`px-6 py-2 rounded-full transition-all text-white ${
                    activeTab === "info" ? "bg-zinc-700 " : "hover:bg-zinc-700"
                  }`}
                >
                  Info
                </button>
                <button
                  onClick={() => setActiveTab("work")}
                  className={`px-6 py-2 rounded-full transition-all text-white ${
                    activeTab === "work" ? "bg-zinc-700 " : "hover:bg-zinc-700"
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`px-6 py-2 rounded-full transition-all text-white ${
                    activeTab === "projects"
                      ? "bg-zinc-700"
                      : "hover:bg-zinc-700"
                  }`}
                >
                  Projects
                </button>
              </div>
            </div>

            <div className="w-12 h-12 flex items-center justify-center ml-3">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="rotate-[-90deg]"
              >
                <circle
                  stroke="#79808a"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  stroke="white"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference + " " + circumference}
                  style={{ strokeDashoffset }}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  className="transition-all duration-300"
                />
              </svg>
            </div>

            {activeTab === "info" && (
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-800 to-zinc-800 blur-xl -z-10" />
            )}
            {activeTab === "work" && (
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 blur-xl -z-10" />
            )}
            {activeTab === "projects" && (
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-600 blur-xl -z-10" />
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-3 rounded-full transition-all text-white hover:bg-zinc-800">
            <a
              href="https://www.linkedin.com/in/07-ankur-kumar/"
              target="_blank"
              className="text-white hover:text-white flex items-center gap-1"
            >
              LinkedIn
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </button>
          <button className="px-4 py-3 rounded-full transition-all text-white hover:bg-zinc-800">
            <a
              href="https://bit.ly/Ankur_resume"
              target="_blank"
              className="text-white hover:text-white flex items-center gap-1"
            >
              Resume
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto relative">
        {/* About Me Section */}
        <div className="space-y-8 mb-24">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-70" />
            <div className="absolute -inset-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-2 h-2 mx-1">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-md text-zinc-400">ABOUT ME</p>
              </div>
              <h2 className="text-4xl font-light leading-tight tracking-tight">
                I&apos;m driven by the passion for crafting impactful products
                that enhance user experiences and{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-t from-cyan-100 to-zinc-100">
                  solve real-world challenges.
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-10">
          {/* Education Header */}
          <div className="flex items-center gap-2">
            <div className="relative w-2 h-2 mx-1">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-md text-zinc-400">EDUCATION</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* IIIT Ranchi */}
              <div className="relative grid grid-cols-[100px_1fr] gap-6">
                {/* Timeline Node */}
                <div className="relative flex justify-center">
                  <div className="relative w-3 h-3 mt-6">
                    <div className="absolute inset-0 rounded-full bg-white" />
                    <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                    <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                    <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    <Image
                      src="/IIITRanchi_logo.png"
                      width={80}
                      height={80}
                      alt="IIIT_Ranchi"
                      className="object-contain"
                    />
                    <h3 className="text-4xl font-light">
                      Indian Institute of Information Technology (IIIT), Ranchi
                    </h3>
                  </div>
                  <div className="pl-[105px]">
                    <h4 className="text-2xl mb-1">
                      Bachelor of Technology in Electronics and Communication
                      Engineering (ES & IOT)
                    </h4>
                    <p className="text-zinc-400 mb-2">Dec. 2021 – Present</p>
                    <p className="text-zinc-300 text-lg">CGPA - 8.78</p>
                  </div>
                </div>
              </div>

              {/* DPS Ranchi */}
              <div className="relative grid grid-cols-[100px_1fr] gap-6">
                {/* Timeline Node */}
                <div className="relative flex justify-center">
                  <div className="relative w-3 h-3 mt-6">
                    <div className="absolute inset-0 rounded-full bg-white" />
                    <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                    <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                    <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                  </div>
                </div>

                <div className="space-y-0">
                  <div className="flex items-center gap-6">
                    <Image
                      src="/DPSRanchi_logo.png"
                      width={80}
                      height={80}
                      alt="DPS_Ranchi"
                      className="object-contain"
                    />
                    <h3 className="text-4xl font-light">
                      Delhi Public School (DPS), Ranchi
                    </h3>
                  </div>
                  <div className="pl-[105px]">
                    <h4 className="text-2xl mb-1">Intermediate Education</h4>
                    <p className="text-zinc-400 mb-2">
                      June. 2018 – April. 2020
                    </p>
                    <p className="text-zinc-300 text-lg">Grade - 92.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;

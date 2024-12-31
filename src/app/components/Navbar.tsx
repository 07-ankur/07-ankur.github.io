"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavigation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / scrollHeight) * 100 || 0;
      setScrollProgress(Math.min(progress, 100));

      setIsExpanded(progress < 2);
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

  const tabs = ["info", "work", "projects"] as const;

  return (
    <nav className="sticky top-0 bg-zinc-900 z-50 flex justify-between items-center mb-24 p-4">
      <div>
        <h1 className="text-3xl font-semibold">Ankur Kumar</h1>
        <p className="text-zinc-400">Software Developer</p>
      </div>

      <div
        className={`absolute left-1/2 -translate-x-1/2 bg-zinc-800 rounded-full p-1 border border-white ${
          !isExpanded ? "group" : ""
        }`}
      >
        <div
          className={`relative grid ${
            isExpanded
              ? "grid-cols-[50px_300px_50px]"
              : "grid-cols-[50px_0px_50px] group-hover:grid-cols-[50px_300px_50px]"
          } items-center transition-all duration-300`}
        >
          <div className="flex items-center justify-center w-[50px]">
            <Image
              src="/arrow-icon.png"
              width={40}
              height={10}
              alt="Left arrow"
              style={{ transform: "scaleX(-1)" }}
              className="object-contain"
            />
          </div>

          <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-0 relative whitespace-nowrap">
              {/* Background slider */}
              <div
                className="absolute h-[34px] bg-zinc-700 rounded-full transition-all duration-300 ease-in-out mt-2 border-white"
                style={{
                  width: "100px",
                  left: `${tabs.indexOf(activeTab) * 100}px`,
                }}
              />

              {/* Navigation buttons */}
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-3 rounded-full transition-all text-md text-white z-10 w-[100px] text-center"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Gradient backgrounds */}
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

          <div className="flex items-center justify-center w-[50px]">
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
                stroke="#a3e635"
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
  );
};

export default Navbar;

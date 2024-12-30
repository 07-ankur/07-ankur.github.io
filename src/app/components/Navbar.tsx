// components/Navbar.tsx
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavigation();
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

  const tabs = ["info", "work", "projects"] as const;

  return (
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
          <div className="overflow-hidden w-0 group-hover:w-[300px] transition-all duration-300 ease-in-out">
            <div className="flex gap-3 px-3 whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all text-white ${
                    activeTab === tab ? "bg-zinc-700" : "hover:bg-zinc-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
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

          {tabs.map((tab) => (
            activeTab === tab && (
              <div key={tab} className={`absolute -inset-1 bg-gradient-to-r from-zinc-${tab === 'info' ? '600' : '800'} via-zinc-${tab === 'work' ? '600' : '800'} to-zinc-${tab === 'projects' ? '600' : '800'} blur-xl -z-10`} />
            )
          ))}
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
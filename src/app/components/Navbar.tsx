"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavigation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll progress
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / scrollHeight) * 100 || 0;
      setScrollProgress(Math.min(progress, 100));
      setIsExpanded(progress < 2);
    };

    // Handle responsive layout
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const radius = 20;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const tabs = ["info", "work", "projects"] as const;

  const MenuButton = () => (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden p-2 text-white"
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );

  return (
    <nav className="sticky top-0 bg-zinc-900 z-50 flex flex-col md:flex-row justify-between items-center mb-24 p-4 gap-4">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">Ankur Kumar</h1>
          <p className="text-zinc-400 text-sm md:text-base">Software Developer</p>
        </div>
        <MenuButton />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block mb-16">
        <div
          className={`w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 bg-transparent rounded-full p-1 border border-stone-600 ${
            !isExpanded ? "group" : ""
          }`}
        >
          <div
            className={`relative grid ${
              isExpanded || isMobile
                ? "grid-cols-[50px_minmax(200px,300px)_50px]"
                : "grid-cols-[50px_0px_50px] group-hover:grid-cols-[50px_300px_50px]"
            } items-center transition-all duration-300`}
          >
            <div className="hidden md:flex items-center justify-center w-[50px]">
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
                  className="absolute h-[34px] bg-transparent rounded-full transition-all duration-300 ease-in-out mt-1.5 border-white"
                  style={{
                    width: "90px",
                    left: `${tabs.indexOf(activeTab) * 100 + 5}px`,
                    borderTop: "1px solid grey",
                    borderBottom: "1px solid grey",
                  }}
                />

                {/* Navigation buttons */}
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-3 rounded-full transition-all text-sm md:text-md text-white z-10 w-[100px] text-center"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Gradient backgrounds */}
              {activeTab === "info" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-800 blur-xl -z-10" />
              )}
              {activeTab === "work" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 blur-xl -z-10" />
              )}
              {activeTab === "projects" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-500 blur-xl -z-10" />
              )}
            </div>

            <div className="hidden md:flex items-center justify-center w-[50px]">
              <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
                <circle
                  stroke="#A3A3A6"
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
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col w-full gap-4 mt-4 bg-zinc-800 p-4 rounded-lg`}
      >
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false);
              }}
              className={`px-4 py-3 rounded-lg transition-all text-sm text-white ${
                activeTab === tab ? "bg-zinc-700" : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Social Links */}
        <div className="flex flex-col gap-2 border-t border-zinc-700 pt-4">
          <a
            href="https://www.linkedin.com/in/07-ankur-kumar/"
            target="_blank"
            className="text-white hover:text-white flex items-center gap-1 px-4 py-3 rounded-lg hover:bg-zinc-700"
          >
            LinkedIn
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://bit.ly/Ankur_resume"
            target="_blank"
            className="text-white hover:text-white flex items-center gap-1 px-4 py-3 rounded-lg hover:bg-zinc-700"
          >
            Resume
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop Social Links */}
      <div className="hidden md:flex gap-4">
        <button className="px-4 py-3 rounded-full transition-all text-white hover:bg-zinc-800">
          <a
            href="https://www.linkedin.com/in/07-ankur-kumar/"
            target="_blank"
            className="text-white hover:text-white flex items-center gap-1"
          >
            LinkedIn
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
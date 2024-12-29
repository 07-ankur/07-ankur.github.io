"use client";

import { useState } from "react";
import Image from "next/image";

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      {/* Navigation Bar with Glowing Effect */}
      <nav className="sticky top-0 bg-[#0A0A0A] z-50 flex justify-between items-center mb-24 p-4">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-semibold">Ankur Kumar</h1>
          <p className="text-zinc-400">Software Developer</p>
        </div>

        {/* Center - Tab Navigation with Enhanced Glow Effect */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="relative flex bg-[#161616] rounded-full p-1">
            <div className="relative flex items-center">
              {["info", "work", "projects"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-6 py-2 rounded-full transition-all"
                >
                  <span className={`relative z-10 ${
                    activeTab === tab ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                  {activeTab === tab && (
                    <div className="absolute inset-x-0 -top-px h-px bg-white" />
                  )}
                </button>
              ))}
              {/* Nav Glowing Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-50 -z-10" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/07-ankur-kumar/"
            className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://bit.ly/Ankur_resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            Resume
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto relative">
        <div className="space-y-8">
          {/* About Section with Enhanced Glow */}
          <div className="relative">
            {/* Central Glow Effect */}
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/10 via-blue-500/15 to-pink-500/10 blur-2xl opacity-70" />
            <div className="absolute -inset-20 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                {/* Glowing Dot with enhanced effect */}
                <div className="relative w-2 h-2 mx-1">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-md text-zinc-300">ABOUT ME</p>
              </div>
              <h2 className="text-6xl font-light leading-tight tracking-tight">
                I&apos;m passionate about creating beautiful products that{' '}
                <span className="italic text-zinc-400">empower people.</span>
              </h2>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-24 grid grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Portfolio visual"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center">
                <p className="text-2xl text-zinc-300">
                  This is my story — alongside some flicks from my recent trip to
                  Japan.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;
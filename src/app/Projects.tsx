"use client";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrolling((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
      <main className="max-w-4xl mx-auto relative">
        {/* Projects Section */}
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-70" />
            <div className="absolute -inset-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-3xl opacity-50" />

            <div className="relative z-10">
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

              {/* Scroll Down SVG */}
              <div
                className={`mt-20 transition-transform duration-500 ${
                  scrolling ? "translate-y-2" : "-translate-y-2"
                }`}
              >
                <svg
                  className="w-8 h-8 mx-auto text-zinc-200 animate-bounce"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

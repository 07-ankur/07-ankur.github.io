"use client";
import { useNavigation } from "../context/NavigationContext";

const Footer = () => {
  const { setActiveTab } = useNavigation();

  return (
    <footer className="mt-24 mb-8 relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pt-12">
          {/* Main Navigation */}
          <div>
            <h3 className="text-zinc-500 text-sm font-medium tracking-wider mb-6">MAIN</h3>
            <nav className="space-y-5">
              {["info", "work", "projects"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "info" | "work" | "projects")}
                  className="block w-full text-left text-white text-lg hover:text-zinc-300 transition-all duration-200 hover:translate-x-1"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-zinc-500 text-sm font-medium tracking-wider mb-6">CONTACT</h3>
            <div className="space-y-5">
              <a
                href="mailto:im4ankur@gmail.com"
                className="group flex items-center gap-2 text-white text-lg hover:text-zinc-300 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-all duration-200 flex-shrink-0 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                im4ankur@gmail.com
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/07-ankur-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white text-lg hover:text-zinc-300 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-all duration-200 flex-shrink-0 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1EaMfLD5CsxxFxaw6RoNIiU9fgRjFMI4I/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white text-lg hover:text-zinc-300 transition-all duration-200 hover:translate-x-1"
              >
                <svg className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-all duration-200 flex-shrink-0 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between text-zinc-500 space-y-4 md:space-y-0">
            <p className="text-sm">© 2024 Ankur Kumar. All Rights Reserved.</p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


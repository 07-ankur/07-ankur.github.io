"use client";
import { useNavigation } from "../context/NavigationContext";

const Footer = () => {
  const { setActiveTab } = useNavigation();

  return (
    <footer className="mt-24 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pt-12 border-t border-zinc-800">
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
                className="group block text-white text-lg hover:text-zinc-300 transition-all duration-200"
              >
                im4ankur@gmail.com
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/07-ankur-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-white text-lg hover:text-zinc-300 transition-all duration-200"
              >
                LinkedIn
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1EaMfLD5CsxxFxaw6RoNIiU9fgRjFMI4I/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-white text-lg hover:text-zinc-300 transition-all duration-200"
              >
                Resume
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between text-zinc-500 space-y-4 md:space-y-0">
            <p className="text-sm">© 2024 Ankur Kumar. All Rights Reserved.</p>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm font-light">
                Made with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


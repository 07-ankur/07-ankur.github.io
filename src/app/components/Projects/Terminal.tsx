import React, { useState, useEffect } from 'react';
import { IoImageOutline } from "react-icons/io5";
import { VscChromeClose, VscAdd, VscChevronDown, VscChromeMinimize, VscChromeMaximize } from "react-icons/vsc";

interface TypewriterProps {
  text: string;
  delay: number;
  onComplete?: () => void;
}

interface TooltipProps {
  show: boolean; 
  position?: 'left' | 'right' | 'center'; 
  children: React.ReactNode; 
}

const TypewriterText: React.FC<TypewriterProps> = ({ text, delay, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{currentText}</span>;
};

const Tooltip: React.FC<TooltipProps> = ({ show, position = "center", children }) => {
  if (!show) return null;

  const positionClass = position === "right" 
    ? "-translate-x-full left-0"
    : position === "left"
    ? "translate-x-0 right-0"
    : "-translate-x-1/2 left-1/2";

  return (
    <div className={`absolute top-full ${positionClass} mt-2 z-50`}>
      <div className="relative">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-zinc-800" />
        <div className="bg-zinc-800 text-white text-xs md:text-sm rounded py-1 px-2 min-w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

const TerminalContent = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    { text: "PowerShell 7.3.4", prefix: "" },
    { text: "https://ankur-kumar.netlify.app/", prefix: "" },
    { text: "Loading the Projects and info.......", prefix: "" },
    { text: "ankur.exe ‑‑projects|", prefix: "root@ankur:~$ " },
    { text: "Found ‑‑Learnify|", prefix: "root@ankur:~$ " },
    { text: "Found ‑‑Project Pilot|", prefix: "root@ankur:~$ " },
    { text: "Found ‑‑Buzz|", prefix: "root@ankur:~$ " },
    { text: "Loading other projects...", prefix: "root@ankur:~$ " },
    { text: "Scroll down to view all the projects!!", prefix: "" }
  ];

  const handleLineComplete = () => {
    if (currentLine < lines.length - 1) {
      setCurrentLine(currentLine + 1);
    }
  };

  return (
    <div className="p-4 font-mono text-md">
      {lines.map((line, index) => (
        <p key={index} className={`${index === 3 ? 'mb-10' : index === 8 ? 'my-10' : 'mb-1'}`}>
          {line.prefix && (
            <span className={`${index >= 4 && index <= 6 ? 'text-green-500' : 'text-blue-500'}`}>
              {currentLine >= index && line.prefix}
            </span>
          )}
          {currentLine >= index ? (
            <TypewriterText 
              text={line.text}
              delay={20}
              onComplete={index === currentLine ? handleLineComplete : undefined}
            />
          ) : null}
        </p>
      ))}
    </div>
  );
};

const Terminal = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);
  
  // Properly type the icons
  const ImageIcon = IoImageOutline as React.ComponentType<any>;
  const CloseIcon = VscChromeClose as React.ComponentType<any>;
  const AddIcon = VscAdd as React.ComponentType<any>;
  const ChevronIcon = VscChevronDown as React.ComponentType<any>;
  const MinimizeIcon = VscChromeMinimize as React.ComponentType<any>;
  const MaximizeIcon = VscChromeMaximize as React.ComponentType<any>;
  
  const messages = [
    "I'm sorry, I can't do that",
    "Did you seriously expect this button to do something",
    "Come on, stop trying...it's fake UI and you know it",
    "I can't control your mouse, but you are wasting your time",
    "I am impressed, what are you trying to accomplish?",
    "STOP. DOING. THAT.",
    "I'm done, keep trying I am not even responding now.",
  ];

  const handleIconHover = (iconIndex: number) => {
    if (hoveredIcon !== iconIndex) {
      setHoveredIcon(iconIndex);
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <div className="p-1 mb-6 md:mb-8 rounded-md bg-zinc-600">
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
              <ImageIcon className="text-gray-400" />
              <span className="text-gray-300 text-sm">Featured Projects</span>
              <div
                className="cursor-pointer relative hidden md:block"
                onMouseEnter={() => handleIconHover(5)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <CloseIcon className="text-gray-400" />
                <Tooltip show={hoveredIcon === 5}>{messages[messageIndex]}</Tooltip>
              </div>
            </div>
            <div className="items-center gap-1 hidden md:flex">
              <div
                className="relative"
                onMouseEnter={() => handleIconHover(3)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="hover:bg-zinc-600 p-1 cursor-pointer rounded-md">
                  <AddIcon className="text-gray-400" />
                </div>
                <Tooltip show={hoveredIcon === 3}>{messages[messageIndex]}</Tooltip>
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleIconHover(4)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="hover:bg-zinc-600 p-1 cursor-pointer rounded-md">
                  <ChevronIcon className="text-gray-400" />
                </div>
                <Tooltip show={hoveredIcon === 4}>{messages[messageIndex]}</Tooltip>
              </div>
            </div>
          </div>
          <div className="items-center gap-8 ml-2 hidden md:flex">
            <div
              className="cursor-pointer relative"
              onMouseEnter={() => handleIconHover(0)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <MinimizeIcon className="text-gray-400 hover:text-white" />
              <Tooltip show={hoveredIcon === 0} position="right">{messages[messageIndex]}</Tooltip>
            </div>
            <div
              className="cursor-pointer relative"
              onMouseEnter={() => handleIconHover(1)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <MaximizeIcon className="text-gray-400 hover:text-white" />
              <Tooltip show={hoveredIcon === 1} position="right">{messages[messageIndex]}</Tooltip>
            </div>
            <div
              className="cursor-pointer relative"
              onMouseEnter={() => handleIconHover(2)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <CloseIcon className="text-gray-400 hover:text-red-600" />
              <Tooltip show={hoveredIcon === 2} position="right">{messages[messageIndex]}</Tooltip>
            </div>
          </div>
        </div>

        <TerminalContent />
      </div>
    </div>
  );
};

export default Terminal;
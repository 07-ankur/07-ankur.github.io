import React from "react";
import Image from "next/image";
import { LuActivity } from "react-icons/lu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  headerVariants,
  fadeInFromBottomVariants,
  bounceVariants,
} from "./animations";

interface EducationProps {
  logo: string;
  institution: string;
  degree: string;
  date: string;
  extraInfo: string[];
}

const EducationItem: React.FC<EducationProps> = ({
  logo,
  institution,
  degree,
  date,
  extraInfo,
}) => {
  const ActivityIcon = LuActivity as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <motion.div
      className="relative lg:grid lg:grid-cols-[100px_1fr] gap-6"
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Timeline Node - Only visible on large screens */}
      <div className="relative hidden lg:flex justify-center">
        <div className="relative w-3 h-3 mt-6">
          <div className="absolute inset-0 rounded-full bg-white" />
          <div className="absolute inset-0 rounded-full bg-white blur-sm" />
          <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
          <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
        </div>
      </div>

      {/* Education Details */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] flex items-center justify-center flex-shrink-0">
            <Image
              src={logo}
              width={100}
              height={100}
              alt={`${institution} Logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <h4 className="text-2xl sm:text-4xl font-light text-zinc-100 text-center sm:text-left">{institution}</h4>
        </div>
        <div className="lg:pl-[96px] px-4 sm:px-0" style={{ textShadow: "0px 0px 1px black" }}>
          <h4 className="text-xl sm:text-2xl mb-1 text-stone-300">{degree}</h4>
          <p className="text-zinc-400 mb-3">{date}</p>
          <div className="text-zinc-300 text-base sm:text-lg">
            {extraInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <ActivityIcon className="w-4 sm:w-5 h-4 sm:h-5 text-lime-500" />
                </div>
                <span className="flex-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function InfoPage() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrolling((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
      <main className="max-w-4xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="mb-16 sm:mb-24">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-70" />
            <div className="absolute -inset-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-3xl opacity-50" />

            <motion.div
              className="relative z-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="flex items-center gap-2 mb-6" variants={headerVariants}>
                <div className="relative w-2 h-2 mx-1">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-base sm:text-lg text-zinc-400" style={{ textShadow: "0px 2px 2px black" }}>
                  ABOUT ME
                </p>
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-4xl font-light leading-tight tracking-tight mb-4"
                variants={itemVariants}
                style={{ textShadow: "0px 2px 2px black" }}
              >
                I&apos;m driven by the passion for crafting impactful products and ideas
                that elevate user experiences and {" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-t from-stone-600 to-zinc-100" style={{ textShadow: "0px 0px 0px transparent" }}>
                  solve real-world challenges.
                </span>
              </motion.h2>
              
              {/* Contact Card */}
              <motion.div
                className="relative flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto rounded-full bg-zinc-900/50 border border-stone-500 p-3 backdrop-blur-sm my-6 sm:my-10 group transition-all hover:border-[#e1ff00]/80"
                variants={fadeInFromBottomVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#e1ff00]/0 via-[#e1ff00]/5 to-[#e1ff00]/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                <div className="flex flex-col mx-3 relative text-center sm:text-left mb-4 sm:mb-0">
                  <div className="text-xs text-stone-400">Connect with me:</div>
                  <div className="text-lg sm:text-2xl text-zinc-100">im4ankur@gmail.com</div>
                </div>

                <button className="px-4 py-2 mx-3 rounded-full bg-[#a3e635] text-black text-base sm:text-lg transition-all hover:scale-105 hover:bg-[#e5ff33] relative">
                  <a href="https://drive.google.com/file/d/1EaMfLD5CsxxFxaw6RoNIiU9fgRjFMI4I/view" target="_blank" className="text-black hover:text-zinc-800 flex items-center gap-1">
                    Resume
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </button>
              </motion.div>

              {/* Scroll Down SVG */}
              <motion.div
                className={`hidden sm:block`}
                variants={bounceVariants}
                animate="animate"
              >
                <svg className="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-zinc-200 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                </svg>
              </motion.div>

              {/* Dive Animation */}
              {/* <DiveAnimation /> */}

              {/* Main content */}
              <motion.div
                className="grid gap-8 sm:gap-16 mt-16 sm:mt-32"
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="space-y-8 sm:space-y-12 text-lg sm:text-2xl text-zinc-400 leading-relaxed">
                  <p className="max-w-4xl">
                    Hi there! 👋 I&apos;m a passionate Software Developer currently working at Automation Edge Technologies primarily focused on building scalable web solutions.
                  </p>

                  <p className="max-w-4xl">
                    I enjoy diving into code, crafting seamless web
                    applications, and exploring innovative solutions. Beyond the
                    keyboard, you&apos;ll often find me lost in thought,
                    strategizing over a chessboard♟️, binge-watching cinema🍿,
                    solving challenging sudokus, or playing online games🎮.
                  </p>

                  <p className="max-w-4xl">
                    I&apos;m eager to collaborate with dynamic teams, embrace
                    new challenges, and grow alongside like-minded individuals.
                    And hey, I believe a bit of humor can brighten any workspace
                    — because who doesn&apos;t love a good laugh? 😊
                  </p>

                  <p className="text-2xl sm:text-3xl font-light text-zinc-300">
                    - - - Thanks for stopping by!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8 sm:space-y-10">
          {/* Education Header */}
          <motion.div
            className="flex items-center gap-2"
            variants={headerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative w-2 h-2 mx-1">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-base sm:text-lg text-zinc-400">EDUCATION</p>
          </motion.div>

          {/* Timeline Container */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Timeline Line - Only visible on large screens */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {/* IIIT Ranchi */}
              <EducationItem
                logo="/IIITRanchi_logo.webp"
                institution="Indian Institute of Information Technology (IIIT), Ranchi"
                degree="Bachelor of Technology in Electronics and Communication Engineering (ES & IOT)"
                date="Dec 2021 – May 2025"
                extraInfo={["CGPA - 8.93"]}
              />

              {/* DPS Ranchi */}
              <EducationItem
                logo="/DPSRanchi_logo.png"
                institution="Delhi Public School (DPS), Ranchi"
                degree="Intermediate Education"
                date="June 2018 – April 2020"
                extraInfo={["Grade - 92.2%"]}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
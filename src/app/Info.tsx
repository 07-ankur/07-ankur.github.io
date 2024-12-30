import React from "react";
import Image from "next/image";
import { LuActivity } from "react-icons/lu";

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
  return (
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

      {/* Education Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="w-[60px] h-[60px] flex items-center justify-center flex-shrink-0">
            <Image
              src={logo}
              width={60}
              height={60}
              alt={`${institution} Logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <h4 className="text-4xl font-light text-zinc-100">{institution}</h4>
        </div>
        <div className="pl-[96px]">
          <h4 className="text-2xl mb-1 text-stone-300">{degree}</h4>
          <p className="text-zinc-400 mb-3">{date}</p>
          <div className="text-zinc-300 text-lg">
            {extraInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <LuActivity className="w-5 h-5 text-lime-500" />
                </div>
                <span className="flex-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
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
                <p className="text-lg text-zinc-400">ABOUT ME</p>
              </div>
              <h2 className="text-4xl font-light leading-tight tracking-tight mb-4">
                I&apos;m driven by the passion for crafting impactful products
                that enhance user experiences and{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-t from-cyan-100 to-zinc-100">
                  solve real-world challenges.
                </span>
              </h2>
              <h6 className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                Hi there! 👋 I&apos;m a passionate Software Developer and a
                final-year B.Tech student at the Indian Institute of Information
                Technology (IIIT) Ranchi. 🎓
              </h6>
              <h6 className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                I enjoy diving into code, crafting seamless web applications,
                and exploring innovative solutions. Beyond the keyboard,
                you&apos;ll often find me lost in thought or binge-watching
                cinema🍿 or strategizing over a chessboard♟️.
              </h6>
              <h6 className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                I&apos;m eager to collaborate with dynamic teams, embrace new
                challenges, and grow alongside like-minded individuals. And hey,
                I believe a bit of humor can brighten any workspace—because who
                doesn&apos;t love a good laugh? 😊
              </h6>
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
            <p className="text-lg text-zinc-400">EDUCATION</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* IIIT Ranchi */}
              <EducationItem
                logo="/IIITRanchi_logo.png"
                institution="Indian Institute of Information Technology (IIIT), Ranchi"
                degree="Bachelor of Technology in Electronics and Communication Engineering (ES & IOT)"
                date="Dec 2021 – Present"
                extraInfo={["CGPA - 8.78"]}
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
          </div>
        </div>
      </main>
    </div>
  );
}

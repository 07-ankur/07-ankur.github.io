import React from "react";
import Image from "next/image";
import { LuActivity } from "react-icons/lu";

interface ExperienceProps {
  logo: string;
  company: string;
  location: string;
  role: string;
  date: string;
  extraInfo: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  logo,
  company,
  location,
  role,
  date,
  extraInfo,
}) => {
  return (
    <div className="relative grid grid-cols-[100px_1fr] gap-6">
      {/* Timeline Node */}
      <div className="relative flex justify-center">
        <div className="relative w-3 h-3 mt-6">
          <div className="absolute inset-0 rounded-full bg-lime-400" />
          <div className="absolute inset-0 rounded-full bg-lime-400 blur-sm" />
          <div className="absolute -inset-2 rounded-full bg-lime-400/20 blur-md" />
          <div className="absolute -inset-3 rounded-full bg-lime-400/10 blur-lg" />
        </div>
      </div>

      {/* Experience Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          {/* Fixed size container for logo */}
          <div className="w-[60px] h-[60px] flex items-center justify-center flex-shrink-0">
            <Image
              src={logo}
              width={60}
              height={60}
              alt={`${company} Logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h4 className="text-4xl font-light text-zinc-100">{company}</h4>
            <p className="text-stone-400">{location}</p>
          </div>
        </div>
        <div className="pl-[96px]">
          <h4 className="text-2xl mb-1 text-zinc-300">{role}</h4>
          <p className="text-zinc-400 mb-3">{date}</p>
          <div className="text-zinc-300 text-lg">
            {extraInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                {/* Fixed size container for icon */}
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

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <main className="max-w-4xl mx-auto relative">
        {/* Skills Section */}
        <section className="space-y-8 mb-24">
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute -inset-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-xl opacity-70" />
            <div className="absolute -inset-12 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 blur-2xl opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <div className="absolute inset-0 rounded-full bg-white blur-sm" />
                  <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
                  <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
                </div>
                <p className="text-lg text-stone-400">SKILLS</p>
              </div>
              <h2 className="text-4xl font-light leading-tight tracking-tight mb-4">
                I&apos;m driven by the passion for crafting impactful products
                that enhance user experiences and{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-t from-cyan-100 to-zinc-100">
                  solve real-world challenges.
                </span>
              </h2>
              <p className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                Hi there! 👋 I&apos;m a passionate Software Developer and a
                final-year B.Tech student at the Indian Institute of Information
                Technology (IIIT) Ranchi. 🎓
              </p>
              <p className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                I enjoy diving into code, crafting seamless web applications,
                and exploring innovative solutions. Beyond the keyboard,
                you&apos;ll often find me binge-watching cinema 🍿 or
                strategizing over a chessboard ♟️.
              </p>
              <p className="text-lg text-zinc-300 leading-tight tracking-tight mb-4">
                I&apos;m eager to collaborate with dynamic teams, embrace new
                challenges, and grow alongside like-minded individuals. And hey,
                I believe a bit of humor can brighten any workspace—because who
                doesn&apos;t love a good laugh? 😊
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-10">
          {/* Experience Header */}
          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-white" />
              <div className="absolute inset-0 rounded-full bg-white blur-sm" />
              <div className="absolute -inset-2 rounded-full bg-white/20 blur-md" />
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-lg" />
            </div>
            <p className="text-lg text-stone-400">WHERE I HAVE WORKED</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[49px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Automation Edge */}
              <ExperienceItem
                logo="/Automation_edge_logo.png"
                company="Automation Edge"
                location="Pune, India"
                role="Software Developer Intern"
                date="Jan 2025 – Present"
                extraInfo={["Active Contributor"]}
              />

              {/* Pi Reality */}
              <ExperienceItem
                logo="/Pi_reality_logo.png"
                company="Pi Reality"
                location="Bangalore, Remote"
                role="Backend Developer Intern"
                date="Nov 2024 – Dec 2024"
                extraInfo={[
                  "Enhanced the development and optimization of RESTful APIs using Node.js for a gaming application, ensuring efficient data handling and seamless user experience.",
                  "Worked collaboratively with cross-functional teams to design and deliver scalable, maintainable code, integrating authentication, authorization, and caching strategies, resulting in improved system efficiency and performance.",
                ]}
              />

              {/* Growhut */}
              <ExperienceItem
                logo="/Growhut_logo.png"
                company="Growhut"
                location="Gurgaon, Remote"
                role="Frontend Developer Intern"
                date="May 2023 – July 2023"
                extraInfo={[
                  "Contributed to the development of robust web applications leveraging React JS focusing on delivering seamless user interactions.",
                  "Worked closely with backend and UI team to seamlessly integrate frontend features, resolved UI issues and engineered reusable, modular components ensuring a cohesive development process.",
                  "Monitored and analyzed application performance using Google Lighthouse, boosting desktop scores from 42 to 74 and mobile scores from 35 to 50 through techniques like caching and image optimization.",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkPage;

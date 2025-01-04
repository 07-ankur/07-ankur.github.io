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
    <div className="relative lg:grid lg:grid-cols-[100px_1fr] gap-6">
      {/* Timeline Node - Only visible on large screens */}
      <div className="relative hidden lg:flex justify-center">
        <div className="relative w-3 h-3 mt-6">
          <div className="absolute inset-0 rounded-full bg-lime-400" />
          <div className="absolute inset-0 rounded-full bg-lime-400 blur-sm" />
          <div className="absolute -inset-2 rounded-full bg-lime-400/20 blur-md" />
          <div className="absolute -inset-3 rounded-full bg-lime-400/10 blur-lg" />
        </div>
      </div>

      {/* Experience Details */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] flex items-center justify-center flex-shrink-0">
            <Image
              src={logo}
              width={80}
              height={80}
              alt={`${company} Logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-2xl sm:text-4xl font-light text-zinc-100">{company}</h4>
            <p className="text-stone-400">{location}</p>
          </div>
        </div>
        <div className="lg:pl-[96px] px-4 sm:px-0">
          <h4 className="text-xl sm:text-2xl mb-1 text-zinc-300 text-center sm:text-left">{role}</h4>
          <p className="text-zinc-400 mb-3 text-center sm:text-left">{date}</p>
          <div className="text-zinc-300 text-base sm:text-lg">
            {extraInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <LuActivity className="w-4 sm:w-5 h-4 sm:h-5 text-lime-500" />
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

export default ExperienceItem;
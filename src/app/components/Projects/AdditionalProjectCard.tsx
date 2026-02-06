import React from "react";
import { IoLinkOutline } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { projectVariants } from "../../animations";

interface AdditionalProjectProps {
  title: string;
  description: string;
  language: string;
  hasWebsite?: boolean;
  websiteUrl?: string;
  codeUrl: string;
  bgColor?: string;
}

const AdditionalProjectCard: React.FC<AdditionalProjectProps> = ({
    title,
    description,
    language,
    hasWebsite = false,
    websiteUrl = "",
    codeUrl,
    bgColor = "bg-zinc-900",
  }) => {
    const CodeIcon = VscCode as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    const LinkIcon = IoLinkOutline as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    return (
      <motion.div
        className={`p-3 md:p-6 rounded-xl ${bgColor} border border-zinc-400 hover:border-lime-400 transition-colors duration-200 my-4`}
        variants={projectVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="p-2 md:p-3 rounded-lg bg-zinc-800">
            <CodeIcon className="w-5 md:w-6 h-5 md:h-6 text-lime-400" />
          </div>

          <div className="flex-1 space-y-2 md:space-y-3">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mb-2">{language}</p>
            </div>
            <p className="text-zinc-300 text-sm md:text-md mr-0 md:mr-4">
              {description}
            </p>

            <div className="flex items-center flex-wrap gap-3 md:gap-6 pt-2">
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200 text-xs md:text-sm"
                >
                  <CodeIcon className="text-lime-400" />
                  <span>Code</span>
                </a>

                {hasWebsite && websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-lime-400 hover:bg-lime-400 rounded-md transition-colors duration-200 text-xs md:text-sm"
                  >
                    <LinkIcon className="text-black" />
                    <span className="text-black">Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default AdditionalProjectCard;
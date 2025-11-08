  import React from "react";
  import Image from "next/image";
  import { LuActivity } from "react-icons/lu";
  import { IoCodeSlash, IoGitBranch, IoLinkOutline } from "react-icons/io5";

  interface ProjectProps {
    title: string;
    description: Array<string>;
    imageUrl: string;
    projectUrl: string;
    gitUrl: string;
    color: string;
    techstack: Array<string>;
  }

  const ProjectItem: React.FC<ProjectProps> = ({
    title,
    description,
    imageUrl,
    projectUrl,
    gitUrl,
    color,
    techstack,
  }) => {
    const ActivityIcon = LuActivity as React.ComponentType<any>;
    const CodeIcon = IoCodeSlash as React.ComponentType<any>;
    const GitIcon = IoGitBranch as React.ComponentType<any>;
    const LinkIcon = IoLinkOutline as React.ComponentType<any>;

    return (
      <div className="my-8 md:my-20 rounded-xl overflow-hidden">
        <div className="bg-zinc-900/90 border border-zinc-700 rounded-xl">
          {/* Header Bar */}
          <div className="px-2 md:px-4 py-2 md:py-3 bg-zinc-800/50 border-b border-zinc-700 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-zinc-700/50 rounded-md">
                <CodeIcon
                  className={`text-${color}-400 text-sm md:text-base`}
                />
                <span
                  className={`text-${color}-400 text-xs md:text-sm font-mono`}
                >
                  {title}.tsx
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GitIcon className="text-zinc-400 text-sm md:text-base" />
              <span className="text-zinc-400 text-xs md:text-sm font-mono">
                main
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Project Info */}
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {title}
                  </h3>
                  {description.map((des) => (
                    <div key={des} className="flex items-start gap-2 mb-2">
                      <div className="flex-shrink-0 mt-1">
                        <ActivityIcon className="w-2.5 md:w-3 h-2.5 md:h-3 text-lime-500" />
                      </div>
                      <p className="text-zinc-400 text-xs md:text-sm">{des}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4 pt-4">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200 text-sm"
                  >
                    <LinkIcon className={`text-${color}-400`} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors duration-200 text-sm"
                  >
                    <GitIcon className={`text-${color}-400`} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Project Preview */}
              <div className="relative group">
                <div className="relative rounded-lg overflow-hidden border border-zinc-700">
                  <div className="h-6 md:h-8 bg-zinc-800 flex items-center px-2 md:px-3 gap-1 md:gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex-1 bg-zinc-700/50 h-4 md:h-5 rounded-md px-2 text-xs md:text-sm pb-2 truncate">
                      {projectUrl}
                    </div>
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={1200}
                      height={675}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-5">
                  {techstack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal-like footer */}
          <div className="px-3 md:px-6 py-2 md:py-4 bg-zinc-900/50 border-t border-zinc-800 font-mono text-xs md:text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="text-green-500">$</span>
              <span className="text-blue-400">git</span> push origin main
              <span className="ml-2 text-green-400">
                {"✓ deployed to production"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectItem;
import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, technologies, media, mediaType = "image", githubLink }) => {
  // Prefix media path with PUBLIC_URL to load from public folder
  const mediaSrc = process.env.PUBLIC_URL + media;

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full group">
      {/* Browser-style mockup container */}
      <div className="w-full bg-gray-800 pt-2 sm:pt-3 px-2 sm:px-3 rounded-t-lg relative">
        {/* Browser dots */}
        <div className="flex gap-1 sm:gap-1.5 mb-1">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
        </div>

        {/* Media preview */}
        <div className="relative w-full bg-white rounded overflow-hidden flex items-center justify-center h-32 sm:h-40 md:h-44 lg:h-48">
          {mediaType === "video" ? (
            <video
              src={mediaSrc}
              className="h-full w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={mediaSrc}
              alt={title}
              className="mx-auto h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{title}</h3>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              title="View on GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
          )}
        </div>
        <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed flex-grow">{description}</p>

        {/* Show only first 3 tech badges + counter if more */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "SportsFiesta",
      description:
        "SportsFiesta is a full-stack web application for managing corporate sports tournaments. It features tools for event organization, team registrations, real-time scoring, and dynamic leaderboards.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      media: "/SportsFiesta.png",
      mediaType: "image",
      githubLink: "https://github.com/RaafidAfraazG/SportsFiesta",
    },
    {
      title: "Mindora",
      description:
        "Mindora is a mental health support app built with Flask, Supabase, and Gemini API. It offers secure login, empathetic chatbot support, and chat history tracking.",
      technologies: ["Flask", "Supabase", "Gemini API", "React", "JWT"],
      media: "/mindora.mp4",
      mediaType: "video",
      githubLink: "https://github.com/RaafidAfraazG/Mindora",
    },
    {
      title: "Glassify",
      description:
        "Glassify is an e-commerce website for buying lenses and glasses online, featuring seamless navigation, secure login, and a webcam-based Virtual Try-On (VTO) system for 3D frame previews.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Webcam API"],
      media: "/glassify.mp4",
      mediaType: "video",
      githubLink: "https://github.com/RaafidAfraazG/Glassify",
    },
  ];

  const githubUrl = "https://github.com/RaafidAfraazG?tab=repositories";

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          <span className="relative inline-block">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-[2.4ch] after:bg-blue-400">
              Pro
            </span>
            jects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span>See More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

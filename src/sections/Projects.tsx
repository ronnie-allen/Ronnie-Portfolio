// src/sections/Projects.tsx
import { FaGithub } from "react-icons/fa";
import { useContent } from "../context/ContentContext";

export const Projects = () => {
  const { content } = useContent();
  const { projects } = content;

  return (
    <div className=" text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] rounded-xl shadow-lg hover:shadow-red-600 transition duration-300 flex flex-col overflow-hidden"
          >
            {/* Project Image */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-white">
                No Image Available
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              {/* Project Name */}
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

              {/* Project Description */}
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              {/* GitHub Icon */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white transition mt-auto"
                aria-label="View on GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */

export default function Project({ project }) {
  return (
    <div className="project bg-white text-gray-600 border border-violet-300 rounded-lg shadow-md hover:shadow-violet-400 transition-shadow duration-300 p-4 w-full md:w-[35%]">
      {/* Project Image */}
      <div className="project-image mb-4">
        <img
          src={project?.image}
          alt="Project"
          className="rounded-lg w-full h-40 object-cover bg-black"
        />
      </div>

      {/* Project Name */}
      <div className="project-name text-lg md:text-xl font-semibold text-violet-600 mb-2">
        {project?.name}
      </div>

      {/* Project Description */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="teckStack flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, i) => (
          <span
            className="text-sm bg-violet-100 text-violet-600 px-3 py-1 rounded-full font-medium"
            key={i}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Link */}
      <div className="project-link bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-indigo-500 hover:to-violet-500 text-white border border-violet-700 rounded-md py-1 px-2 text-center shadow-md shadow-violet-600 transition duration-300">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-semibold"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

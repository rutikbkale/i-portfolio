/* eslint-disable react/prop-types */

export default function Project({ project }) {
  return (
    <div className="project text-lg font-mono font-thin border border-violet-300 rounded-md hover:shadow-violet-400 shadow-lg p-4 cursor-pointer text-gray-600 text-justify mb-4 w-[40%]">
      <div className="project-image mb-4">
        <img
          style={{ backgroundColor: "black " }}
          src={project?.image}
          alt="Project Image"
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>

      <div className="project-name text-xl font-semibold text-violet-600 mb-2">
        {project?.name}
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

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

      <div className="project-link bg-gradient-to-r from-violet-500 to-indigo-500 hover:bg-white text-white  border border-violet-700 rounded-md max-w-xs mx-auto text-center py-1 px-2 shadow-md shadow-violet-600 transition-shadow duration-300 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

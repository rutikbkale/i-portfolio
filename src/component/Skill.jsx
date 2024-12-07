/* eslint-disable react/prop-types */
const Skill = ({ skill }) => {
  return (
    <div className="skill bg-violet-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl md:text-2xl font-semibold font-serif text-violet-700 mb-4">
        {skill.title}
      </h3>
      <div className="techStack flex flex-wrap gap-2">
        {skill.tech.map((t, index) => (
          <span
            key={index}
            className="text-sm md:text-base bg-violet-100 text-violet-600 px-3 py-1 rounded-full font-medium hover:bg-violet-200 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;

/* eslint-disable react/prop-types */
export default function Education({ education }) {
  return (
    <div className="text-lg font-mono font-thin border border-violet-300 rounded-md hover:shadow-violet-400 shadow-md p-4 cursor-pointer transition-shadow duration-300 text-gray-600 text-justify">
      <div className="edu-course md:text-2xl font-bold text-violet-700">
        {education.name}
      </div>
      <div className="edu-institute text-sm md:text-xl font-thin text-gray-700">
        {education.university}
      </div>
      <div className="extra mt-2 flex justify-between text-sm">
        <div className="grade text-gray-500">CGPA: {education.grade}</div>
        <div className="duration text-gray-500">{education.duration}</div>
      </div>
    </div>
  );
}

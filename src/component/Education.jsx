/* eslint-disable react/prop-types */
export default function Education({ education }) {
  return (
    <div className="text-lg font-mono font-thin border border-violet-300 rounded-md hover:shadow-violet-400 shadow-lg p-4 cursor-pointer transition text-gray-600 text-justify mb-2">
      <div className="edu-course text-2xl font-bold text-violet-700">
        {education.name}
      </div>
      <div className="edu-institute font-thin">{education.university}</div>
      <div className="extra mt-2 flex justify-between">
        <div className="grade">CGPA: {education.grade}</div>
        <div className="duration">{education.duration}</div>
      </div>
    </div>
  );
}

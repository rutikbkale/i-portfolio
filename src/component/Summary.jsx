import { summary } from "../data/personalInfo";

export default function Summary() {
  return (
    <p className="md:text-lg font-mono font-thin border border-violet-300 rounded-md hover:shadow-violet-400 shadow-md p-4 cursor-pointer transition-shadow duration-300 text-gray-600 text-justify">
      {summary}
    </p>
  );
}

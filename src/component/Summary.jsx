import { summary } from "../data/personalInfo";

export default function Summary() {
  return (
    <p className="text-lg font-mono font-thin border border-violet-300 rounded-md hover:shadow-violet-400 shadow-lg p-4 cursor-pointer transition text-gray-600 text-justify">
      {summary}
    </p>
  );
}

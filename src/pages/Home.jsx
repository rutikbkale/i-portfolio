import homeProfile from "../assets/images/home-profile.webp";
import { personal } from "../data/personalInfo";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-16 xl:p-20">
      {/* Left Part: Text Content */}
      <div className="left-part text-center lg:text-left lg:max-w-[50%]">
        <p className="text-2xl font-semibold font-mono text-gray-600">Hello,</p>
        <p className="text-4xl lg:text-5xl font-bold font-mono md:py-5 my-3 text-violet-700">
          I am <span className="text-violet-800">{personal.name}</span>.
        </p>
        <p className="text-lg lg:text-xl font-mono text-gray-600">
          A passionate{" "}
          <span className="font-semibold text-violet-800">Web</span> &{" "}
          <span className="font-semibold text-violet-800">Java Developer</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          {/* GitHub Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500 hover:bg-white text-white hover:text-indigo-500 border border-violet-700 rounded-md text-center py-2 px-4 shadow-md shadow-violet-600 transition-all duration-300"
          >
            <FaGithub className="mr-2" />
            Github
          </a>

          {/* Leetcode Button */}
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500 hover:bg-white text-white hover:text-indigo-500 border border-violet-700 rounded-md text-center py-2 px-4 shadow-md shadow-violet-600 transition-all duration-300"
          >
            <SiLeetcode className="mr-2" />
            Leetcode
          </a>
        </div>
      </div>

      {/* Right Part: Image */}
      <div className="right-part md:mt-8 lg:mt-0 flex justify-center lg:justify-end  md:mb-0 mb-4">
        <img
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[550px] rounded-lg shadow-violet-400 shadow-md"
          src={homeProfile}
          alt="profile pic"
        />
      </div>
    </main>
  );
}

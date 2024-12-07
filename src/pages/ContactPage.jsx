import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/personalInfo";
import ContactForm from "../component/ContactForm";
import { Profile } from "../component/Profile";

export default function ContactPage() {
  return (
    <>
      <main className="flex flex-col lg:flex-row justify-between p-10">
        {/* Left Content */}
        <ContactForm />

        {/* Right Content */}
        <div className="right-content md:basis-1/2">
          <Profile/>
          <div className="social-media flex gap-4 mt-4 justify-center">
            {/* GitHub */}
            <div className="relative group media border border-violet-300 rounded-lg p-4 shadow-lg hover:shadow-violet-400 hover:scale-105 transition duration-300">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-700" />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                GitHub
              </span>
            </div>

            {/* LeetCode */}
            <div className="relative group media border border-violet-300 rounded-lg p-4 shadow-lg hover:shadow-violet-400 hover:scale-105 transition duration-300">
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-2xl text-gray-700" />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                LeetCode
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group media border border-violet-300 rounded-lg p-4 shadow-lg hover:shadow-violet-400 hover:scale-105 transition duration-300">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-700" />
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

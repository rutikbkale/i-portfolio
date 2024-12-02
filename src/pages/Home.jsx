import homeProfile from "../assets/images/home-profile.webp";
import { personal } from "../data/personalInfo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row items-center justify-between p-10">
        {/* Left Part: Text Content */}
        <div className="left-part text-center lg:text-left">
          <div className="profile flex flex-col justify-center lg:ml-10">
            <p className="text-2xl font-semibold font-mono text-gray-600">
              Hello,
            </p>
            <p className="text-5xl font-bold font-mono my-5 text-violet-700">
              I am <span className="text-violet-800">{personal.name}</span>.
            </p>
            <p className="text-xl font-mono text-gray-600">
              A passionate{" "}
              <span className="font-semibold text-violet-800">Web</span> &{" "}
              <span className="font-semibold text-violet-800">
                Java Developer
              </span>
              .
            </p>
          </div>
        </div>

        {/* Right Part: Image */}
        <div className="right-part mt-10 lg:mt-0">
          <div className="home-profile">
            <img
              className="w-[300px] lg:w-[450px] xl:w-[630px]"
              src={homeProfile}
              alt="profile pic"
            />
          </div>
        </div>
      </main>
    </>
  );
}

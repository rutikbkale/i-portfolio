import profilePic from "../assets/images/profile-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { educations, personal } from "../data/personalInfo";
import Education from "../component/Education";
import Summary from "../component/Summary";

export default function About() {
  return (
    <>
      <main className="flex flex-col lg:flex-row justify-between p-10">
        {/* Left Section */}
        <div className="left-part flex flex-col items-center lg:basis-1/3 lg:flex-shrink-0 lg:pr-5">
          <div className="home-profile">
            {/* Profile Image */}
            <img
              className="w-full max-w-[430px] rounded-full"
              src={profilePic}
              alt="profile pic"
            />
            {/* Profile Content */}
            <div className="profile-content mt-4 text-center">
              <p className="text-5xl font-bold font-serif text-violet-700">
                {personal.name}
              </p>
              <div className="mt-5">
                <p className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-violet-800" />
                  <span className="font-mono font-thin text-xl">
                    {personal.mobNo}
                  </span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-violet-800"
                  />
                  <span className="font-mono font-thin text-xl">
                    {personal.address}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-part lg:basis-2/3 lg:flex-shrink-0 lg:pl-5">
          <div className="summary m-4 mb-8">
            <p className="text-4xl text-left py-1 font-bold font-serif text-violet-700">
              Summary
            </p>
            <Summary />
          </div>
          <div className="edu-details m-4">
            <p className="text-4xl text-left py-1 font-bold font-serif text-violet-700">
              Education
            </p>
            {educations.map((education, index) => {
              return <Education education={education} key={index} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

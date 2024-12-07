import profilePic from "../assets/images/profile-pic.jpeg";
import { personal } from "../data/personalInfo";
import { MdLocationOn, MdPhone } from "react-icons/md";

export const Profile = () => {
  return (
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
          <p className="text-3xl md:text-5xl font-bold font-serif text-violet-700">
            {personal.name}
          </p>
          <div className="mt-3 md:mt-5">
            <p className="flex items-center justify-center gap-2">
              <MdPhone className="text-violet-500" />
              <span className="font-mono font-thin md:text-xl">
                {personal.mobNo}
              </span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MdLocationOn className="text-violet-500" />
              <span className="font-mono font-thin md:text-xl">
                {personal.address}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

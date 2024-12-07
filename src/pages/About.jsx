import Education from "../component/Education";
import Summary from "../component/Summary";
import { Profile } from "../component/Profile";
import { educations } from "../data/personalInfo";

export default function About() {
  return (
    <>
      <main className="flex flex-col lg:flex-row justify-between p-10">
        {/* Left Section */}
        <Profile />

        {/* Right Section */}
        <div className="right-part w-full lg:basis-2/3 lg:pl-5 mt-4 md:mt">
          {/* Summary Section */}
          <div className="summary mb-8">
            <p className="text-2xl sm:text-3xl font-bold font-serif text-violet-700 border-b-2 border-violet-400 pb-2">
              Summary
            </p>
            <div className="mt-4">
              <Summary />
            </div>
          </div>

          {/* Education Section */}
          <div className="edu-details">
            <p className="text-2xl sm:text-3xl font-bold font-serif text-violet-700 border-b-2 border-violet-400 pb-2">
              Education
            </p>
            <div className="mt-4 space-y-6">
              {educations.map((education, index) => (
                <Education education={education} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

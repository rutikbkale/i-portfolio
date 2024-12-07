import Certificate from "../component/Certificate";
import Skill from "../component/Skill";
import { techStack, certificates } from "../data/personalInfo";

const AchivementPage = () => {
  return (
    <main className="p-4 md:p-4 lg:p-8">
      {/* Skills Section */}
      <div className="skills mt-4">
        <h3 className="text-2xl md:text-4xl font-bold font-serif text-violet-700 border-b-2 border-violet-400 pb-2">
          Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {techStack.map((skill, i) => {
            return <Skill skill={skill} key={i} />;
          })}
        </div>
      </div>

      {/* Certificate Section */}
      <div className="certificates mt-12">
        <h3 className="text-2xl md:text-4xl font-bold font-serif text-violet-700 border-b-2 border-violet-400 pb-2">
          Certificates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {certificates.map((certificate, i) => {
            return <Certificate certificate={certificate} key={i} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default AchivementPage;

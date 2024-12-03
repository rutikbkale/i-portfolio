import { projects } from "../data/personalInfo";
import Project from "../component/Project";

export default function ProjectPage() {
  return (
    <>
      <main className="m-6">
        <div className="title text-5xl font-bold font-serif text-violet-700 mb-8">
          Projects
        </div>
        <div className="projects-list max-w-full flex flex-wrap justify-around gap-y-5 mb-8">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </main>
    </>
  );
}

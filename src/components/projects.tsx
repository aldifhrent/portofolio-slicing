import { projects } from "@/lib/const";
import ProjectFilterButton from "./project-filter";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="mt-[139px] px-12 2xl:px-[250px] pt-[61px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-[65px]">My Projects</h1>
        <p className="text-[21px] text-center mt-6">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <ProjectFilterButton />
        <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[106px]  gap-[44px]">
          {projects.map((project) => (
            <ProjectCard
              image={project.image}
              title={project.title}
              type={project.type}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

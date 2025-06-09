import { ProjectCardProps } from "@/types/CardProjects";
import { Button } from "@/components/ui/button";

interface Props {
  projects: ProjectCardProps[];
}

export default function CardProjects({ projects }: Props) {
  return (
    <div className="flex justify-center items-center gap-6 bg-zinc-950 min-h-screen p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between ${
            index === 1 ? "w-[500px] h-[500px] " : "w-[300px] h-[350px] "
          } border border-white/10 rounded-[30px] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102`}
        >
          <div className="flex flex-col justify-between">
            <img className="rounded-t-[30px]" src={project.image} alt={project.title} />
            <div className="p-4">
              <h1 className={`text-white ${index === 1 ? "text-2xl" : "text-xl"}`}>{project.title}</h1>
              <p className={`text-white ${index === 1 ? "text-lg" : "text-base"}`}>{project.description}</p>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <Button className="bg-transparent hover:bg-[#222224]">{project.year}</Button>
            <Button className="bg-transparent hover:bg-[#222224]">View Projects</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

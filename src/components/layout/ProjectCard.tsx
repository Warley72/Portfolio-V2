import { ProjectCardProps } from "@/interface/ProjectCard";
import { Button } from "@/components/ui/button";

interface Props {
    project: ProjectCardProps;
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className={`flex flex-col justify-between w-full h-auto border stroke-black dark:stroke-white rounded-[30px]  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102`}>
            <div className="flex flex-col justify-between">
                <img className="rounded-t-[30px]" src={project.image} alt={project.title}/>
                <div className="p-4">
                    <h1 className="text-2xl text-center mb-4">{project.title}</h1>
                    <p className="text-base">{project.description}</p>
                </div>
            </div>
            <div className="flex justify-between p-4">
                <Button className="flex-1 min-w-0 max-w-[4rem] px-[0.55rem] py-[0.5rem] text-[0.85rem] bg-zinc-200 dark:bg-[#222224] text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-[#333338] stroke-black dark:stroke-white cursor-pointer">
                    {project.year}
                </Button>
                <Button className="flex-1 min-w-0 max-w-[8rem] px-[0.55rem] py-[0.5rem] text-[0.85rem] bg-zinc-200 dark:bg-[#222224] text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-[#333338] stroke-black dark:stroke-white cursor-pointer">
                    View Project
                </Button>
            </div>
        </div>
    );
}

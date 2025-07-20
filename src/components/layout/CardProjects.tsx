import { ProjectCardProps } from "@/types/CardProjects";
import { Button } from "@/components/ui/button";

interface Props {
    projects: ProjectCardProps[];
    className?: string;
}

export default function CardProjects({ projects }: Props) {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 min-h-screen p-4">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-between w-full h-auto border stroke-black dark:stroke-white rounded-[30px] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102">
                    <div className="flex flex-col justify-between">
                        <img className="rounded-t-[30px]" src={project.image} alt={project.title} />
                        <div className="p-4">
                            <h1 className={`${index === 1 ? "text-2xl" : "text-xl"}`}>{project.title}</h1>
                            <p className={`${index === 1 ? "text-lg" : "text-base"}`}>{project.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-between p-4">
                        <Button className="bg-zinc-200 dark:bg-[#222224] text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-[#333338] stroke-black dark:stroke-white cursor-pointer">{project.year}</Button>
                        <Button className="bg-zinc-200 dark:bg-[#222224] text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-[#333338] stroke-black dark:stroke-white cursor-pointer">View Projects</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

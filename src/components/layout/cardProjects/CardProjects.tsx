import { Button } from "@/components/ui/button";
import { ProjectCardProps  } from "@/types/CardProjects"

export default function CardProjects({title, description, image, year,}:ProjectCardProps ) {
    return (
        <div className="flex justify-center items-center gap-6 bg-zinc-950 min-h-screen p-6">

            <div className="flex flex-col justify-between w-[300px] h-[350px] border border-white/10 rounded-[30px] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102">
                <div className="flex flex-col justify-between">
                    <img className="rounded-t-[30px]" src={image} alt="image1" />
                    <div className="p-2">
                        <h1 className="text-white text-xl">{title}</h1>
                        <p className="text-white text-base">{description}</p>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">{year}</Button>
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">View Projects</Button>
                </div>
            </div>

            <div className="flex flex-col justify-between w-[500px] h-[500px] border border-white/10 rounded-[30px] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102" >
                <div className="flex flex-col justify-between">
                    <img className="rounded-t-[30px]" src={image} alt="image1" />
                    <div className="p-4">
                        <h1 className="text-white text-2xl">{title}</h1>
                        <p className="text-white text-lg">{description}</p>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">{year}</Button>
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">View Projects</Button>
                </div>
            </div>

            <div className="flex flex-col justify-between w-[300px] h-[350px] border border-white/10 rounded-[30px] shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102">
                <div className="flex flex-col justify-between">
                    <img className="rounded-t-[30px]" src={image} alt="image1" />
                    <div className="p-2">
                        <h1 className="text-white text-xl">{title}</h1>
                        <p className="text-white text-base">{description}</p>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">{year}</Button>
                    <Button className="bg-transparent hover:bg-[#222224] transition duration-300 cursor-pointer">View Projects</Button>
                </div>
            </div>
        </div>
    )
}
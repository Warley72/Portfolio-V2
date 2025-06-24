import { Card } from "@/components/ui/card";
import { projects } from "@/mocks/Projects";
import Navigation from "@/components/layout/navigation/Navigation";
import CardProjects from "@/components/layout/cardProjects/CardProjects";
import { PageTransition } from "@/components/layout/pageTransition/PageTransition";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Projects() {
    return (
        <PageTransition>
            <div className="bg-zinc-950 text-white p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Navigation />
                    <h1 className="font-mono text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-lg text-[#A1A1AA] font-semibold mb-8">Explore my portfolio of client and personal projects.</p>
                    <Card className="bg-zinc-950 border border-white/20">
                        <div className="">
                            <Carousel opts={{ loop: true }}>
                                <CarouselContent>
                                    {projects.map((project, index) => (
                                        <CarouselItem key={index} className="flex justify-center items-center ">
                                            <div className="flex justify-center items-center w-[31.25rem] h-[32.25rem]">
                                                <CardProjects projects={[project]} />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </Card>
                </div>
            </div>
        </PageTransition>
    );
}

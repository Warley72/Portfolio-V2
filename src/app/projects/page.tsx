import { Card } from "@/components/ui/card";
import Navigation from "@/components/layout/Navigation";
import { PageTransition } from "@/components/layout/PageTransition";
import { CarouselProjects } from "@/components/layout/CarouselProjects";

export default function Projects() {
    return (
        <PageTransition>
            <div className="p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Navigation />
                    <h1 className="font-mono text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-lg text-[#A1A1AA] font-semibold mb-8">Explore my portfolio of client and personal projects.</p>
                    <Card className="border stroke-black dark:stroke-white">
                        <CarouselProjects />
                    </Card>
                </div>
            </div>
        </PageTransition>
    );
}

"use client"

import * as React from "react"
import { projects } from "@/mocks/Projects";
import Autoplay from "embla-carousel-autoplay"
import CardProjects from "./CardProjects";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function CarouselProjects() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 2000 }),]}>
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index} className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-[30rem] h-[35rem]">
                            <CardProjects projects={[project]} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

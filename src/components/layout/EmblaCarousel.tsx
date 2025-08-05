"use client"

import React, { useCallback, useEffect, useRef } from 'react'
import type {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../layout/EmblaCarouselArrowButtons'

import "@/styles/embla.css"

import { ProjectCardProps } from '@/types/CardProjects'
import ProjectCard from '@/components/layout/ProjectCard'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

type PropType = {
    projects: ProjectCardProps[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ projects, options }) => {
    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__number') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const scale = numberWithinRange(tweenValue, 0, 1).toString()
                    const tweenNode = tweenNodes.current[slideIndex]
                    tweenNode.style.transform = `scale(${scale})`
                })
            })
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale)
    }, [emblaApi, tweenScale])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number p-2">
                                <ProjectCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel


    import { News } from '../../Scripts/Index';
    import { TECarousel, TECarouselItem } from "tw-elements-react";
    import React from 'react';


    export const Carousel = () => {
    return (
        <TECarousel showControls showIndicators ride="carousel" className='h-60'>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {
                News.map(x=>
                    <TECarouselItem
                    key={x.id}
                    itemID={x.id}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                <img
                src={x.image}
                className=" object-fit"
                alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">First slide label</h5>
                <p>
                    Some representative placeholder content for the first slide.
                </p>
                </div>
            </TECarouselItem>
                )
            }
            </div>
            

            

        </TECarousel>
    )
    }

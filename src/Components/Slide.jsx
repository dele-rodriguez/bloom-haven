import React from "react";
import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import UseMediaQuery from "../hooks/UseMediaQuery";
import { Link } from "react-router-dom";

function Slide({data , slides , blogSlides}) {
    const {w} = UseMediaQuery();
    const [slidesPerView , setSlidesPerView] = useState(1.5);
    const [blogSlidePerView , setBlogSlidePerView] = useState(1.5);

    console.log(data)

    useEffect(() => {
        if (w < 501) {
            setSlidesPerView(1.5);
            setBlogSlidePerView(1.5);
        } else if(w > 501 && w < 700) {
            setSlidesPerView(2.5)
            setBlogSlidePerView(2.2);
        } else {
            setSlidesPerView(3);
            setBlogSlidePerView(3);
        }
    } , [w]);

    return (
        <>
            {slides ? 
                (
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={10}
                        loop={true}
                        className="mySwiper"
                    >
                        {slides.map((slide , index) => (
                            <SwiperSlide
                                className="feature-slide flex flex-col items-center"
                                key={index}
                                id={slide.id}
                            >
                                <img className="slide-img mt-2 mx-2" src={slide.img}></img>
                                <p>{slide.name}</p>
                                <p className="font-medium">{slide.price}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : blogSlides ?
                (
                    <Swiper
                        slidesPerView={blogSlidePerView}
                        spaceBetween={10}
                        loop={true}
                        className="review-swiper"
                    >
                        {blogSlides.map((blogSlide , index) => (
                            <SwiperSlide
                                className="bg-lightpink relative flex flex-col items-center p-2 pb-3 justify-around"
                                key={index}
                                id={blogSlide.title}
                            >
                                <img className="h-[55%] w-[100%]" src={blogSlide.img}></img>
                                <div className="h-[50%] w-full flex flex-col justify-center">
                                    <h4 className="font-frank font-bold self-start py-2">{blogSlide.title}</h4>
                                    <p className="text-md font-josefin font-extralight">{blogSlide.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : 
                (
                        <Swiper
                        slidesPerView={blogSlidePerView}
                        spaceBetween={10}
                        loop={true}
                        className="mySwiper"
                    >
                        {data.map((data , index) => (
                            <SwiperSlide
                               className="bg-lightpink relative flex flex-col items-center p-2 pb-3 justify-around"
                               key={index}
                               id={data.flower}
                            >
                                <Link
                                    to={`/shop/${data.flower}`}
                                >
                                    <img className="w-[100%] h-[244px]" src={"/" + data.img}></img>
                                    <div className="h-[50%] w-full flex flex-col justify-center items-center">
                                        <h4 className="font-frank py-2">{data.flower}</h4>
                                        <p className="text-md font-josefin font-bold">{data.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            }
            
        </>
    )
}

export default Slide;
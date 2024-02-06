import React from "react";
import { reviews } from "../data";
import { useState , useEffect } from "react";
import { Swiper , useSwiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';



function ReviewSlide ({data}) {
    console.log(data);

    return(
        <>
            {data ? 
                <Swiper
                    slidesPerView={1}
                    navigation={true} 
                    modules={[Navigation]} 
                    className="review-swiper"
                    loop={true}
                    style={{"--swiper-navigation-color": "#C13371",}}
                >
                    {data.map((info , i) => (
                        <SwiperSlide
                            className="flex flex-col items-center"
                            key={i}
                        >
                            <img className="mb-4 md:w-[80px] md:h-[80px]" key={i} src="/home/profile.png" alt="Profile pic" />
                            <h4 className="mb-4 sm:text-lg">{info.user}</h4>
                            <p className="mb-4 w-9/12 text-center sm:text-md">{info.comment}</p>
                            <p >{info.rating}🌟</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <Swiper 
                    slidesPerView={1}
                    navigation={true} 
                    modules={[Navigation]} 
                    className="review-swiper"
                    loop={true}
                    style={{
                        "--swiper-navigation-color": "#C13371",
                    }}
                >
                    {reviews.map((personelle , index) => (
                        <SwiperSlide
                            className="flex flex-col items-center"
                            key={index}
                            id={personelle.name}
                        >
                            <img className="mb-4 md:w-[80px] md:h-[80px]"  src={ "/"+ personelle.profile} alt="Profile" />
                            <h4 className="mb-4 font-medium sm:text-lg ">{personelle.name}</h4>
                            <p className="w-9/12 text-center sm:text-md ">{personelle.review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </>
    )
}


export default ReviewSlide
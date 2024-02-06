import React from "react";
import {team , reasons} from "../data.js"



function About() {

    return (
        <>
            <section className="about">
                <section className="about-intro lg:px-10 font-frank flex flex-col justify-center px-4">
                    <h3 className="text-lg md:text-xl font-medium text-deeppink w-5/6 md:w-3/6 mb-4">Hello, we're Bloom Haven</h3>
                    <p className="text-deeppink text-md md:text-lg w-5/6 md:w-3/6">We're more than just a modern floral brand. We're a connection between people and the pure beauty of farm-fresh flowers, grown and cherished by our dedicated partners.</p>
                </section>
                <section className="history py-10 px-4 lg:py-16 lg:px-10 font-josefin flex flex-col h-[1250px] min-[500px]:h-[1440px] sm:h-[800px]">     
                    <div className="h-[50%] flex flex-col justify-between sm:flex-row mb-6 sm:mb-10">
                        <div className="story flex flex-col min-[400px]:mb-4 sm:w-[45%] self-center">
                            <h3 className="font-frank text-md sm:text-lg font-medium uppercase mb-3">Our Story</h3>
                            <p className="text-sm sm:text-md">
                                Our journey began with a passion for nature's most delicate marvels, and a dream to connect people with the enchanting essence of fresh blooms.
                                Founded by a team of flower enthusiasts, we set out on a mission to redefine the floral experience. From partnering with local farmers who cultivate each petal with love to curating bespoke arrangements, every step reflects our commitment to excellence.
                                Bloom Haven is more than just a floral brand; it's a celebration of life's precious moments.
                            </p>
                        </div>
                        <img className="sm:w-[50%]" src="/about/story.png" alt="story picture" />
                    </div>
                    <div className="h-[50%] flex flex-col justify-between sm:flex-row-reverse">
                        <div className="mission flex flex-col min-[400px]:mb-4 sm:w-[45%] self-center">
                            <h3 className="font-frank text-md sm:text-lg font-medium uppercase mb-3">Our Mission & Vision</h3>
                            <p className="text-sm sm:text-md">
                                Our mission is to spread the joy and beauty of flowers to every heart and home. We believe in the power of nature's artistry to brighten lives, create connections, and evoke unforgettable emotions. <br />
                                Our vision is to be a beacon of elegance, where each bloom weaves stories of love, gratitude, and celebration. We aspire to be your go-to destination for capturing life's treasured moments in the delicate embrace of nature's most exquisite gift.
                            </p>
                        </div>
                        <img className="sm:w-[50%]" src="/about/mission.png" alt="" />
                    </div>
                </section>
                <section className="bg-lightpink team py-10 px-4 lg:py-16 lg:px-10 font-frank mt-4" >
                    <h2 className="uppercase text-lg font-medium text-center mb-4">Our Team</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-9">
                        {team.map((member , i) => (
                            <div
                                key={i}
                            >
                                <div className="flex flex-col justify-center content-center">
                                    <img src={member.img} alt={member.name + " Profile picture"} />
                                    <h3 className="font-medium text-center  lg:text-lg">{member.name}</h3>
                                    <p className="text-center font-josefin  lg:text-lg">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-grey reason py-10 px-4 lg:py-16 lg:px-10 font-frank">
                    <h3 className="uppercase font-medium text-lg text-center mb-4">Reasons to Choose Bloom <br className="sm:hidden" /> HAVEN</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:mr-4">
                        {reasons.map((reason) => (
                            <div key={reason.id} className="flex flex-col items-center justify-around mb-5 h-[180px] sm:h-[230px] sm:w-[200px] sm:ml-4">
                                <p className="text-xl text-deeppink md:text-xxl font-medium">{reason.id}</p>
                                <h3 className="font-semibold">{reason.reason}</h3>
                                <p className="text-center font-josefin">{reason.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}


export default About;
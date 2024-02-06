import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import Slide from "../Components/Slide";
import UseMediaQuery from "../hooks/UseMediaQuery";
import {choice , featureSlides , blogSlides} from "../data";
import ReviewSlide from "../Components/ReviewSlide";

function Home() {
    const [phoneScreen , setPhoneScreen] = useState()
    const {w} = UseMediaQuery();

    useEffect(() => {
        if (w < 700) {
            setPhoneScreen(true);
        } else {
            setPhoneScreen(false);
        }
    } , [w]);

    function submit(event) {
        console.log("submitted");

        event.preventDefault();
    }
    
    return (
        <>
            <section className="home">
                <section id="home" className="home-intro flex flex-col justify-center p-4 md:p-8">
                    <h2 className="text-xl text-deeppink font-medium w-10/12 font-frank mb-12 md:text-xxl">Embrace the Timeless Beauty of Flowers in Every Moment</h2>
                    <Link
                        to={"/shop"}
                        className="bg-deeppink w-24 h-8 text-white hover:text-white hover:text-xs text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium text-center"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section id="featured" className="featured flex flex-col font-frank items-center pt-4">
                    <h2 className="px-4 md:px-8 pb-4 text-md font-medium">FEATURED</h2>
                    <p className="px-4 md:px-8 font-josefin text-center h-1/6">Explore our abundant selection of fresh flowers, perfect for every occasion.</p>
                    <Slide
                        slides={featureSlides}
                    />
                    <Link
                        to={"/shop"}
                        className="bg-deeppink my-3 w-24 h-8 text-white text-sm font-normal font-josefin link md:w-28 md:h-10 md:text-md md:font-medium sm:mb-4 text-center hover:text-white hover:text-xs"
                    >
                        SHOP NOW
                    </Link>
                </section>
                <section id="choose-us" className="bg-lightpink lg:px-20 relative px-3 md:px-8 py-6 font-frank flex flex-col sm:flex-row">
                    <div className="h-1/2 sm:h-full">
                        <h3 className="text-lg font-medium">WHY CHOOSE US</h3>
                        {choice.map((choices , index) => (
                            <div className="flex my-3 items-center" key={choices.header}>
                                <h3 className="mr-4 text-xl text-deeppink md:text-xxl">{index + 1}</h3>
                                <div>
                                    <h3 className="text-md font-medium sm:text-lg">{choices.header}</h3>
                                    <p className="font-josefin text-sm font-thin"> {choices.content} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-1/2 sm:h-full img-box relative w-full flex items-center justify-center ">
                        <img src="home/Frame-215.png" alt="flowers" />
                    </div>
                </section>
                <section id="reviews" className="h-[450px] sm:h-[500px] relative font-josefin flex flex-col justify-center">
                    <div>
                        <img className="absolute top-0 behind" src="home/left-t.png" alt="flower-bg" />
                        <img className="absolute bottom-0 behind" src="home/left-b.png" alt="flower-bg" />
                        <img className="absolute top-0 right-0 behind" src="home/right-t.png" alt="flower-bg" />
                        <img className="absolute bottom-0 right-0 behind" src="home/right-b.png" alt="flower-bg" />
                    </div>
                    <div className="self-center flex flex-col relative w-full justify-center items-center">
                        <h3 className="font-frank font-medium mb-4 sm:mb-6 sm:text-xl">WHAT CLIENT SAYS</h3>
                        <div className="w-[99%] md:w-[70%]">
                            <ReviewSlide />
                        </div>
                    </div>
                </section>
                <section id="socials" className="bg-lightpink lg:px-20 h-[700px] sm:h-[600px] md:h-[450px] px-3 md:px-8 py-8 font-josefin flex flex-col md:flex-row items-center justify-around" >
                    <img className="h-[45%] sm:h-1/2 w-11/12 sm:w-9/12 md:w-1/2 md:h-3/4 md:mr-4 lg:w-2/6 lg:h-5/6" src="home/Frame-128.png" alt="flower-frame" />
                    <div className="h-[55%] sm:h-1/2 md:w-1/2 md:h-full flex flex-col justify-around">
                        <h3 className="font-frank font-medium text-lg">FOLLOW US</h3>
                        <p className="font-thin text-md">Stay connected and be part of our vibrant floral community by following us on social media. Join us for a daily dose of breathtaking blooms, inspiring floral arrangements, and behind-the-scenes glimpses of our creative process. Be the first to know about our exciting promotions, exclusive offers, and upcoming events. Together, let's celebrate the beauty of flowers and share in the joy they bring to our lives. Follow us today and let the blooming journey unfold!</p>
                        <div id="icons-1" className="flex mb-1 lg:mb-2">
                            <a className="mr-2 lg:mr-5" href=""><svg className="lg:w-6 lg:h-7" target="_blank" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 21 21" fill="none"><path d="M10.5861 7.30926C8.78173 7.30926 7.30924 8.78174 7.30924 10.5861C7.30924 12.3904 8.78173 13.8629 10.5861 13.8629C12.3904 13.8629 13.8629 12.3904 13.8629 10.5861C13.8629 8.78174 12.3904 7.30926 10.5861 7.30926ZM20.4141 10.5861C20.4141 9.22915 20.4264 7.88449 20.3502 6.52999C20.274 4.95672 19.9151 3.56044 18.7647 2.40998C17.6117 1.25706 16.2179 0.900617 14.6446 0.824411C13.2877 0.748206 11.943 0.760497 10.5885 0.760497C9.23159 0.760497 7.88693 0.748206 6.53244 0.824411C4.95916 0.900617 3.56288 1.25952 2.41242 2.40998C1.2595 3.56289 0.903058 4.95672 0.826853 6.52999C0.750647 7.88694 0.762938 9.2316 0.762938 10.5861C0.762938 11.9406 0.750647 13.2877 0.826853 14.6422C0.903058 16.2155 1.26196 17.6118 2.41242 18.7622C3.56534 19.9151 4.95916 20.2716 6.53244 20.3478C7.88939 20.424 9.23404 20.4117 10.5885 20.4117C11.9455 20.4117 13.2901 20.424 14.6446 20.3478C16.2179 20.2716 17.6142 19.9127 18.7647 18.7622C19.9176 17.6093 20.274 16.2155 20.3502 14.6422C20.4289 13.2877 20.4141 11.943 20.4141 10.5861ZM10.5861 15.628C7.79597 15.628 5.54422 13.3762 5.54422 10.5861C5.54422 7.79599 7.79597 5.54424 10.5861 5.54424C13.3762 5.54424 15.6279 7.79599 15.6279 10.5861C15.6279 13.3762 13.3762 15.628 10.5861 15.628ZM15.8344 6.51524C15.183 6.51524 14.6569 5.98918 14.6569 5.33775C14.6569 4.68631 15.183 4.16025 15.8344 4.16025C16.4859 4.16025 17.0119 4.68631 17.0119 5.33775C17.0121 5.49243 16.9818 5.64564 16.9227 5.78858C16.8636 5.93153 16.7769 6.06142 16.6675 6.1708C16.5581 6.28018 16.4282 6.3669 16.2853 6.42601C16.1423 6.48511 15.9891 6.51544 15.8344 6.51524Z" fill="#C13371"/></svg></a>
                            <a className="mr-2 lg:mr-5" href=""><svg className="lg:w-6 lg:h-7" target="_blank" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 24 24" fill="none"><path d="M14.1695 13.4218H16.5294L17.4734 9.6459H14.1695V7.75797C14.1695 6.78569 14.1695 5.87004 16.0575 5.87004H17.4734V2.69832C17.1657 2.65773 16.0037 2.56616 14.7765 2.56616C12.2136 2.56616 10.3937 4.13031 10.3937 7.0028V9.6459H7.56177V13.4218H10.3937V21.4455H14.1695V13.4218Z" fill="#C13371"/></svg></a>
                            <a className="mr-2 lg:mr-5" href="https://twitter.com/dele_rodriguez_" target="_blank"><svg className="lg:w-6 lg:h-7" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 26 26" fill="none"><path d="M23.2033 6.25132C22.4511 6.57581 21.6325 6.80934 20.7893 6.9003C21.6647 6.38022 22.3203 5.55859 22.633 4.58955C21.8116 5.07822 20.9116 5.42089 19.9732 5.60235C19.581 5.18304 19.1066 4.84899 18.5796 4.62103C18.0527 4.39308 17.4844 4.27609 16.9102 4.27735C14.5872 4.27735 12.7189 6.16037 12.7189 8.47112C12.7189 8.79561 12.7583 9.12009 12.8222 9.43229C9.34376 9.25038 6.24146 7.58861 4.17899 5.04433C3.80319 5.68621 3.60625 6.41707 3.60868 7.16087C3.60868 8.61615 4.34861 9.89936 5.47694 10.654C4.812 10.6278 4.16262 10.4451 3.58164 10.1206V10.1722C3.58164 12.2101 5.02217 13.8989 6.94205 14.2873C6.58157 14.381 6.21074 14.4289 5.8383 14.4299C5.56544 14.4299 5.30732 14.4029 5.04675 14.366C5.57773 16.0278 7.12396 17.2348 8.96519 17.2741C7.52466 18.4024 5.72031 19.0661 3.76109 19.0661C3.40956 19.0661 3.08507 19.0539 2.74829 19.0145C4.60672 20.2068 6.81177 20.8951 9.18643 20.8951C16.8955 20.8951 21.1138 14.5086 21.1138 8.96522C21.1138 8.78331 21.1138 8.6014 21.1015 8.41949C21.9177 7.82214 22.633 7.08221 23.2033 6.25132Z" fill="#C13371"/></svg></a>
                            <a className="mr-2 lg:mr-5" href=""><svg className="lg:w-6 lg:h-7" target="_blank" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 23 24" fill="none"><path d="M12.1537 2.09424C8.07574 2.09424 4.05444 4.81286 4.05444 9.2023C4.05444 11.9917 5.62615 13.5917 6.57483 13.5917C6.9713 13.5917 7.19785 12.5015 7.19785 12.19C7.19785 11.8218 6.26332 11.0289 6.26332 9.49965C6.26332 6.2996 8.69875 4.04825 11.8422 4.04825C14.5466 4.04825 16.5431 5.59163 16.5431 8.40937C16.5431 10.5191 15.6935 14.4696 12.9608 14.4696C11.9696 14.4696 11.12 13.7617 11.12 12.728C11.12 11.2271 12.1678 9.76868 12.1678 8.22529C12.1678 5.59163 8.44388 6.07305 8.44388 9.24478C8.44388 9.91027 8.52884 10.6466 8.82619 11.2554C8.27397 13.6201 7.15537 17.1316 7.15537 19.567C7.15537 20.3175 7.26865 21.0538 7.33944 21.8042C7.48104 21.96 7.41024 21.9458 7.60847 21.8609C9.60496 19.1139 9.53416 18.59 10.4404 14.9935C10.936 15.9281 12.1961 16.4236 13.1873 16.4236C17.4068 16.4236 19.3042 12.3174 19.3042 8.6076C19.3042 4.6571 15.8918 2.09424 12.1537 2.09424Z" fill="#C13371"/></svg></a>
                        </div>
                    </div>
                </section>
                <section id="blog" className="h-[680px] sm:h-[650px] relative font-josefin flex flex-col items-center py-6">
                    <div className="h-[20%] flex flex-col items-center">
                        <h2 className="text-lg font-medium">BLOG</h2>
                        <p className="w-10/12 text-md font-thin text-center py-2">Dive into our captivating blog and discover a world of blooming inspiration</p>
                    </div>
                    <Slide
                        blogSlides = {blogSlides}
                    />
                </section>
                <section id="news-letter" className="bg-grey h-[230px] sm:h-[200px] px-3 sm:px-12 py-5 font-josefin flex flex-col justify-around sm:flex-row">
                    <div className="sm:w-[35%] flex flex-col justify-between sm:justify-center">
                        <h3 className="font-frank font-medium text-lg ">NEWSLETTER </h3>
                        <p className="text-md font-light">Sign up for our newsletter and be the first to receive exclusive floral inspirations, special offers, and updates on upcoming events.</p>
                    </div>
                    <form className="sm:w-[60%] w-[90%] self-center" onSubmit={submit}>
                        <div className="relative h-11 flex justify-between">
                            <input className="w-[70%] p-2 border-2 border-deeppink" type="email" name="email" id="Insert-email" placeholder="Email Adress" />
                            <button className="w-[27%] bg-deeppink text-white " type="submit">SUBMIT</button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}


export default Home
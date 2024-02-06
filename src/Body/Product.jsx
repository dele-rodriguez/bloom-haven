import React , {useMemo, useState} from "react";
import { useParams , useLocation } from "react-router-dom";
import { reviews, shopData } from "../data";
import ReviewSlide from "../Components/ReviewSlide";
import Slide from "../Components/Slide";


function Product() {

    const params = useParams();
    const location = useLocation();
    const [des , setDes] = useState("Description");

    const filteredFlowers = useMemo(() => {
        return shopData.filter(item => {
            // Check if item is an object
            if (item && typeof item === 'object') {
                // Assuming 'name' is the property you want to filter on
                const itemName = (item.flower || '').toLowerCase();
                if (params.flowerID) {
                    return itemName.includes(params.flowerID.toLowerCase());
                } else {
                    return shopData;
                }
            }
            return false; // Skip if item is not an object
        });
    }, [params]);

    const flower = filteredFlowers[0];

    const similarFlowers = useMemo(() => {
        return shopData.filter(item => {
            //Checks if item is an object
            if (item && typeof item === 'object') {
                const type = (item.Type || '').toLowerCase();
                const color = (item.color || '').toLowerCase();
                const ocassion = (item.ocassion || '').toLowerCase();
                if (flower) {
                    return type.includes(flower.Type.toLowerCase()) || color.includes(flower.color.toLowerCase()) || ocassion.includes(flower.ocassion.toLowerCase())
                } else {
                    return shopData; 
                }
            } return false; //skips if item is not an object
        })
    } , [flower.Type , flower.color , flower.ocassion]);

    return(
        <>
            {flower? (
                <section className="flower">
                    <div className="flex flex-col items-center sm:flex-row min-[460px]:mt-10  justify-between sm:mx-4">
                        <div className="w-full flex justify-center items-center sm:justify-start lg:justify-between sm:w-[50%] lg:w-[40%]">
                            <div className="h-[320px] hidden lg:flex lg:flex-col lg:content-start lg:justify-start" >
                                <img src="/pic1.png" alt="look-alike" />
                                <img src="/pic2.png" alt="look-alike" />
                                <img src="/pic3.png" alt="look-alike" />
                            </div>
                            <img className="w-full min-[460px]:w-[80%] sm:w-[90%] sm:h-[320px] lg:w-[70%] lg:h-[320px]" src={`/${flower.img}`}/>
                        </div>
                        <div className="p-2 flex font-josefin flex-col justify-between h-[300px] sm:h-[330px] min-[460px]:w-[82%] sm:w-[50%] lg:w-[60%]">
                            <p className="font-frank text-lg font-medium">{flower.flower}</p>
                            <h3 className="font-frank text-md font-medium">{flower.price}</h3>
                            <p className="font-md">{flower.content}</p>
                            <p className="">Available: <span className="font-medium">{flower.quantity}</span></p>
                            <a className="w-full bg-deeppink text-white flex pt-1 justify-center items-center h-10 hover:text-white" href="#">ADD TO CART</a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between px-2 sm:px-0 py-6 min-[460px]:mx-12 sm:mx-4">
                        <div className="w-full sm:w-[55%] pr-4">
                            <div className="font-frank font-medium text-md">
                                <button className={`${des === "Description"? "border-b-2 border-pink" : ""} `} onClick={() => {setDes("Description")}}>Description</button>
                                <button className={`${des === "Review" ? "border-b-2 border-pink" : ""} ml-4 `} onClick={() => {setDes("Review")}}>{`Reviews (${flower.review.length})`}</button>
                            </div>
                            <div className="font-josefin text-md py-4">
                                { des === "Review" ?
                                    <ReviewSlide 
                                        data={flower.review}
                                    />
                                : 
                                    <p>{flower.description}</p>
                                }
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] self-center min-[980px]:justify-self-end min-[980px]:w-[38%] min-[980px]:h-[330px]">
                            <img className="min-[980px]:h-[330px]" src="/pic4.png" alt="flower img" />
                        </div>
                    </div>
                    <div className="py-8">
                        <h3 className="text-md sm:text-xl font-medium text-center font-frank mb-4">YOU MAY ALSO LIKE</h3>
                        <div>
                            <Slide data={similarFlowers}/>
                        </div>
                    </div>
                </section>
            ): 
                <p>This flower is not available in our shop</p>
            }
            
        </>
    )
}

export default Product;
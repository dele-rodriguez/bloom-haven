import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import UseMediaQuery from "../hooks/useMediaQuery";

function Dropdown ({header , linkName}) {
    const [collaspe , setCollaspe] = useState(true);
    const [activeState , setActiveState] = useState("");
    const {w} = UseMediaQuery();

    useEffect(() => {
        if (w > 1024 ) {
            setCollaspe(false);
        } else {
            setCollaspe(true)
        }
    } , [w])


    return (
        <>
            <div className="lg:w-1/3">
                <h4 className="flex items-center font-medium">{header} 
                    <span
                        className={`${collaspe ? 'transform -scale-y-1' : ''} px-2 lg:hidden cursor-pointer`}
                        onClick={() => {
                            setCollaspe((prevActiveState) => !prevActiveState);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M11 6L6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </h4>
                <div className={`${collaspe ? 'hidden' : '' } flex flex-col py-2`}>
                    {linkName.map((name , index) => (
                        <Link
                            className= {`${activeState === name ? 'text-deeppink' : ''} mb-2`} 
                            key={index}
                            to={name}
                            onClick={() => {
                                setActiveState(name);
                            }}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dropdown;
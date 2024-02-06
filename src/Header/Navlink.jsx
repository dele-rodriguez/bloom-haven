import React from "react";
import { useState } from "react";
import { Link , useLocation } from "react-router-dom";

function NavLink ({linkName , route , collaspeState , setCollaspeState , hideHere}) {

    const location = useLocation();

    return(
        <>
            <Link
                to={route}
                className={`${location.pathname === route ? 'text-deeppink' : ''} ${hideHere ? 'md:hidden': ''} ${linkName === 'ABOUT'|| linkName === 'CONTACT US'? 'px-1' : ''} font-josefin text-sm`}
                onClick={() => {
                    if (!collaspeState) {
                        setCollaspeState(true)
                    }
                }}
            >
                {linkName}
            </Link>
        </>
    )
}

export default NavLink;
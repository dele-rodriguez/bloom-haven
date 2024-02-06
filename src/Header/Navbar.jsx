import React from "react"
import { useState } from "react";
import NavLink from "./Navlink";

function Header() {

    const [collaspe , SetCollaspe] = useState(true);

    return (
        <>
            <nav className="flex flex-row bg-lightpink items-center justify-between h-50 font-josefin py-3 md:px-3 md:py-3 lg:px-6 ">
                <div className="w-1/4 md:w-4/12">
                    <svg
                        onClick={() => {
                            SetCollaspe((PrevCollaspe) => !PrevCollaspe);
                        }} 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 18 12" fill="none" className="ml-3 md:hidden">
                        {
                            collaspe ? (<path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="black"/>): (<path d="M0 0 L18 12 M0 12 L18 0" stroke="black" strokeWidth="3" />)
                        }
                    </svg>
                    <div className={`${collaspe ? 'hidden' : 'flex'} absolute z-10 flex-col items-center justify-around w-full h-5/6 mt-5 text-sm font-bold bg-lightpink md:flex md:relative md:flex-row md:justify-between md:bottom-2.5 md:px-1`}>
                        <NavLink route="/" setCollaspeState={SetCollaspe} collaspeState={collaspe}  linkName="HOME"/>
                        <NavLink route="/shop" setCollaspeState={SetCollaspe} collaspeState={collaspe}  linkName="SHOP"/>
                        <NavLink route="/about" setCollaspeState={SetCollaspe} collaspeState={collaspe} linkName="ABOUT"/>
                        <NavLink route="/blog" setCollaspeState={SetCollaspe} collaspeState={collaspe}  linkName="BLOG"/>
                        <NavLink route="/contact" setCollaspeState={SetCollaspe} hideHere={"md:hidden"} linkName="CONTACT US"/>
                    </div>
                </div>
                <div className="w-2/4 text-center md:w-4/12">
                    <h2 className="font-frank text-md font-bold tracking-wide">BLOOM HAVEN</h2>
                </div>
                <div className="w-1/4 md:flex font-bold text-sm md:justify-around md:-4/12 sm:justify-center">
                    <div className="hidden md:flex md:justify-between">
                        <NavLink route="/contact" linkName="CONTACT US"/>
                    </div>
                    <div className="flex justify-around md:w-1/4">
                        <a className="w-4" href="#"><img src="/images/Nav/contact-icon.svg" alt="contact icon" /></a>
                        <a className="w-4" href="#"><img src="/images/Nav/shop-icon.svg"/></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
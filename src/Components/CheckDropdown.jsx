import React from "react";
import { useState ,  useEffect  } from "react";
import UseMediaQuery from "../hooks/useMediaQuery";

function CheckDropdown ({ check , setCheck , checkFilters , dropdown}) {
    const {w} = UseMediaQuery();
    const [collaspe , setCollaspe] = useState(false);

    useEffect(() => {
        if (w > 768 ) {
            setCollaspe(false);
        } else {
            setCollaspe(true);
        }
    } , [w])

    const addCheck = (newCheck) => {
        setCheck([...check, newCheck]);
    };

    const removeCheck = (name) => {
        const updatedArray = check.filter(item => item !== name);
        setCheck(updatedArray);
    };

    return (
        <> 
            <div className="font-josefin">
                <h3 className="text-sm uppercase flex justify-between items-center font-medium mt-4">{dropdown}
                    <span
                        className={`${collaspe ? 'transform -scale-y-1' : ''} px-2 cursor-pointer`}
                        onClick={() => {
                            setCollaspe((prevActiveState) => !prevActiveState);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M11 6L6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </h3>
                <div className={`${collaspe ? 'hidden' : '' } flex flex-col py-2`}>
                    {checkFilters.map((filter , i) => (
                        <div key={i}>
                            <input className="text-sm font-light " type="checkbox" name={filter} onChange={(e) => { if(e.target.checked) {addCheck(e.target.name)} else {removeCheck(e.target.name)} }} /> {filter}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CheckDropdown;
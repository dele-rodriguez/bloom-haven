import React, { useMemo, useRef, useState , useEffect } from 'react';
import { shopData , occasions , types , colors } from '../data';
import CheckDropdown from '../Components/CheckDropdown';
import UseMediaQuery from '../hooks/useMediaQuery';
import { Link } from 'react-router-dom';

function Shop() {
    const {w} = UseMediaQuery();
    const [collaspe , setCollaspe] = useState(true);
    const [search , setSearch] = useState('');
    const [searchFocus , setSearchFocus] = useState(false);
    const [check , setCheck] = useState([]);

    useEffect(() => {
        if (w > 768 ) {
            setCollaspe(false);
        } else {
            setCollaspe(true);
        }
    } , [w])

    const filteredFlowers = useMemo(() => {
        return shopData.filter(item => {
            // Check if item is an object
            if (item && typeof item === 'object') {
                // Assuming 'name' is the property you want to filter on
                const itemName = (item.flower || '').toLowerCase();
                const itemOcassion = (item.ocassion || '').toLowerCase();
                const itemType = (item.Type || '').toLowerCase();
                const itemColor = (item.color || '').toLowerCase();
                if (search) {
                    return itemName.includes(search.toLowerCase());
                } else if (check && check.length > 0) {
                    return check.some(check => itemOcassion.includes(check.toLowerCase())) || check.some(check => itemType.includes(check.toLowerCase())) || check.some(check => itemColor.includes(check.toLowerCase()))
                } else {
                    return shopData;
                }
            }
            return false; // Skip if item is not an object
        });
    }, [shopData, search , check]);
    

    return (
        <>
            <section className="shop relative flex flex-col md:flex-row py-10 md:py-20 md:mt-5 px-4">
                <div className='filters flex flex-col mb-5 md:w-[25%] lg:w-[20%]'>
                    <div className='flex flex-row items-center justify-between'>
                        <h4
                            onClick={() => {
                                setCollaspe((prevActiveState) => !prevActiveState);
                            }}
                            className='font-josefin items-center text-md font-medium flex'>
                                <img className='h-[15px] w-[15px] mb-1 mr-3' src="Shop/Filter.png" alt="filter-icon" /> 
                            FILTERS
                        </h4>
                        <div className="relative md:absolute md:right-6 md:top-2 flex items-center">
                            <input
                                type="text" 
                                value={search} 
                                onChange={e => setSearch(e.target.value)}
                                onFocus={() => setSearchFocus(true)} 
                                onBlur={() => setSearchFocus(false)}
                                placeholder={searchFocus ? 'search' : '     search'}
                                className='focus:outline-deeppink  border-2 border-#00000099 text-#00000099 p-2'
                            />
                            <svg className={`${searchFocus ? 'hidden' : 'absolute'} ml-2`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 6.9999C11.5 7.59085 11.3836 8.17601 11.1575 8.72197C10.9313 9.26794 10.5999 9.76401 10.182 10.1819C9.76414 10.5997 9.26806 10.9312 8.7221 11.1574C8.17613 11.3835 7.59097 11.4999 7.00002 11.4999C6.40907 11.4999 5.82391 11.3835 5.27794 11.1574C4.73198 10.9312 4.2359 10.5997 3.81804 10.1819C3.40018 9.76401 3.06871 9.26794 2.84256 8.72197C2.61642 8.17601 2.50002 7.59085 2.50002 6.9999C2.50002 5.80642 2.97413 4.66183 3.81804 3.81792C4.66195 2.974 5.80655 2.4999 7.00002 2.4999C8.19349 2.4999 9.33809 2.974 10.182 3.81792C11.0259 4.66183 11.5 5.80642 11.5 6.9999ZM10.68 11.7399C9.4744 12.6759 7.95739 13.1172 6.43782 12.974C4.91825 12.8309 3.51036 12.114 2.50077 10.9693C1.49117 9.82461 0.95577 8.3382 1.00355 6.81265C1.05134 5.2871 1.67872 3.83711 2.75797 2.75785C3.83723 1.6786 5.28722 1.05122 6.81277 1.00343C8.33832 0.955648 9.82473 1.49105 10.9694 2.50065C12.1141 3.51024 12.831 4.91813 12.9742 6.4377C13.1173 7.95726 12.676 9.47428 11.74 10.6799L14.78 13.7199C14.8537 13.7886 14.9128 13.8714 14.9538 13.9634C14.9948 14.0554 15.0168 14.1547 15.0186 14.2554C15.0204 14.3561 15.0019 14.4561 14.9641 14.5495C14.9264 14.6429 14.8703 14.7277 14.7991 14.7989C14.7278 14.8702 14.643 14.9263 14.5496 14.964C14.4562 15.0017 14.3562 15.0203 14.2555 15.0185C14.1548 15.0167 14.0555 14.9947 13.9635 14.9537C13.8715 14.9127 13.7887 14.8536 13.72 14.7799L10.68 11.7399Z" fill="#00000099"/>
                            </svg>
                        </div>
                    </div>
                    <div className={`${collaspe ? 'hidden' : '' }`}>
                        <CheckDropdown
                            checkFilters = {occasions}
                            check = {check}
                            setCheck = {setCheck}
                            dropdown = "Occassions"
                        />
                        <CheckDropdown
                            checkFilters = {types}
                            check = {check}
                            setCheck = {setCheck}
                            dropdown = "Types"
                        />
                        <CheckDropdown
                            checkFilters = {colors}
                            check = {check}
                            setCheck = {setCheck}
                            dropdown = "Colors"
                        />
                    </div>
                </div>
                <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center md:w-[75%] lg-[80%] h-fit'>
                    {filteredFlowers.length === 0 ?
                        (<p className='w-[80%] col-span-4 font-frank'>The folwer you are searching for is unavailable. Davido don buy am😂😂😂</p>) 
                        : 
                        (filteredFlowers.map((shop) => (
                            <Link
                                to={`/shop/${shop.flower}`}
                                className='w-[170px] bg-lightpink flex flex-col justify-between items-center font-frank py-2 px-2'
                                key={shop.id}
                            >
                                <img className='w-[154px] h-[154px]' src={shop.img} alt="image" />
                                <div
                                    className='text-md font-normal'
                                >{shop.flower}</div>
                                <h3 
                                    className='text-sm font-medium'
                                >{shop.price}</h3>
                            </Link>
                        )))
                    }
                </div>
           </section>
        </>
    )
}

export default Shop
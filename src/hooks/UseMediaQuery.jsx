import { useEffect, useState } from "react"

function UseMediaQuery() {

    const [w , SetW] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize' , () => {
            SetW(window.innerWidth);
        })
    } , []);


    return {w}
}

export default UseMediaQuery
import { useEffect } from "react";

const Effect = () => {

    const clicked = () => console.log('window clicked')

    useEffect(() => {
        window.addEventListener('click', clicked)

        return () => {
            window.removeEventListener('click', clicked)
        }
    },[])

    return(
        <>
        <p>This is use of useEffect!!</p>
        </>
    );
}

export default Effect;
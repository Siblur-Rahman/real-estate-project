
import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setEstates(data))
    }, [])
    return (
        <div className="lg:grid grid-cols-2 gap-4">
            {
                estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
        </div>
    );
};

export default Estates;
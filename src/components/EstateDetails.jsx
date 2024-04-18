import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const estate = estates.find(estate => estate.id == id);
    const {image, estate_title, segment_name, description, price, status, area, location, facilities} = estate;
    
    return (
        <div className="hero h-[600px] bg-base-200 rounded-2xl my-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse flex-grow">
            <div className="lg:px-10">
                <h2 className="card-title">{estate_title}</h2>
                <h2 className="card-title">{segment_name}</h2>
                 <div className=" mt-5 flex gap-2">
                            <div className="text-3xl">facilities:</div> { facilities.map((facilitie, inx) => <span key={inx} className="text-success py-1 px-4 rounded-xl text-xl bg-lime-100">{facilitie}</span> )}
                 </div>
                <hr className="mt-5 border-2"/>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
                <p>Area{area}</p>
                <p>Location: {location}</p>
                <p>Description: {description}</p>
            </div> 
            <img src={image} className="max-w-sm rounded-lg h-[500px]" />
        </div>
    </div>
    );
};

export default EstateDetails;
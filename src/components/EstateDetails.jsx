import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const estate = estates.find(estate => estate.id == id);
    const {image, estate_title, segment_name, description, price, Status, Area, location, facilities} = estate;
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
{/*
                <div className="mt-5">{category}</div>


                <hr className="mt-5 border-2"/>
                <p className="mt-5">{review}</p>
                <div className='flex gap-2 items-center text-lg mt-5'>
                            <div>
                                Tag
                            </div>
                            <div>{
                                tags.map((tag, inx) => <span key={inx} className="text-success py-1 px-2 bg-lime-50 rounded-xl ml-4">#{tag}</span> )
                            }</div>
                    </div>
                    <hr className="mt-5 border-2"/>
                <table className="mt-5">
                    <tr>
                        <td>Number of Page: </td>
                        <td>{totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td>{publisher}</td>
                    </tr>
                    <tr>
                        <td>Your of Publishing</td>
                        <td>{yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{rating}</td>
                    </tr>
                </table>
                <div className="mt-8 gap-4 flex">
                    <button className="btn btn-success btn-outline px-4 py-2" onClick={handleReadList}>Read</button>
                    <button className="btn btn-accent btn-outline px-4 py-2" onClick={handleWishList}>Wishlist</button>
            </div>*/}
            </div> 
            <img src={image} className="max-w-sm rounded-lg h-[500px]" />
        </div>
    </div>
    );
};

export default EstateDetails;
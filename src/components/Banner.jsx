import { useEffect, useState } from "react";
import Slider from "./Slider";

const Banner = () => {
  const [estates, setEstates] = useState([])
  useEffect(() =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data =>setEstates(data))
  }, [])
  return (
         <div className="flex justify-center h-96">
              <div className="w-[500px] carousel rounded-box">
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                                        {
                                            estates.map(estate => <Slider key={estate.id} estate={estate}></Slider>)
                                        }
                    </div>
                </div>
           </div>
        
  );
};

export default Banner;
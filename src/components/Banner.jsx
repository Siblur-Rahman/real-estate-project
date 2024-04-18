import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  const [estates, setEstates] = useState([])
  useEffect(() =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data =>setEstates(data))
  }, [])
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
                                        {
                                            estates.map(estate => <SwiperSlide key={estate.id}><img src={estate.image} className="rounded-box w-full" /></SwiperSlide>)
                                        }
  </Swiper>
        
  );
};

export default Banner;
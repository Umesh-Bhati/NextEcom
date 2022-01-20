import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Parallax,Zoom } from 'swiper';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'




export default function HeroSlider() {

    const featuredProducts = [
        "https://cdn.shopify.com/s/files/1/0105/8881/5418/files/Lehenga_set_3_d3ea6799-23b5-4ea3-b981-e39641efd2b0.jpg?v=1642231506",
        "https://cdn.shopify.com/s/files/1/0105/8881/5418/files/New_arrivals_3.jpg?v=1642231444",
        "https://cdn.shopify.com/s/files/1/0105/8881/5418/files/Sarees_d4fb63ad-00bd-410a-83af-09ad13cb280e.jpg?v=1642229402",
      ];


  

    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, Zoom]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay:3000,
        disableOnInteraction:false,

      }}
      parallax={{
        enabled :true,
      }}
      zoom
     
    >
      
      {featuredProducts.map((img, i) => {
        return (
          <SwiperSlide  key={i}>
            <Image height={700} width={1700}  src={img} alt="this is an swiper img" />
          </SwiperSlide>
        );
      })}
    </Swiper>)
}
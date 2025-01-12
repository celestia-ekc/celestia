import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import event_image1 from "../assets/images/event1.png";
import event_image2 from "../assets/images/event2.png";
import event_image3 from "../assets/images/event3.png";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";


const events = [
  { src: event_image1, description: "Logo desgin competition" , "date": "2/10/24"},
  { src: event_image2, description: "Two days workshop on Al and ML" , "date": "26/09/24 and 27/09/24" },
  { src: event_image3, description: "Logo desgin competition winner" , "date": "7/10/24"},
];
const Carousel = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="events-container w-full">
      <div className="events-head text-center">
        <h1 className="font-bold text-center text-4xl md:text-5xl">
          Recent <span className="text-[#F15E22]">Events</span>
        </h1>
      </div>
      <div className="events-body mt-12 relative w-full flex justify-center items-center z-0">
        <div className="absolute inset-0 flex z-30 space-x-4 justify-between md:justify-around">
          <button onClick={handlePrevClick}>
            <ArrowLeft size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
          </button>
          <button onClick={handleNextClick}>
            <ArrowRight size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
          </button>
        </div>
        {/* slides */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          loop={false}
          slidesPerView={3}
          speed={800}
          spaceBetween={40}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
            scale: 0.7,
          }}
          pagination={{clickable: true}}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper_container rounded-lg"
        >
          {events.map((items, index) => (
            <SwiperSlide key={index}>
              <img  src={items.src} alt={`slide_image_${index}`} />
              <div className=" relative -top-20">
                  <div className="description bg-gradient-to-r from-[#0E1320] to-[#425B72]  opacity-80 rounded-lg flex flex-col justify-center items-center px-5 py-2">
                  <p className="font-bold text-sm md:text-[15px] lg:text-lg">{items.description}</p>
                  <p className="from-transparent spaci">{items.date}</p>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { FaInstagram } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

const RecentEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://celestia-api.vercel.app/events?q=recentevent")
      .then((response) => response.json())
      .then((data) => {
        const fetchedEvents = data.map((event) => ({
          src: event.image,
          description: event.title,
          date: event.event_date,
          time: event.event_time,
          instagramUrl: event.insta_url?.startsWith('http') 
            ? event.insta_url 
            : `https://www.instagram.com/${event.insta_url}`
        }));
        setEvents(fetchedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
        setLoading(false);
      });
  }, []);

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
    <div className="carousel w-full px-4 md:px-0">
      <div className="events-head text-center">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          Recent <span className="text-[#F15E22]">Events</span>
        </h1>
      </div>
      <div className="events-body mt-8 md:mt-12 relative w-full flex justify-center items-center z-0">
        {loading ? (
          <ClipLoader size={50} color={"#F15E22"} loading={loading} />
        ) : (
          <>
            <div className="absolute inset-0 flex z-10 space-x-4 justify-between px-2 md:px-0 md:justify-around">
              <button onClick={handlePrevClick}>
                <ArrowLeft size={24} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
              </button>
              <button onClick={handleNextClick}>
                <ArrowRight size={24} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              grabCursor={true}
              centeredSlides={true}
              initialSlide={1}
              loop={true}
              slidesPerView={1}
              speed={800}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{clickable: true}}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="swiper_container rounded-md"
            >
              {events.map((items, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-fit">
                    <div className="aspect-square overflow-hidden rounded-[1rem] md:rounded-[2rem]">
                      <img 
                        src={items.src} 
                        alt={`slide_image_${index}`} 
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: "fill",
                        }}
                        className="rounded-[1rem] md:rounded-[2rem]"
                      />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 rounded-b-[1rem] md:rounded-b-[2rem] overflow-hidden z-20">
                      <div className="description w-full bg-gradient-to-r from-[#0E1320] to-[#425B72] opacity-80 flex flex-col justify-between px-3 md:px-5 py-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-xs md:text-sm lg:text-lg">{items.description}</p>
                            <div className="text-xs md:text-sm">
                              <span>{items.date}</span>
                              {items.time && <span> • {items.time}</span>}
                            </div>
                          </div>
                          <a href={items.instagramUrl} target="_blank" rel="noopener noreferrer" className="z-30">
                            <FaInstagram className="text-white text-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentEvents;
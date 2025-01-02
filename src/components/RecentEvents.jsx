import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { FaInstagram } from "react-icons/fa";

const RecentEvents = () => {
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    // Fetching the events data from the API
    fetch("https://celestia-api.vercel.app/events?q=recentevent")
      .then((response) => response.json())
      .then((data) => {
        // Mapping the API response to match the required format
        const fetchedEvents = data.map((event) => ({
          src: event.image,
          description: event.title,
          date: `${event.event_date} - ${event.event_time}`,
          instagramUrl: event.insta_url,
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
      });
  }, []);

  return (
    <div className="events-container w-full">
      <div className="events-head text-center">
        <h1 className="font-bold text-center text-4xl md:text-5xl">
          Recent <span className="text-[#F15E22]">Events</span>
        </h1>
      </div>
      <div className="events-body mt-12 relative w-full">
        <div className="absolute inset-0 flex z-10 space-x-4 justify-between md:justify-around">
          <button onClick={handlePrevClick}>
            <ArrowLeft size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]" />
          </button>
          <button onClick={handleNextClick}>
            <ArrowRight size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]" />
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
          spaceBetween={20}
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
            scale: 0.6,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="swiper_container rounded-lg"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="w-80 h-64 rounded-2xl overflow-hidden relative shadow-lg transform transition-transform duration-300 hover:scale-105">
                {/* The image now uses a fixed size for the card */}
                <img 
                  src={event.src} 
                  alt={`slide_image_${index}`} 
                  className="w-full h-full object-cover" // Ensures the image covers the card area without distortion
                />
                {/* Bottom left caption with title, date, time */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <div className="font-bold">{event.description}</div>
                  <div className="text-sm">{event.date}</div>
                </div>
                {/* Instagram icon bottom right */}
                {event.instagramUrl && (
                  <a
                    href={event.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 text-white text-lg"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentEvents;

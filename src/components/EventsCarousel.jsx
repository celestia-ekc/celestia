import  { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EventCard = ({ title, date, time, imageUrl, instagramUrl }) => (
  <div className="w-fit  rounded-2xl overflow-hidden relative shadow-lg transform transition-transform duration-300 hover:scale-105 h-80">
    <img 
      src={imageUrl} 
      alt="Event"
      className="w-full h-full object-contain"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
      <div>
        <div className="font-bold">{title}</div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-lg" />
      </a>
    </div>
  </div>
);

const SkeletonCard = () => (
  <div className="w-80 h-64 rounded-2xl overflow-hidden relative shadow-lg">
    <Skeleton className="w-full h-full" />
  </div>
);

const EventsCarousel = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);

  useEffect(() => {
    fetch('https://celestia-api.vercel.app/events?q=upcomingevent')
      .then(response => response.json())
      .then(data => {
        setUpcomingEvents(data);
        setLoadingUpcoming(false);
      })
      .catch(error => {
        console.error('Error fetching upcoming events:', error);
        setLoadingUpcoming(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://celestia-api.vercel.app/events')
      .then(response => response.json())
      .then(data => {
        setAllEvents(data);
        setLoadingAll(false);
      })
      .catch(error => {
        console.error('Error fetching all events:', error);
        setLoadingAll(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="font-bold text-center text-4xl md:text-5xl mt-16">
        Upcoming <span className="text-[#F15E22]">Events</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {loadingUpcoming ? (
          Array(6).fill(0).map((_, index) => <SkeletonCard key={index} />)
        ) : upcomingEvents.length > 0 ? (
          upcomingEvents.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.event_date}
              time={event.event_time}
              imageUrl={event.image}
              instagramUrl={event.insta_url}
            />
          ))
        ) : (
          <div className="text-center col-span-full">No Upcoming Events</div>
        )}
      </div>
      <h1 className="font-bold text-center text-4xl md:text-5xl mt-16">
        All <span className="text-[#F15E22]">Events</span>
      </h1>
      <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
        {loadingAll ? (
          Array(6).fill(0).map((_, index) => <SkeletonCard key={index} />)
        ) : allEvents.length > 0 ? (
          allEvents.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.event_date}
              time={event.event_time}
              imageUrl={event.image}
              instagramUrl={event.insta_url}
            />
          ))
        ) : (
          <div className="text-center col-span-full">No Events Available</div>
        )}
      </div>
    </div>
  );
};

export default EventsCarousel;

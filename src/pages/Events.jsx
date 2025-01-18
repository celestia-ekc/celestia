import Navbar from "../components/Navbar";
import EventsCarousel from "../components/EventsCarousel";
import RecentEvents from "../components/RecentEvents";
import Footer from "../components/Footer";
const Event = () => {
  return (
    <div className="events-page">
      <div className="min-h-screen w-screen flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full mt-20 md:mt-24">
          <RecentEvents />
        </div>
        <div className="w-full mt-10 md:mt-16">
          <EventsCarousel />
        </div>
        <div className="footer w-full flex justify-around items-center py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
          <Footer />
        </div>
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </div>
  );
};

export default Event;
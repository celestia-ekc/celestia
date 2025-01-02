import Navbar from "../components/Navbar";
import EventsCarousel from "../components/EventsCarousel";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
const Event = () => {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col space-y-10 justify-center items-center">
        <Navbar />
        <div className="pt-24 w-full"> {/* Add padding to the top */}
          <Carousel />
        </div>
        <EventsCarousel />
        <div className="footer w-full flex justify-around items-center relative top-[-20px] md:top-0 py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
                    <Footer />
                </div>
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>

    </>
  );
};

export default Event;
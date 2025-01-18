
import Navbar from "../components/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import rocket_lanuch from "../assets/images/rocket.svg";
import RecentEvents from "../components/RecentEvents.jsx";
import mission_content from "../assets/mission-content.svg"
import mission_mobile from "../assets/images/mission.svg"
import Vision from "../components/Vision.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Community from "../components/Community.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-scroll";


const Home = () => {

  return (
    <>
      <div className="flex justify-center" id="home">
        <div className="home-head space-y-20 w-[90%] md:w-[70%]  lg:h-screen">
          {/* <div className="home-navbar"><Navbar/></div> */}
          <Navbar />
          <div className="herosection grid grid-cols-1 grid-rows-2  lg:flex justify-between items-center relative top-4 lg:top-28">
            <div className="welcome-text h-ful  flex-col ">
              <section className='welcome-head text-6xl md:text-7xl'>
                Innovate. <span className="text-[#F15E22]">Code</span>. <br></br>
                Elevate
              </section>
              <section className="welcome-words text-xl md:text-2xl font-semibold font-sans">
                <br />
                Welcome to <span className="font-bold">Celestia</span>,<br />
                where computer science students<br />
                collaborate, <span className="font-bold">innovate</span>, and <span className="font-bold">create</span> solutions <br className="hidden lg:block" />
                that shape the future of technology
              </section>
              <Link to="events" spy={true} smooth={true} offset={-100} duration={500} >
                <button className="flex justify-around items-center bg-black w-60 md:w-72 p-2 my-14 md:my-8 rounded-xl shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
                  <img src={rocket_lanuch} alt="" className="w-10 h-10" />
                  <p className="text-xl md:text-2xl">Explore Events</p>
                </button>
              </Link>
            </div>
            <div className="celestia-logo md:flex justify-center items-center md:relative md:top-14 md:mb-10 lg:top-0 lg:block">
              <img className="celestia-logo-home object-fill relative bottom-10 w-fit" src={celestia_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" id="events">
        <div className=" w-[80%]">
          {/* events */}
          <RecentEvents />
        </div>
      </div>


      <div className="what-is-celestia" id="about">
        <div className="what-head flex justify-center  my-10 font-bold text-4xl md:text-7xl">
          What Is Celestia
        </div>
        <div className="what-logo flex justify-center m-10">
          <img className="celestia-logo-home object-fill w-[250px] " src={celestia_logo} alt="" />
        </div>
        <div className="what-text text-center  flex justify-center text-md md:text-xl font-semibold">
          <div className="w-[1000px] px-5">
            <p className="mb-10">Celestia is an association we, the CSE department of Eranad Knowledge City Technical Campus created to push the boundaries of what we can achieve in Computer Science and Engineering</p>
            <p className="mb-8 lg:mb-20">Its vision is to ensure that students can explore and master the field, gain the skills for high-end jobs before they graduate, and stay connected to the community even after graduation.</p>
          </div>

        </div>
      </div>
      {/* vision */}
      <div className="vision">
        <Vision />
      </div>
      {/* mission */}
      <div className="mission">
        <div className="mission-head flex justify-center text-5xl  mb-10 mt-24 md:mt-16 lg:mt-24 font-bold">
          Our Mission
        </div>
        <div className="mission-content hidden md:flex justify-center ">
          <img className="celestia-logo-home object-fill " src={mission_content} alt="" />
        </div>
        <div className="mission-content flex justify-center md:hidden">
          <img className="celestia-logo-home object-fill " src={mission_mobile} alt="" />
        </div>
      </div>
      {/* Testimonials */}
      <div className="testimonials mt-24 md:mt-10">
        <Testimonials />
      </div>
      {/* community  */}
      <div className="community">
        <Community />
      </div>
      <div className="footer w-full flex justify-around items-center relative top-[-20px] md:top-0 py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer />
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </>
  );
};

export default Home;
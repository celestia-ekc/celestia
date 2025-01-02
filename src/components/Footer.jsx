import { Instagram, Linkedin, Mail, Phone, Twitter } from "react-feather";
import Footerlogo from "../assets/images/footerlogo.svg";
import { NavLink } from "react-router-dom";


const userful = [
    { "title": "Home", "href": "/" },
    { "title": "About", "href": "/about" },
    { "title": "Events", "href": "/events" },
    { "title": "Team", "href": "/team" },
    { "title": "Contact", "href": "/contact" },
    { "title": "Gallery", "href": "/gallery" },
]
const Footer = () => {
    return (
        <>

            {/* logo */}
            <div className="hidden md:block"> 
                <img src={Footerlogo} alt="footer" />
            </div>
            {/* content */}
            <div className="flex justify-between space-x-10 md:space-x-20">
                {/* useful links */}
                <div className="hidden md:block">
                    <h1 className="font-semibold text-2xl text-center pb-5">Useful links</h1>
                    <div className="border-l-4  border-white px-10 space-y-3">
                        {
                            userful.map((item, index) => (
                                <div key={index} className="cursor-pointer">
                                    <NavLink  to={item.href}  className="text-orange-500 hover:text-orange-800">{item.title}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Get in touch */}
                <div>
                    <h1 className="font-semibold text-2xl text-start pb-5">Get in touch</h1>
                    <div className="border-l-4  border-white px-10 space-y-3">
                        <p className="text-[12px] md:text-sm space-y-3">
                            <span className="text-nowrap">Eranad Knowledge City Technical Campus, </span><br />
                            Cherukulam, Manjeri, Malappuram District, <br />
                            Kerala, Pin: 676122
                        </p>
                        
                        <div className="email flex space-x-4">
                          <Mail size={18} /> <p className="text-[15px] md:text-sm">celestia@ekc.edu.in</p>
                        </div>
                        <div className="phone flex space-x-4">
                           <Phone size={18} /> <p className="text-[15px] md:text-sm">+91 9074114876</p>
                        </div>
                        <p className="text-[15px] md:text-[18px] text-orange-500">Social media links</p>
                        <div className="social-media-icons flex space-x-10">
                            <a  href="https://www.instagram.com/_celesti_a/" target="_blank"><Instagram size={20}/> </a>
                            <a href="https://www.linkedin.com/company/celestia-ekctc"  target="_blank"><Linkedin size={20}/></a>
                            <a href="https://x.com/CelestiaEKCTC"  target="_blank"><Twitter size={20}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
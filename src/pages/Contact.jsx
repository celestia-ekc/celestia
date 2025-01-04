import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const response = await fetch("https://celestia-api.vercel.app/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setResult("Message Sent");
        setData({ name: "", email: "", message: "" }); 
      } else {
        toast.error("Failed to send message!");
        setResult("Error Sending Message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred!");
      setResult("Error Sending Message");
    }
  };

  return (
    <>
      <div className="flex justify-center" id="contact">
        <div className="home-head space-y-20 w-[90%] md:w-[70%] lg:h-screen">
          <Navbar />

          <h1 className="text-white text-center text-5xl font-bold relative top-2 md:top-7">
            Contact Us
          </h1>

          <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto px-5 text-gray-600 md:pt-8"
          >
            <div className="flex flex-wrap text-white">
              <div className="w-full md:w-1/2 text-left">
                Name
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={data.name}
                  onChange={onChangeHandler}
                />
              </div>

         
              <div className="w-full md:w-1/2 text-left md:pl-4">
                Email
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={data.email}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

        
            <div className="my-6 text-left text-white">
              Message
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                name="message"
                placeholder="Message"
                required
                value={data.message}
                onChange={onChangeHandler}
              />
            </div>

           
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-12 mb-10 rounded">
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer w-full flex justify-around items-center py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer />
      </div>
      <p className="py-3 text-center text-sm">
        Copyright @{new Date().getFullYear()} Celestia
      </p>
    </>
  );
};

export default Contact;

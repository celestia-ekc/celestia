import { Rings } from "react-loader-spinner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://celestia-api.vercel.app/gallery/");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        setError(false);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
        setError(true);
      }finally{
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="flex justify-center" id="gallery">
        <div className="home-head space-y-20 w-[90%] md:w-[70%]">
          <Navbar />
          <div>
            <h1 className="text-white text-center font-bold mb-14 text-5xl py-6">Gallery</h1>
            {error ? (
              <div className="flex justify-center items-center h-[300px]">
                <p className="text-white text-3xl font-bold">Images Not Found</p>
              </div>
            ) : loading ? (
              <div className="flex justify-center items-center min-h-72">
                <Rings color="#F15E22"/>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-4 md:px-10 mb-10">
                {images.map((item, index) => (
                  <div key={index} className="relative hover:scale-105 transition-transform">
                    <img
                      src={item.image}
                      alt="gallery image"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer w-full flex justify-around items-center py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer />
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </>
  );
};

export default Gallery;

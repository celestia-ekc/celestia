import { motion } from "framer-motion";

const IMAGES = {
  background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-qncw5URClNhnWoY0gVRj2UzZFQlqCg.svg",
  planets: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planets%20mini-rhjYj9lavmLHS6Eftcs7A8WrvCtFHa.svg",
  spaceman: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spaceman%20behind-Mc4LDC7hjWBk7NevssjfhSec36s5Oy.svg",
  text404: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/404%20text%20big-220WUTZFUIyCiqH7YfM4hxCxTU3NLA.svg"
};

export default function NotFound() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background with stars */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={IMAGES.background}
          alt="Space background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Floating planets */}
      <motion.div
        className="absolute w-full h-full flex justify-center items-center"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <img
          src={IMAGES.planets}
          alt="Decorative planets"
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] opacity-50"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-4 justify-center min-h-screen">
        <div className="relative flex justify-center items-center">
          {/* 404 Text */}
          <div className="relative">
            <img
              src={IMAGES.text404}
              alt="404"
              className="relative z-10 w-[300px] h-[150px]"
            />
            {/* Astronaut */}
            <motion.div
              className="absolute top-[-50px] left-1/2 transform -translate-x-1/2"
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={IMAGES.spaceman}
                alt="Astronaut"
                className="relative z-20 w-[120px] h-[120px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Text and button */}
        <h2 className="text-white text-xl font-medium mt-8">
          PAGE NOT FOUND
        </h2>
        <a
          href="/"
          className="px-6 py-2 bg-transparent border border-white/20 text-white rounded-full
                     hover:bg-white/10 transition-colors duration-200 text-sm"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
}

import tvImg from "../assets/tv.png";
import headsetImg from "../assets/headset.png";
import laptopImg from "../assets/laptop.png";
import mobileImg from "../assets/mobile.png";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="grid gap-5 *:p-5 *:overflow-hidden *:rounded-4xl lg:grid-cols-6">
      <motion.div
      initial={{opacity: 0, scale: 0.7}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}}
      className="col-span-4 group max-md:flex-col flex-row flex md:items-center transition-all duration-300 hover:-translate-y-2 shadow-transparent shadow-md hover:shadow-main-light justify-between bg-gradient-to-l from-[#177BA8] to-[#242A31]">
        <div className="space-y-2 text-white uppercase ">
          <h1 className="text-4xl font-bold">Offers Up to 20%</h1>
          <p className="capitalize text-lg">
            Enjoy up to 20% off on a wide selection of TVs! Don't miss out on
            this limited-time offer!
          </p>
        </div>
        <img
          src={tvImg}
          alt="Tv"
          className="max-md:mx-auto max-h-62 md:max-h-64 scale-95 rotate-[10deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 "
        />
      </motion.div>
      <motion.div
      initial={{opacity: 0, scale: 0.7}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}}
      className="col-span-2 hidden group lg:flex items-center transition-all duration-300 hover:-translate-y-2 shadow-transparent shadow-md hover:shadow-main-light justify-between bg-gradient-to-br from-[#501B57]/80 to-[#242A31]">
        <h2 className="text-white uppercase text-4xl font-bold">
          Offers Up to 20%
        </h2>
        <img
          src={mobileImg}
          alt="Mobile"
          className="max-h-48 scale-95 rotate-[10deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 "
        />
      </motion.div>
      <motion.div 
      initial={{opacity: 0, scale: 0.7}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}}
      className="col-span-3 group hidden lg:flex items-center transition-all duration-300 hover:-translate-y-2 shadow-transparent shadow-md hover:shadow-main-light justify-between bg-gradient-to-br from-[#660401]/80 to-[#19212B]">
        <h2 className="text-white uppercase text-4xl font-bold">
          Offers Up to 20%
        </h2>
        <img
          src={laptopImg}
          alt="Laptop"
          className="max-h-48 scale-95 rotate-[10deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 "
        />
      </motion.div>
      <motion.div  
      initial={{opacity: 0, scale: 0.7}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}} className="col-span-3 group hidden lg:flex items-center transition-all duration-300 hover:-translate-y-2 shadow-transparent shadow-md hover:shadow-main-light justify-between bg-gradient-to-br from-[#242220] to-[#27BEDD]">
        <h2 className="text-white uppercase text-4xl font-bold">
          Offers Up to 20%
        </h2>
        <img
          src={headsetImg}
          alt="Headset"
          className="max-h-48 scale-95 rotate-[10deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 "
        />
      </motion.div>
    </section>
  );
};

export default Hero;

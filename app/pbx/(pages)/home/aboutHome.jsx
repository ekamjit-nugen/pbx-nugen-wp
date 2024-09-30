import React from "react";
import AboutBanner from "../../assets/telecom.webp";
import { motion } from "framer-motion";
import ArrowBaseTwo from "../../assets/arrow-base-two.png";

const AboutHome = () => {
  return (
    <div className="container md:mx-auto px-2 ">
      <div className="lg:grid grid-cols-2 inline-flex flex-col-reverse  items-center ">
        <div className="sm:mx-10 mx-2 img-fluid">
          <img src={AboutBanner} alt="about" className="w-full"></img>
        </div>
        <div className="sm:mx-10 mx-2">
          <p className="lg:text-3xl  md:text-[26px] text-[22px] sm:my-7 my-3 font-bold capitalize">
            Top-Notch telecommunication equipment installation Services in World
          </p>
          <p className="lg:text-[22px] text-lg sm:my-5  my-3 text-slate-500">
            Donec interdum metus et hendrerit aliquet dolor diam satis ligula
            eget egestas libero turpis velmi Nunc nulla
          </p>
          <p className="lg:text-[18px] text-l text-slate-500">
            Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus
            iscing. Pellentesque egestas neque sit amet convallis pulvinar justo
            nullaleifend augue ac auctor orci leo non est. Quisque id mi. Ut
            tincidunt tinciduntrat. Etiam feugiat lorem non metus. Vestibulum
            dapibus
          </p>
          <div className="py-10">
            <div className="relative inline-block">
              <button className="bg-[#ff366b] text-white font-normal py-[15px] px-[40px] border-none  rounded-[15px] buttonAnim before:border-[#ff366b]">
                contact us
              </button>
              <motion.div
                className="absolute bottom-[-20px] right-[-120px]"
                initial={{ y: 0 }}
                animate={{ y: 20 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}>
                <img src={ArrowBaseTwo} alt="button arrow base" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;

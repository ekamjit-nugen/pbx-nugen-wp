import React from "react";
import BannerLogo from "../../assets/banner-new.jpg";
import BannerTower from "../../assets/banner-tower.png";
import ButtonArrowImg from "../../assets/button-arrow-base.png";
import { motion } from "framer-motion";
import BannerArrow from "../../assets/banner-arrow.png";
import BannerQuestion from "../../assets/banner-message-2.png";
import BannerMessage from "../../assets/banner-message-3.png";
import BannerTriangle from "../../assets/banner-vector.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner px-3 md:px-12  relative z-0 max-sm:pt-6">
      <motion.div
        className="absolute top-[35%] left-[11%]"
        initial={{ x: [-110, 110], y: [0, 120] }}
        animate={{ x: [110, -110], y: [120, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}>
        <img src={BannerTriangle} alt="BannerTriangle" />
      </motion.div>
      <div className=" relative z-50 container mx-auto md:pt-10 md:pb-20">
        <div className="grid  xl:grid-cols-3 lg:grid-cols-2 xl:16 lg:gap-12 gap-8 items-center lg:justify-items-normal  max-lg:justify-items-center ">
          <div className="xl:col-span-2">
            <div className="">
              <h1 className="font-bold xl:text-5xl lg:text-3xl  sm:text-2xl text-xl  font-serif text-white capitalize">
                WIRELESS AND WIRELINE  <br/> TELECOM SERVICES
              </h1>
              <p className=" lg:text-[22px] sm:text-[18px] text-[14px] font-normal text-white md:max-w-[470px] py-4 capitalize">
                Elevate Your Telecom Infrastructure with Our Turnkey Expertise
              </p>
            </div>
            <div className="relative inline-block">
              <Link to="/contact">
                {" "}
                <button className="bg-[#ff366b] text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px] h-full w-full border-none  rounded-[15px] buttonAnim before:border-[#ff366b]">
                  Contact Us
                </button>
              </Link>
              <motion.div
                className="absolute top-0 right-[-75px]"
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}>
                <img src={ButtonArrowImg} alt="button arrow base" />
              </motion.div>
            </div>
          </div>
          <div className="pt-4 relative ">
            <div className=" min-[770px]:h-[40em] md:h-[30em] w-full float-left ">
              <img
                src={BannerLogo}
                className="min-[770px]:h-[70%] md:h-[30em] md:px-0 md:py-0 px-8 py-8  w-[auto] md:rounded-tl-[230px] md:rounded-tr-[90px] md:rounded-br-[230px] rounded-bl-[40px]  rounded-tl-[130px] rounded-tr-[55px] rounded-br-[130px]"
                alt="CallgirlLogo"
              />
            </div>

            {/*    <motion.img
              src={BannerTower}
              alt="BannerTower"
              className="absolute h-[200px] top-[220px] right-[10px] z-10"
              initial={{ y: 0 }}
              animate={{ y: 20 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />  */}
            <motion.img
              src={BannerArrow}
              alt="BannerArrow"
              className="absolute h-[100px] top-[60px] -right-[0px]"
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <ul>
              <motion.li
                className="absolute w-[22%] top-[6%]"
                initial={{ x: -20 }}
                animate={{ x: 30 }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}>
                <img
                  src={BannerQuestion}
                  className="md:h-[80px] h-40px"
                  alt="BannerQuestion"
                />
              </motion.li>
              {/*    <motion.li
                className="absolute w-[25%] top-[18%]"
                initial={{ y: 0 }}
                animate={{ y: 30 }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src={BannerMessage} alt="BannerMessage" />
              </motion.li>  */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

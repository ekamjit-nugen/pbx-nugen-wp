import React from "react";
import AboutBanner from "../../assets/telecom-1.jpg";
import { motion } from "framer-motion";

import ButtonArrowImg from "../../assets/button-arrow-base.png";


const AboutCompanyBottom = ({heading}) => {
  return (
    <div className={`container md:mx-auto mb-[60px] px-2 ${heading ? "pt-10" : ""} `}>
      <div className="lg:grid grid-cols-2 inline-flex flex-col-reverse justify-between items-center ">
        <div className="sm:mx-8 mx-2 img-fluid">
          <img
            src={AboutBanner}
            className=" lg:w-[auto] w-[100%] md:h-[320px] "
            alt="about"></img>
        </div>
        <div className="sm:mx-8 mx-2">
          <h1 className="xl:text-[35px] lg:text-3xl  md:text-[26px] text-[22px] font-bold max-[770px]:text-center font-serif">
            Join The PBX Family
          </h1>
          {/* <p className="lg:text-[18px] text-l text-slate-500 ">
          Are you a team player who is always striving to learn more and be better? Here at PBX Technologies we offer competitive salaries, unrivaled learning opportunities, and excellent benefits. If you want interships or training in IT then we have a team of qualified and an experienced developers. We provide trainings in frontend, backend, designing, mean stack, full stack and more.
          </p> */}
          <p className="xl:text-xl lg:text-lg text-lg  text-slate-500 sm:py-4 py-2 text-justify">
            If you have North American and / or International experience in
            Telecom Construction such as Construction Manager, Telecom
            Technician, Telecom Aerial Technician please share your resume.
          </p>
<div className="max-[1024px]:flex justify-center items-center sm:py-4 py-2">
            <div className="relative inline-block justify-center max-[1024px]:m-auto ">
                <a href="mailto:support@pbxtechnologies.com">
                <button className="bg-[#FF366B]  text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px] border-none rounded-[15px] buttonAnim before:border-[#ff366b]">
                  Send Now
                </button>
                </a>
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
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyBottom;

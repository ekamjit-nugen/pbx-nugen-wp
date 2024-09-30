import React, { useState } from "react";
import { motion } from "framer-motion";
import circle from "../../assets/shape-circle.png";
import square from "../../assets/shape-square.png";
import plus from "../../assets/shape-plus.png";
import tri from "../../assets/shape-triangle.png";
import { GrUserWorker } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { IoMdConstruct } from "react-icons/io";
import Worker from "../../assets/worker.png";
import Technology from "../../assets/technology.png";
import CellTower from "../../assets/cell-tower.png";
import iconF from "../../assets/icon-111.png";
import iconS from "../../assets/icon-4.jpg";
import iconT from "../../assets/telecom.webp";
import { HiOutlineArrowDown } from "react-icons/hi"

import ButtonArrowImg from "../../assets/button-arrow-base.png";

const Features = ({ heading }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className={`container mx-auto px-3 md:px-12 ${heading ? "" : "md:py-[60px] py-[30px]"}`}>
      <div
        className={`${
          heading ? "block" : "hidden"
        } text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px] font-serif font-bold text-center`}>
        Our Services
      </div>
      <div className="lg:block flex lg:flex-nowrap flex-wrap justify-center align-initial  text-center items-stretch py-4">
        <div className=" lg:h-[300px] bg-white md:w-[50%] w-full  shadow-[0px_4px_20px_5px_#00000024] hover:shadow-[0px_10px_20px_10px_#00000024] min-w-[280px] text-black rounded-[22px]   border-none md:mx-2 my-2   relative lg:flex lg:items-center lg:justify-center lg:gap-10 card lg:before:bg-[#ff366b] ">
          {/*          <motion.img
            className="absolute"
            src={circle}
            style={{
              position: "absolute",
              top: "-10%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            initial={{ y: 300 }}
            animate={{ x: 200, opacity: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={square}
            style={{
              position: "absolute",
              top: "40%",
              left: "20%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "50%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={tri}
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ y: "150%" }}
            initial={{ x: "-150%", y: "-150%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={plus}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "100%", y: "100%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          /> */}
          <div>
            <div className="py-5 flex justify-center relative px-2">
              {/*  <div className="origin-center rotate-45 h-[80px]  relative w-[80px] bg-[#FF366B] rounded-[20px] my-design before:border-2 before:border-[#FF366B] before:h-[5em] before:top-[0px] before:left-[5px] flex justify-center items-center">
              <img
                src={Worker}
                className="z-10 rotate-[315deg] absolute top-[20%] h-[50px]"
              />    </div>*/}
              <div className="">
                <img src={iconF} className="w-[250px] " />
              </div>
            </div>
          </div>

          <div className="py-5 mx-4 px-5 text-slate-500 text-base">
            <h2 className="font-semibold text-xl lg:whitespace-nowrap tracking-wider ">
              TECHNICAL
            </h2>
            <ul className="py-2 lg:text-start text-left tracking-wider custom-li-icon">
              <li>Fiber Installation, Splicing, Testing and Troubleshoot </li>
              <li> Complete Shelter/WIC work </li>
              <li> Baseband Installation and commissioning </li>
              <li> Microwave commissioning (Ericsson and Nokia) </li>
              <li>Electrical Services </li>
            </ul>
          </div>
        </div>

        <div className="lg:h-[300px] bg-white md:w-[50%] w-full  shadow-[0px_4px_20px_5px_#00000024] hover:shadow-[0px_10px_20px_10px_#00000024] min-w-[280px] text-black  rounded-[22px] border-none  my-2 md:mx-2 relative lg:flex lg:items-center lg:justify-center lg:gap-10 float-right lg:my-6 card lg:before:bg-[#F3D337]">
          {/*   <motion.img
            className="absolute"
            src={circle}
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            initial={{ y: 300 }}
            animate={{ x: 200, opacity: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={square}
            style={{
              position: "absolute",
              top: "40%",
              left: "20%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "50%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={tri}
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ y: "150%" }}
            initial={{ x: "-150%", y: "-150%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={plus}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "100%", y: "100%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          /> */}
          <div>
            <div className="py-5 flex justify-center relative px-2">
              {/*  <div className="origin-center rotate-45 h-[80px] w-[80px] bg-[#1A28F6] rounded-[20px]  my-design before:border-[#1A28F6] before:border-2 before:h-[5em] before:top-[0px] before:left-[5px] flex justify-center items-center ">
              <img
                src={CellTower}
                className="rotate-[315deg] z-10 absolute top-[20%]  h-[48px]"
              />
            </div> */}
              <div className="">
                <img src={iconS} className="w-[250px] " />
              </div>
            </div>
          </div>
          <div className="py-5 mx-4 px-5 text-slate-500 text-base">
            <h2 className="font-semibold text-xl lg:whitespace-nowrap tracking-wider">
              CIVIL
            </h2>
            <ul className="lg:text-start lg:decoration-black text-left lg:list-disc tracking-wider custom-li-icon py-2">
              <li>Cellular Radio and Antenna Installation</li>
              <li>Tower Reinforcing</li>
              <li> Emergency Maintenance</li>
              <li>New Site Construction and Fiber builds</li>
              <li>Microwave Link Installation and Alignment</li>
            </ul>
          </div>
        </div>

        <div className=" lg:h-[300px] bg-white md:w-[50%] w-full   min-w-[280px] text-black rounded-[22px]  border-none shadow-[0px_4px_20px_5px_#00000024] hover:shadow-[0px_10px_20px_10px_#00000024] md:mx-2 my-2 relative lg:flex lg:items-center lg:justify-center lg:gap-10 card lg:before:bg-[#1a28f6]">
          {/*   <motion.img
            className="absolute"
            src={circle}
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            initial={{ y: 300 }}
            animate={{ x: 200, opacity: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={square}
            style={{
              position: "absolute",
              top: "40%",
              left: "20%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "50%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={tri}
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ y: "150%" }}
            initial={{ x: "-150%", y: "-150%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.img
            className="absolute"
            src={plus}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
            animate={{ x: "100%", y: "100%" }}
            initial={{ x: "-100%", y: "-100%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          /> */}
          <div>
            <div className="py-5 flex justify-center relative px-2">
              {/*  <div className="origin-center rotate-45 h-[80px] w-[80px] bg-[#F3D337] rounded-[20px]  my-design before:border-[#F3D337] before:border-2 before:h-[5em] before:top-[0px] before:left-[5px] flex justify-center items-center">
              <img
                src={Technology}
                className="rotate-[315deg] z-10 absolute top-[20%] h-[48px]"
              />
            </div> */}
              <div className="">
                <img src={iconT} className="w-[250px]" />
              </div>
            </div>
          </div>
          <div className="py-5 mx-4 px-5 text-slate-500 text-base">
            <h2 className="font-semibold text-xl px-2 tracking-wider">
              DESIGN AND ENGINEERING
            </h2>
            <ul className="lg:text-start lg:decoration-black text-left  lg:list-disc tracking-wider custom-li-icon py-2">
              <li> Cell Site Construction</li>
              <li>Drone/Manual Tower Inspections </li>
              <li>Mapping & Analysis</li>
              <li>Network Design</li>
              <li>Project Management</li>
              <li>Comprehensive Testing</li>
            </ul>
          </div>
        </div>
      </div>
      {heading ? (
        <div className="flex align-middle justify-center">
          <div className="relative  ">
            <button
              className=" bg-[#FF366B] text-[16px] text-white font-normal  lg:px-[80px] sm:py-[15px] sm:px-[40px] py-[10px] px-[30px]  border-none   h-full  rounded-[15px] tracking-wide RedbuttonAnim "
              onMouseEnter={handleShow} onMouseLeave={handleShow}>
              More
            </button>
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
            {show ? 
              <div className="absolute bottom-[60px] lg:-left-[30px] sm:-left-[70px] -right-[70px] w-64 text-lg text-gray-500 transition-opacity duration-300 bg-white lg:opacity-50 opacity-80 border  rounded-lg shadow-sm  dark:text-gray-400  dark:bg-gray-800 text-center z-10">
                <div className="px-3 py-2 relative">
                  <p> This Panel Is Under Development </p>
                
                <div className=" absolute opacity-80  -bottom-[5px] left-[120px] right-[120px] border-collapse  rotate-180"><svg xmlns="http://www.w3.org/2000/svg" height={5} width={10} ><path d="m5.016 0-2.51 2.5L0 4.999 5.016 5l5.017-.001L7.525 2.5 5.016 0z"/></svg></div>
                </div>
              </div>:""}
           
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Features;

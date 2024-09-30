import React, { useRef } from "react";

import { ImBlogger } from "react-icons/im";
import { Blogdata } from "../../helpers";
import Lottie from "lottie-react";
import click from "./click.json";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [show, setShow] = useState(false);/* 
  const [overFlowing, setOverFlowing] = useState(false); */
  const cardRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, [2000]);
  }, [Projects]);



  //IMPORTANT COMMENTED CODE
/*   const handleRemove = () => {
    setOverFlowing(false);
  };
*/


  const handleMouse = (data) => {
    if (show !== false) {
      setShow(false);
    }
   /* const updatedData = [data.desc];
    const stringData = updatedData.toString();
    const wordsArray = stringData.split(/\s+/);
    const card = cardRef.current.clientHeight;

    if (card <= 290 && card > 260) {
      if (stringData.length <= 94) {
        return;
      } else {
        setOverFlowing(true);
      }
    } else if (card <= 260 && card > 220) {
      if (stringData.length <= 65) {
        return;
      } else {
        setOverFlowing(true);
      }
    } else if (card <= 220) {
      if (stringData.length <= 83) {
        return;
      } else {
        setOverFlowing(true);
      }
    }*/
  }; 

  return (
    <div className="container mx-auto md:py-[60px] py-[40px] px-3 md:px-12 flex justify-center items-center ">
      {/*     <div>
        <p className="xl:text-xl lg:text-lg text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          dignissimos dolorum voluptatibus quas quo perferendis non molestiae
          quia molestias consequuntur debitis laudantium adipisci omnis
          voluptas? Nemo, delectus corrupti. Iusto, consequuntur.
        </p>
        <div className="relative inline-block my-10">
          <button
            className=" bg-[#FF366B] text-[16px] text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px] border-none  rounded-[15px] RedbuttonAnim"
            onClick={handleSeeMore}>
            See More
          </button>
        </div>
      </div> */}
      <div className="md:grid min-[1025px]:grid-cols-3 md:grid-cols-2 lg:gap-16 gap-12 flex items-center justify-center  flex-col">
        {Blogdata.map((data, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="shadow-xl hover:shadow-2xl col-end h-[280px] w-[210px] sm:w-[250px] sm:h-[310px] md:w-[300px] md:h-[320px] lg:w-[320px] lg:h-[380px] xl:w-[380px] xl:h-[420px]   min-w-[280px] text-black  rounded-[20px] p-4  cardContainerS"
              key={i}>
              <div className="cardBoxS rounded-[20px]">
                {i === 0 && show ? (
                  <Lottie
                    animationData={click}
                    className="absolute  flex items-center justify-center top-[70%]  h-[80%] z-10"
                  />
                ) : null}
                <img
                  src={data.img}
                  className="flex justify-center items-center  w-full h-[190px] xl:h-[290px] lg:h-[260px] sm:h-[220px] frontS"
                  ref={cardRef}
                  alt="background"></img>

                {/*              <div className="flex justify-center relative">
                <div
                  className={`h-[60px] w-[60px] rounded-[55%] px-2 absolute bottom-[-30px] bg-[${data.boxColor}]`}>
                  <ImBlogger
                    color="#ffffff"
                    className="absolute top-[25%] left-[25%]"
                    size={30}
                  />
                  <div
                    className={`my-designF relative before:border-2 before:border-dashed before:border-[${data.boxColor}]`}></div>
                </div>
              </div>
              <ul className="list-image-none flex justify-start xl:text-[15px] sm:text-[14px] text-[13px]  text-slate-500 pb-1 pt-10 px-4">
                <li>{data.post}</li>
                <li className="px-4">{data.sign}</li>
                <li>{data.tag}</li>
              </ul>
              <div className="px-4 py-2 pb-6 text-[20px] font-medium ">
                <a href="/" className="text-ellipsis overflow-hidden">
                  {data.a}
                </a>
              </div> */}
                <div
                  className={` flex justify-center items-center  lg:text-lg  text-sm font-bold sm:p-6 p-3 text-ellipsis overflow-hidden backS  hover:rounded-[16px] cursor-pointer
                    xl:hover:top-[80%]  lg:hover:top-[65%] hover:top-[70%]`}
                 onMouseEnter={() => handleMouse(data)}
                 /* onMouseLeave={handleRemove} */>
                  {data.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import WorkArrow from "../../assets/work-arrow.png";
import { workData , bulletPoints } from "../../helpers";
import circle from "../../assets/shape-circle.png";
import square from "../../assets/shape-square.png";
import tri from "../../assets/shape-triangle.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ButtonArrowImg from "../../assets/button-arrow-base.png";
import ArrowBaseTwo from "../../assets/arrow-base-two.png";
import healthNsafety from "../../assets/hse.png";
import HNSpage from "../../assets/safety.png";

const dummyHelper = [
  {
    id: "",
    title: "",
    desc: "",
  },
];

const HealthSafetyHome = ({ heading, headingS }) => {
  /*   const [showText, setShowText] = useState(false); */
  const [showDesc, setShowDesc] = useState(dummyHelper);

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [HealthSafetyHome]); 

  const handleDescShow = (value) => {
    const updated = [value];
    const updatedString = JSON.stringify(updated);
    const showDescString = JSON.stringify(showDesc); /* 
    console.log(updated ,"updated")
    console.log(updatedString)
    console.log(showDescString) */
    if (updatedString === showDescString) {
      setShowDesc(dummyHelper);

      return;
    } else {
      setShowDesc(updated); /* 
    console.log(showDesc, "showdesc"); */
    }
  }; /* 
  console.log(showDesc, "showdesc1"); */
  
  return (
    <section
      className={`${
        headingS ? " bg-[white]" : " work bg-[#080c3c] my-[60px]"
      }  md:px-12  relative  `}>
      <motion.img
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
        animate={{ x: 100, opacity: 1 }}
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
          left: "30%",

          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        animate={{ x: "150%" }}
        initial={{ x: "-150%", y: "-100%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.img
        className="absolute"
        src={circle}
        style={{
          position: "absolute",
          top: "0%",
          left: "70%",
          right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
        initial={{ y: 200, x: -100 }}
        animate={{ y: 140, opacity: 1 }}
        transition={{
          duration: 8,
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
          left: "70%",
          right: "0%",
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
        src={square}
        style={{
          position: "absolute",
          top: "40%",
          left: "70%",
          right: "0%",
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

      <div
        className={` md:py-[60px] p-[26px] ${
          heading ? "text-white" : "text-black"
        } relative `}>
        <div
          className={`${
            heading
              ? " container mx-auto heading ? grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1  md:gap-12 justify-end items-center"
              : ""
          }`}>
          <div className={`${headingS && "container"} mx-auto flex flex-col justify-center max-lg:text-center py-10 rounded-2xl `}>
            <div className="">
              <div
                className={`text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px]  ${
                  heading ? "font-semibold" : ""
                }`}>
                <div className={`${headingS ? "hidden" : "block"}`}>
                  <h1 className="xl:text-xl lg:text-lg text-lg py-4">
                    HEALTH AND SAFETY
                  </h1>
                  <h1 className="font-serif text-[#ff366b]">Safety Is Non-Negotiable</h1>
                  {/*<img src={safetyF} className="w-[110px] h-[100px]"></img> */}
                </div>
                <p
                  className={`${
                    headingS ? "hidden" : "block"
                  } xl:text-xl lg:text-lg text-lg py-4`}>
                  At PBX, we are committed to the Health and Safety of our
                  Employees, Subcontractors, Clients and the Public.
                </p>
                {headingS ? (
                  <div className=" xl:text-xl lg:text-lg text-lg">
                    <div>
                    <div className=" w-[100%] max-lg:block lg:hidden">
                      <img src={HNSpage} className="lg:h-[800px] mx-auto pb-2 h-[300px]"/>
                      </div>
                      <p className="text-slate-500">
                        At PBX Technologies safety is put at the forefront of
                        our operations. We are committed to each and every one
                        of our employees offering training and support for
                        comfortability and confidence while remaining aware of
                        the work environment. Our team receives knowledge and
                        training to a wide range of safety standards and proper
                        practices including but not limited to :
                      </p>
                     <div className="flex max-lg:flex-col justify-center lg:gap-10 items-center">
                      <div className=" my-10 bg-[#080c3c] rounded-2xl sm:w-[100%] text-white">
                        {" "}
                        {/* 
                      <li>Fall protection</li>,<li> Competent Climber </li>,<li> Competent Rescue</li>, <li>RF
                      Radiation</li>, <li>Rigging</li>,<li> Hoists</li>, <li>Gin Poles</li>, <li>First Aid</li> */}
                        <ul>
                          {bulletPoints.map((value) => {
                            return (
                              <>
                                <li className="lg:px-12 px-4 py-4  ">
                                  {showDesc.map((item, index) => {
                                    return (
                                      <>
                                        <Accordion
                                          open={showDesc}
                                          icon={
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              width="22"
                                              viewBox="0 0 24 24"
                                              stroke-width="1.5"
                                              stroke="currentColor"
                                              className={`${
                                                value.id === item.id
                                                  ? "rotate-180"
                                                  : "rotate-0"
                                              } transition ease-in-out`}>
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                            </svg>
                                          }>
                                          <AccordionHeader
                                            className="hover:font-bold  cursor-pointer flex justify-between"
                                            onClick={() =>
                                              handleDescShow(value)
                                            }>
                                            <div className="">
                                              {value.title}
                                            </div>

                                            {/*    <div
                                            className={`${
                                              value.id === item.id
                                                ? "rotate-180"
                                                : "rotate-0"
                                            } transition ease-in-out `}>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke-width="1.5"
                                              stroke="currentColor"
                                              class="h-6 w-6" className={`${
                                              value.id === item.id
                                                ? "rotate-180"
                                                : "rotate-0"
                                            } transition ease-in-out `}>
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                            </svg>
                                          </div> */}
                                          </AccordionHeader>
                                          {/* 
                                  <div className="horizontal-Row py-2 " /> */}

                                          {showDesc.map((item, index) => {
                                            return (
                                              <>
                                                {value.id === item.id ? (
                                                  <AccordionBody className="h-auto md:w-full rounded-xl mt-[20px] font-medium shadow-sm min-w-[280px]  text-black  md:p-8 p-4 border-none card-Anim">
                                                    {item.desc}
                                                  </AccordionBody>
                                                ) : null}
                                              </>
                                            );
                                          })}
                                        </Accordion>
                                      </>
                                    );
                                  })}
                                </li>
                              </>
                            );
                          })}
                          {/*   {showDesc.id === bulletPoints.id ?
                        {showDesc.map((item)=>{
                          return <span>{item.desc}</span>
                        })}:null}
                        </>})} */}
                        </ul>
                      </div>
                      <div className=" w-[100%] max-lg:hidden">
                      <img src={HNSpage} className="lg:h-[800px] mx-auto py-4 h-[300px]"/>
                      </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-slate-500">
                        {" "}
                        Every job site is different, therefore crews are trained
                        in identifying potential job site hazards that are
                        documented and discussed in daily tailgate talks. Job
                        Site analyses as well as proper work procedures are
                        documented and discussed daily. Our trucks and crews
                        remain fully stocked and equipped with industry leading
                        PPE as well as full kits and equipment for high angle
                        rescue if ever required. We continuously review and
                        revise our health and safety program and make sure our
                        policies and procedures are understood and adhered to.
                        Our dedication for safety not only allows confidence to
                        our employees, but to our customers as well
                      </p>
                      {/* <div className={`${heading ? "hidden" : "block"}`}>
                      <ul className="list-disc py-5 text-lg lg:text-[22px] font-normal">
                        <li>
                          Alignment with best in class safety practices among
                          telecom organizations.
                        </li>
                        <li>
                          <li>
                            Management commitment to ensuring the safest
                            possible work environment for employees.
                          </li>
                        </li>
                        <li>
                          Use of the best training, tools and resources
                          available.
                        </li>
                        <li>
                          Detailed tracking of employee certifications by skill
                          set.
                        </li>
                        <li>
                          Training boot camp provided to new employees and
                          international employees entering Canada.
                        </li>
                        <li>
                          Random safety audits to sample field compliance and
                          measure safety-related performance.
                        </li>
                        <li>
                          Maintaining a work culture focused on safety ensures
                          we are always thinking about our safety practices,
                          measuring our effectiveness and looking for ways to
                          improve.
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            {heading ? (
              <div className="grid  sm:grid-cols-2 lg:grid-cols-4 justify-center items-start my-10">
                {workData?.map((value, ind) => (
                  <div
                    className="relative text-center flex flex-col justify-center items-center "
                    key={ind}>
                    {workData?.length - 1 === ind ? null : (
                      <div className="hidden lg:block absolute top-[25px] left-[100%] -translate-x-1/2 h-[30px] w-[60px]">
                        <img src={WorkArrow} alt="arrow work" />
                      </div>
                    )}
                    <div className="relative">
                      <div
                        className={`w-[70px] h-[70px] rounded-full  bg-[#FF366B] mb-[35px] circleAnim`}>
                        <div className="absolute top-[10%] left-[14%]">
                          {value.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="xl:text-xl lg:text-lg text-lg font-medium mb-[20px]">
                        {value.title}
                      </h1>
                      {/*  <p className="sm:max-w-[245px] mx-auto text-[16px] font-normal">
                    {value.content}
                  </p> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="flex max-lg:mx-auto">
              <div className={`${headingS ? "hidden" : "relative "}`}>
                <Link to="/health-safety">
                  <button className=" bg-[#FF366B] text-[16px] text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px]  border-none  rounded-[15px] RedbuttonAnim">
                    Learn More
                  </button>
                </Link>
                <motion.div
                  className="absolute bottom-[-20px] right-[-120px] max-[440px]:-right-[50px] max-[440px]:-bottom-1 max-[440px]:w-[80px] "
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
          {heading ? (
            <div className="relative mx-auto  ">
            <div >
              <img
                src={healthNsafety}
                className="md:h-[400px]  h-[200px] "
              />
            </div>
            </div>
          ) : null}
        </div>
        {!heading ? (
          <div className="flex max-[770px]:flex-col items-center justify-center gap-10 py-4 lg:py-4 md:pb-20 ">
            <div className="relative">
              <button className=" bg-[#FF366B] text-white font-normal lg:px-[80px]  sm:py-[14px] sm:px-[38px] py-[10px] px-[30px]  border-none   h-full w-full  rounded-[15px] tracking-wide buttonAnim before:border-[#FF366B]">
                PBX Enviromental Health & Safety Manual
              </button>
            </div>
            <div className="relative inline-block">
              <button className="bg-[#1A28F6]  text-white font-normal   sm:py-[14px] sm:px-[38px] py-[10px] px-[20px] h-full w-full border-none  rounded-[15px] tracking-wide buttonAnim before:border-[#1A28F6]">
                PBX Environmental Health & Safety Policy Statement
              </button>
              <motion.div
                className="absolute top-0 bottom-[-20px] right-[-60px] max-[440px]:-right-[34px] max-[440px]:-top-[24px] max-sm:hidden"
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
        ) : null}
      </div>
      {/* <div className="py-10">
        <img src={safety}></img>
      </div> */}
    </section>
  );
};

export default HealthSafetyHome;

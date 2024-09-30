import React from "react";
import { motion } from "framer-motion";
import ArrowBaseTwo from "../../assets/arrow-base-two.png";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
      <section className="  md:py-[60px] p-[26px] px-3 md:px-12 my-[60px] services section relative bg-[#080c3c]">
        <div className="container mx-auto  ">
          <div className="flex flex-col xl:flex-row px-3 sm:px-10 xl:px-0 gap-12 text-white justify-center items-center">
            <div className="z-50 text-center">
              {/*   <div className="relative">
              <motion.div
                className="absolute top-[26px] min-[1440px]:left-[200px] xl:left-[310px] lg:left-[110px]  sm:left-[80px] left-[-40px]"
                initial={{ x: 0 }}
                animate={{ x: 20 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src={ServiceArrow} alt="ServiceArrow" />
              </motion.div>
              </div> */}
              <div>
                <div>
                  <h2 className="lg:first-letter:text-[40px] text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px] font-serif font-bold">
                    Your Custom Projects in Trusted Hands
                  </h2>
                  <p className="xl:text-xl lg:text-lg text-lg font-normal py-4">
                    We are confident we can complete any custom telecom project
                    you have. With our skilled tower technicians, specializing
                    in tower installation and maintenance, we excel in
                    point-to-point wireless, 5G deployment, fiber optic
                    installations, and seamless WiFi setup.
                  </p>
                  {/*  <p className="lg:text-[18px] font-normal mt-2 text-base">
                    <span className="text-base font-normal">
                      Our highly trained team can help you with the following
                      technical services:
                    </span>
                    <ul className="list-disc mt-6 font-light">
                      <li>
                        Transport/Network/Alarm Monitoring Equipment
                        Installation (DSX, Cisco, T-Lan, etc.)
                      </li>
                      <li>Wireless network Equipment Installation.</li>
                      <li>Equipment testing and commissioning, removal.</li>
                      <li>
                        Coaxial/Hybrid (fiber & DC)/Ethernet Cable Installation
                        on towers or buildings.
                      </li>
                      <li>Microwave Equipment Installation.</li>
                      <li>
                        Fibre Optic Installation, Termination and Testing
                        (OTDR).
                      </li>
                      <li>
                        Building/Cabinet Infrastructure Installation (Equipment
                        Racks, Overhead cable rack, Fibre Optic/ETH Tray
                        Systems, Demarcation Boards, etc.).
                      </li>
                      <li>Optical transmission equipment and systems.</li>
                      <li>
                        DC power equipment, batteries, and grounding equipment.
                      </li>
                    </ul>
                  </p> */}
                </div>
                <div className="relative inline-block">
                  <Link to= "/contact">
                  <button className=" bg-[#FF366B] text-[16px] text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px]  border-none  rounded-[15px] RedbuttonAnim">
                    Get Free Estimate
                  </button>
                  </Link>
                  <motion.div
                className="absolute bottom-[-20px] right-[-120px] max-[440px]:-right-5 max-[440px]:-bottom-1 max-[440px]:w-[80px]  "
                initial={{ y: 0 }}
                animate={{ y: 20 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}>
                <img src={ArrowBaseTwo}  alt="button arrow base" />
              </motion.div>
                </div>
              </div>
            </div>
            {/*   <div className="z-50">
              <div className="grid md:grid-cols-2   gap-y-14 ">
                {ServicesData?.map((value, i) => (
                  <div className="flex gap-6 max-w-[350px]" key={i}>
                    <div className="">
                      <div
                        className={`h-[50px] w-[50px] rounded-[10px] origin-center rotate-45 bg-[${value?.boxColor}] flex justify-center items-center`}
                      ><img src={value?.image} alt="" className="-rotate-45 h-[35px]" /></div>
                    </div>
                    <div>
                      <h1 className="text-xl font-medium mb-4">
                        {value?.heading}
                      </h1>
                      <p className="text-base font-normal">{value?.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

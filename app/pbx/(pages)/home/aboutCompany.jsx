import { useEffect } from "react";
import Image from "next/image"; // Next.js Image component
import AboutCompanyRight from "../../assets/about-company-right-img.png"; // Use public folder for assets
import ButtonArrowImg from "../../assets/button-arrow-base.png";
import imageT from "../../assets/WWA1.jpeg";
import Formborder from "../../assets/contact-border.png";
import { GiStairsGoal } from "react-icons/gi";
import { SiGooglesearchconsole } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutCompany.module.css"; // Assume you have CSS Modules or similar

const AboutCompany = ({ heading, headingS }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [AboutCompany]);

  return (
    <div className={`container mx-auto ${heading ? "md:py-[60px] py-[30px]" : "pt-[26px]"} px-6 md:px-12 text-justify`}>
      <div className="lg:grid grid-cols-2 gap-10 justify-between items-center">
        <div className={`flex-inline ${headingS ? "order-last" : ""}`}>
          <div>
            <p className="xl:text-[35px] lg:text-3xl md:text-[26px] text-[22px] font-serif font-bold max-[770px]:text-center pb-2">
              Who We Are
            </p>
            <p className={`xl:text-xl lg:text-lg text-lg ${headingS ? "py-4" : "py-2"} text-slate-500`}>
              PBX Technologies Inc. primarily offers top-notch engineering and maintenance of newly built and existing telecom sites to the wireless telecommunication industries. We provide our customers with a wide range of advanced telecom services to meet their diverse needs.
            </p>
            {headingS && (
              <div className="flex items-center justify-center mb-10">
                <div className="flex">
                  <div className="relative inline-block max-[1024px]:m-auto">
                    <Link href="/about">
                      <button className="bg-[#FF366B] text-white font-normal sm:py-[15px] sm:px-[40px] py-[10px] px-[30px] border-none rounded-[15px] buttonAnim before:border-[#ff366b]">
                        Learn More
                      </button>
                      <motion.div
                        className="absolute top-0 right-[-75px]"
                        initial={{ y: 0 }}
                        animate={{ y: -10 }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Image src={ButtonArrowImg} alt="button arrow base" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {heading && (
            <>
              <div className="flex items-center py-2">
                <div className="pr-4">
                  <div className="relative">
                    <div className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] bg-[#FF366B] sm:rounded-[20px] rounded-[15px] my-design before:border-[#FF366B] before:border-2 before:top-[0px] before:left-[5px] before:h-[2.8em] before:sm:h-[3.4em]">
                      <GiStairsGoal
                        className="absolute z-10 rotate-[315deg] top-[20%] sm:left-[25%] left-[20%]"
                        size={25}
                        color="#ffffff"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-bold xl:text-xl lg:text-lg text-lg pb-2 ">Our Mission</p>
                  <p className="text-slate-500 xl:text-xl lg:text-lg text-lg ">
                    Our goal is to provide our customers with an unparalleled level of competence and a single point of contact for all of their project requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="pr-4">
                  <div className="relative">
                    <div className="origin-center rotate-45 sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] bg-[#1A28F6] sm:rounded-[20px] rounded-[15px] my-design before:border-[#1A28F6] before:border-2 before:top-[0px] before:left-[5px] before:h-[2.8em] before:sm:h-[3.4em] !important">
                      <SiGooglesearchconsole
                        className="absolute rotate-[315deg] z-10 top-[20%] sm:left-[20%] left-[20%]"
                        size={25}
                        color="#ffffff"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-bold xl:text-xl lg:text-lg text-lg pb-2 ">Our Solution-Focus</p>
                  <p className="py-2 text-slate-500 xl:text-xl lg:text-lg text-lg ">
                    <ul className="list-disc">
                      <li>We believe in delivering results. When unexpected challenges arise, we provide creative solutions to keep your projects on track.</li>
                      <li>Our core, local team includes engineers, electricians, PMs, technicians, installers, acquisition specialists, and leaders with extensive telecom experience.</li>
                      <li>We can provide support at any phase of your project life cycle from planning through to in-service.</li>
                      <li>Through our use of offshoring and templatized designs, we are able to keep our costs extremely competitive.</li>
                      <li>When required, we can leverage our in-house expertise to quickly innovate and deliver custom solutions to resolve unique challenges.</li>
                      <li>Service excellence is our competitive advantage!!</li>
                    </ul>
                  </p>
                </div>
              </div>
            </>
          )}

        </div>
        {heading && (
          <div>
            <Image
              src={AboutCompanyRight}
              className="md:h-[334px] w-auto max-[1024px]:mx-auto lg:float-right max-[1024px]:px-4"
              alt="about-company-right-img"
            />
          </div>
        )}
        {headingS && (
          <div className="rounded-tl-[30%] ring-offset-gray-500 relative max-lg:mt-10 max-sm:mt-4">
            <Image
              src={imageT}
              className="rounded-tl-[30%] rounded-tr-[70%] rounded-br-[70%] rounded-bl-[30%] m-auto sm:h-[380px] h-[300px] max-sm:pt-6"
              alt="WWA1"
            />
            <div className="absolute -z-50 left-24 -top-4 w-[65%] max-md:hidden wwaBorder" />
          </div>
        )}
      </div>
      {heading && (
        <div className="xl:text-xl lg:text-lg text-lg lg:py-0 pt-6 text-slate-500 ">
          PBX Technologies collaborates with clients, communities, and coworkers to design and implement novel solutions to telecommunication technical challenges so the highest quality services can be delivered to our customers. Clients across Canada can depend on our abilities to design, manage, and execute their projects.
          <br />
          PBX Technologies is a trained and skilled team of Telecom Technicians, Tower Riggers, Fiber splicers, linemen, and equipment operators.
        </div>
      )}
    </div>
  );
};

export default AboutCompany;

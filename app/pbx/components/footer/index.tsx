'use client'
import React from "react";
import FooterLogo from "../../assets/logoBlack.png";
import { motion } from "framer-motion";
import Circle from "../../assets/shape-circle.png";
import Square from "../../assets/shape-square.png";
import Triangle from "../../assets/shape-triangle.png";
import FooterTitle from "../../assets/footer-title-bg.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import Image from "next/image"

const MotionImage = motion(Image); 

const Footer = () => {
  return (
    <footer className="bg-white mx-auto border-t-2 px-3 md:px-12">
      <div className="container mx-auto w-full">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 p-6 justify-center items-center lg:items-stretch">
          <div className="relative md:row-span-3 md:pt-8">
            <MotionImage
              className="absolute"
              src={Circle}
              alt="Decorative circle"
              initial={{ y: 200, x: -100 }}
              animate={{ y: 80, opacity: 1 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              width={20} 
              height={20}
              style={{ position: "absolute", top: "0%", left: "70%", transform: "translate(-50%, -50%)", zIndex: 5 }}
            />

            <MotionImage
              className="absolute"
              src={Triangle}
              alt="Decorative triangle"
              initial={{ x: "-150%", y: "-50%" }}
              animate={{ y: "150%" }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              width={20}
              height={20}
              style={{ position: "absolute", top: "5%", left: "10%", transform: "translate(-50%, -50%)", zIndex: 5 }}
            />

            <MotionImage
              className="absolute"
              src={Square}
              alt="Decorative square"
              initial={{ x: "-100%", y: "-150%" }}
              animate={{ x: "50%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              width={20}
              height={20}
              style={{ position: "absolute", top: "10%", left: "70%", transform: "translate(-50%, -50%)", zIndex: 5 }}
            />
            
            <div className="relative">
              <Image className="md:h-[82px] sm:h-16 h-12 relative md:m-0 m-auto z-10" src={FooterLogo} alt="PBX Technologies logo" width={230} height={55} />
              <p className="text-gray-600 py-2 lg:text-[18px] sm:text-[16px] text-[10px] font-serif font-bold uppercase text-center">
                Wireless and Wireline Telecom Services
              </p>
            </div>
          </div>

          <div className="xl:text-center max-[430px]:hidden">
            <h2 className="py-2 text-xl font-semibold text-black relative">
              Useful Links
              <Image src={FooterTitle} className="absolute top-6 xl:left-[170px]" alt="Footer title background" />
            </h2>
            <ul className="text-gray-600 font-base pt-2">
              <li className="hover:underline"><Link href="/about">About Us</Link></li>
              <li className="hover:underline py-2"><Link href="/services">Our Services</Link></li>
              <li className="hover:underline"><Link href="/our-projects">Our Projects</Link></li>
              <li className="hover:underline py-2"><Link href="/health-safety">Health & Safety</Link></li>
              <li className="pb-2 hover:underline"><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="py-2 text-xl font-semibold text-black relative">
              Contact Us
              <Image src={FooterTitle} className="absolute top-6" alt="Footer title background" />
            </h2>
            <p className="text-gray-600 flex items-center pt-2">
              <ImLocation />
              <span className="pl-2">F9-1585 Britannia Rd E, Mississauga, ON L4W 2M4</span>
            </p>
            <a className="text-gray-600 py-2 flex items-center" href="mailto:support@pbxtechnologies.com">
              <FaEnvelope />
              <span className="pl-2">support@pbxtechnologies.com</span>
            </a>
            <a className="pb-2 text-gray-600 flex items-center" href="tel:+1647-335-3901">
              <FaPhoneAlt />
              <span className="pl-2">+1647-335-3901</span>
            </a>
            <ul className="text-gray-600 font-base flex gap-3 py-2">
              <li>
                <a href="https://www.facebook.com/pbxtechnologies?mibextid=LQQJ4d" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pbxtechnologies/" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 017.09 2.465c.636-.247 1.363-.416 2.427-.465C9.883 2.013 10.228 2 12 2zm0 1.288c-2.41 0-2.705.012-3.663.054-1.074.045-1.697.197-2.106.34a3.407 3.407 0 00-1.285.84 3.407 3.407 0 00-.84 1.285c-.143.409-.295 1.032-.34 2.106-.042.958-.054 1.253-.054 3.663v.693c0 2.41.012 2.705.054 3.663.045 1.074.197 1.697.34 2.106a3.407 3.407 0 00.84 1.285 3.407 3.407 0 001.285.84c.409.143 1.032.295 2.106.34.958.042 1.253.054 3.663.054h.693c2.41 0 2.705-.012 3.663-.054 1.074-.045 1.697-.197 2.106-.34a3.407 3.407 0 001.285-.84 3.407 3.407 0 00.84-1.285c.143-.409.295-1.032.34-2.106.042-.958.054-1.253.054-3.663v-.693c0-2.41-.012-2.705-.054-3.663-.045-1.074-.197-1.697-.34-2.106a3.407 3.407 0 00-.84-1.285 3.407 3.407 0 00-1.285-.84c-.409-.143-1.032-.295-2.106-.34C14.705 3.3 14.41 3.288 12 3.288zm0 2.654a5.356 5.356 0 100 10.712 5.356 5.356 0 000-10.712zm0 1.288a4.068 4.068 0 110 8.136 4.068 4.068 0 010-8.136zm6.67-3.155a1.444 1.444 0 11-2.888 0 1.444 1.444 0 012.888 0z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/pbx-technologies" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M21.448 0H2.552A2.558 2.558 0 000 2.558v18.883A2.558 2.558 0 002.552 24h18.895A2.558 2.558 0 0024 21.441V2.558A2.558 2.558 0 0021.448 0zM7.069 20.452H4.268V9.271h2.801v11.181zm-1.762-12.672a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm16.25 12.672h-2.801v-5.663c0-1.355-.025-3.099-1.892-3.099-1.891 0-2.179 1.484-2.179 3.017v5.745h-2.801V9.271h2.675v1.535h.038c.372-.706 1.278-1.455 2.626-1.455 2.818 0 3.344 1.852 3.344 4.264v6.838z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">LinkedIn page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 pb-6">
          <p className="text-sm">
            © {new Date().getFullYear()} PBX Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

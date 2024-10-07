import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../components/icons";
import NugenLogoWhite from "../icons/png/nugen-logo-white.png";
import EmailIcon from "../icons/Email";
import UpWorkIcon from "../icons/UpWork";
import PhoneIcon from "../icons/Phone";
import useSize from "../windowSize";
import React from "react";
interface FooterPropsType {
  logo: string,
  socialMedia: {
    facebook: string,
    instagram: string,
    twitter: string,
    linkedin: string,
    email: string,
    upwork: string,
    phone: string
  },
  description: string,
  mediaTitle: string,
}
interface footerType {
  props: FooterPropsType
}
const Footer: React.FC<footerType> = ({ props }) => {
  const size = useSize();

  return (
    <div className={`bg-black h-auto w-screen pb-20 lg:pb-2 lg:fixed bottom-0 left-0 z-10`}>
      <div className={`container mx-auto flex flex-col md:flex-row justify-between items-center text-center border-b border-white/25 lg:pb-20`}>
        <div className="w-full flex flex-col items-start">
          <div className="text-center md:text-left flex flex-col md:items-start items-center justify-center  text-white">
            <Image src={props?.logo||""} alt="" height={80} width={200} />
            <div className="w-full">
              <p className="text-base md:text-normal font-light text-center md:text-left">
                {props?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-full md:text-center text-left md:capitalize text-white  flex flex-col items-center justify-center">
          <p className="font-semibold">{props?.mediaTitle}</p>
          <div className="flex justify-center items-center gap-4">
            <Link href={props?.socialMedia?.facebook||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <FacebookIcon className="fill-[#3b5998]" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.instagram||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <InstagramIcon className="!h-6 !w-6" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.twitter||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <TwitterIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.email||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <EmailIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.upwork||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <UpWorkIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.linkedin||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <LinkedInIcon className="fill-[#0077b5]" />
              </div>
            </Link>
            <Link href={props?.socialMedia?.phone||""}>
              <div className="cursor-pointer hover:scale-125 transition-all">
                <PhoneIcon className="fill-[#26a7de]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

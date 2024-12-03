import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../components/icons";
import EmailIcon from "../icons/Email";
import UpWorkIcon from "../icons/UpWork";
import PhoneIcon from "../icons/Phone";

interface FooterPropsType {
  logo: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    email: string;
    upwork: string;
    phone: string;
  };
  description: string;
  mediaTitle: string;
}

interface FooterType {
  props: FooterPropsType;
}

const Footer: React.FC<FooterType> = ({ props }) => {
  return (
    <footer className="bg-black text-white py-10 pb-26  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 px-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 text-center md:text-left">
          <Image
            src={props?.logo || ""}
            alt="Logo"
            width={200}
            height={80}
            className="mb-4"
          />
          <p className="text-gray-300">
            {props?.description || "Your company description goes here."}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="font-semibold mb-4 text-white">
            {props?.mediaTitle || "Connect with us"}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SocialMediaLink
              href={props?.socialMedia?.facebook}
              Icon={FacebookIcon}
              color="#3b5998"
            />
            <SocialMediaLink
              href={props?.socialMedia?.instagram}
              Icon={InstagramIcon}
            />
            <SocialMediaLink
              href={props?.socialMedia?.twitter}
              Icon={TwitterIcon}
              color="#26a7de"
            />
            <SocialMediaLink
              href={props?.socialMedia?.email}
              Icon={EmailIcon}
              color="#26a7de"
            />
            <SocialMediaLink
              href={props?.socialMedia?.upwork}
              Icon={UpWorkIcon}
              color="#26a7de"
            />
            <SocialMediaLink
              href={props?.socialMedia?.linkedin}
              Icon={LinkedInIcon}
              color="#0077b5"
            />
            <SocialMediaLink
              href={props?.socialMedia?.phone}
              Icon={PhoneIcon}
              color="#26a7de"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialMediaLink = ({
  href,
  Icon,
  color = "#ffffff",
}: {
  href: string | undefined;
  Icon: React.ComponentType<{ className?: string }>;
  color?: string;
}) => {
  if (!href) return null;
  return (
    <Link href={href}>
      <div
        className="cursor-pointer p-2 rounded-full transition-transform hover:scale-125"
        style={{ color }}
      >
        <Icon className="w-6 h-6" />
      </div>
    </Link>
  );
};

export default Footer;

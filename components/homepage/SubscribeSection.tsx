"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import HeroImage3 from "../../image/hero3.png";
import Marquee from "../ui/Marquee";
import { QueryForm } from "../QueryForms";
import Footer from "../Layout/Footer";
import gsap from "gsap";
interface ContactUsType {
  header_title: string,
  header_description: string,
  animated_title: string,
  contact_title: string,
  contact_description: string,
  contact_location_title: string,
  contact_location: string,
  contact_us_title: string,
  mobile_number: string,
  email_title: string,
  email_id: string,
  map_view: any,
  contact_image: string,
  footer_logo: string,
  footer_description: string,
  follow_us: string,
  'facebook-url': string,
  'instagram-url': string,
  'linkedin-url': string,
  twitter_url: string,
  email_url: string,
  upwork_url: string
}
interface ContactUsPropsType {
  props: ContactUsType
}
const SubscribeSection: React.FC<ContactUsPropsType> = ({ props }) => {
  const { header_title, header_description, animated_title, contact_location_title, contact_location, mobile_number, email_id, email_title, contact_us_title } = props
  const followHeadingRef = useRef(null);
  const sectionBody = useRef(null);
  let matchMediaToggler = gsap.matchMedia();
  const timeline = gsap.timeline({
    delay: 1.2,
  });

  const footerProps = {
    logo: props?.footer_logo,
    socialMedia: {
      facebook: props["facebook-url"],
      instagram: props["instagram-url"],
      twitter: props?.twitter_url,
      linkedin: props["linkedin-url"],
      email: props?.email_id,
      upwork: props?.upwork_url,
      phone: props?.mobile_number
    },
    description: props?.footer_description,
    mediaTitle: props?.follow_us
  }
  useLayoutEffect(() => {
    matchMediaToggler.add("(min-width: 1040px)", () => {
      timeline.fromTo(
        followHeadingRef.current,
        {
          x: "50%",
        },
        {
          x: "0%",
          stagger: 0.2,
          ease: "easeInOut",
        }
      );
    });
  }, []);

  return (
    <>
      <section
        id=""
        className="w-full h-full"
      >
        <div
        >
          <div className="w-full py-4 text-primary text-6xl uppercase font-serif flex justify-center font-bold">
            <p>{animated_title}</p>
          </div>
          <div className="">
            <div
              className="md:flex w-full items-center gap-4 px-8  py-4 "
            >
              <p className="text-2xl lg:text-4xl text-primary font-bold">
                {header_title}
              </p>
              <div className="w-10 border-2 border-black hidden md:flex md:visible"></div>
              <p className="">
                {header_description}
              </p>
            </div>

            <div className="px-4 flex flex-col lg:flex-row pb-2">
              <div className="flex flex-col lg:flex-row w-full px-8 ">
                <div className="w-full">
                  <div className="pt-4">
                    <div className="text-primary text-2xl font-semibold">{contact_location_title}</div>
                    <p className="font-medium text-sm md:text-lg">
                      {contact_location}
                    </p>
                  </div>
                  <div className="flex gap-8 pt-4">
                    <div className="flex flex-col">
                      <div className="text-primary text-2xl font-semibold">{contact_us_title}</div>
                      <p className="font-medium text-sm md:text-lg">
                        {mobile_number}
                      </p>
                    </div>
                    <div className="">
                      <div className="text-primary text-2xl font-semibold">{email_title}</div>
                      <p className="font-medium text-sm md:text-lg">
                        {email_id}
                      </p>
                    </div>
                  </div>
                  <div className="my-12">
                    <QueryForm buttonTitle="Send Query" />
                  </div>
                </div>
                <div className=" w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5405304634405!2d-79.64870652392167!3d43.65772697110182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b38d3b8f6b079%3A0x9e8e053772c38d13!2s1585%20Britannia%20Rd%20E%2C%20Mississauga%2C%20ON%20L4W%202M4%2C%20Canada!5e0!3m2!1sen!2sin!4v1689567123621!5m2!1sen!2sin"
                    style={{ border: "0", height: "300px", width: "100%" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className=" w-[40%] hidden lg:flex lg:visible ">
                <Image
                  height={400}
                  width={400}
                  src={HeroImage3}
                  alt="bg image hero section"
                  quality={100}
                  className="lg:-mt-16"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer props={footerProps} />
      </section>
    </>
  );
};

export default SubscribeSection;

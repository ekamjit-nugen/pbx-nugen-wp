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
        id="subscribe-section-ref"
        className="trigger w-screen lg:h-screen h-full section-featured-ref overflow-hidden  relative md:my-0 lg:fixed top-0 left-0 z-10 bg-background lg:shadow-2xl xl:overflow-auto"
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 relative items-start w-full h-[90%] lg:h-screen xl:h-full`}
        >
          <div>
            <div className="w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
              <Marquee title={animated_title} />
            </div>
          </div>
          <div className="flex w-full flex-col justify-start items-start h-[85%] lg:col-span-11 gap-0  p-4">
            <div
              className="w-full lg:w-7/12 py-4 flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center p-4"
              ref={followHeadingRef}
            >
              <h3 className="uppercase text-2xl font-bold text-primary w-fit whitespace-nowrap">
                {header_title}
              </h3>
              <div className="w-full lg:w-12 border-b border-foreground hidden lg:block" />
              <p className="w-auto flex-wrap text-foreground/80">
                {header_description}
              </p>
            </div>
            <div className="w-full lg:w-[90%] h-full" ref={sectionBody}>
              <div className="w-full flex flex-col md:flex-row gap-32 justify-start">
                <div className=" flex-col items-start lg:flex-row sm:text-left gap-12 w-auto  p-4 lg:w-8/12">
                  <div className="w-full h-auto flex flex-col md:flex-row mt-2  gap-4 basis-6/12">
                    <div className="basis-7/12">
                      <div className="h-auto mb-6">
                        <div>
                          <div className="text-2xl font-bold">{contact_location_title}</div>
                          <p className="text-foreground/80 mt-2">
                            {contact_location}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="basis-1/2">
                          <div className="text-2xl font-bold">{contact_us_title}</div>
                          <p className="text-foreground/80 mt-2 ">
                            {mobile_number}
                          </p>
                        </div>
                        <div className="basis-1/2">
                          <div className="text-2xl font-bold">{email_title}</div>
                          <p className="text-foreground/80 mt-2">
                            {email_id}
                          </p>
                        </div>
                      </div>
                      <div className="my-12">
                        <QueryForm buttonTitle="Send Query" />
                      </div>
                    </div>
                    <div className="basis-5/12 mt-1 ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13721.617732154162!2d76.6870944!3d30.7070288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5dbe6c39f7%3A0x631f8a56ded3b61d!2sNugen%20I.T.%20Services!5e0!3m2!1sen!2sin!4v1700118553232!5m2!1sen!2sin"
                        style={{ border: "0", height: "330px", width: "100%" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="mt-25 w-full lg:w-4/12 flex justify-center">
                  <Image
                    height={400}
                    width={400}
                    src={HeroImage3}
                    alt="bg image hero section"
                    quality={100}
                  />
                </div>
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

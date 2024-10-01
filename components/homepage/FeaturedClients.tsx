"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Marquee from "../../components/ui/Marquee";
import CapitalNumber from "../../image/logos/capitalNumber.svg";
import Simply5 from "../../image/logos/simply5.svg";
import IvoyantLogo from "../../image/logos/ivoyantLogo.png";
import SunRise from "../../image/logos/sun-rise.png";

interface FeaturedClientsProps {
  className?: string;
}

const FeaturedClients: React.FC<FeaturedClientsProps> = ({ className }) => {
  const followHeadingRef = useRef(null);
  const ServiceCardsRef = useRef(null);
  const bottomCounterSectionRef = useRef(null);
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let matchMediaToggler = gsap.matchMedia({});

  useLayoutEffect(() => {
    matchMediaToggler.add("(max-width: 1023px)", () => {
      timeline.fromTo(
        followHeadingRef.current,
        {
          x: "-20%",
        },
        {
          x: "0%",
          stagger: 0.2,
          ease: "easeInOut",
        }
      );
      gsap.fromTo(
        ServiceCardsRef.current,
        {
          x: "-12%",
        },
        {
          x: "0%",
          ease: "easeInOut",
        }
      );
    });

    matchMediaToggler.add("(min-width: 1040px)", () => {
      timeline
        .fromTo(
          followHeadingRef.current,
          {
            x: "50%",
          },
          {
            x: "0%",
            duration: 0.5,
            ease: "easeInOut",
          }
        )
        .fromTo(
          ServiceCardsRef.current,
          {
            x: "40%",
          },
          {
            x: "0%",
            duration: 1.5,
            ease: "easeInOut",
          }
        )
        .fromTo(
          bottomCounterSectionRef.current,
          {
            x: "40%",
          },
          {
            x: "0%",
            duration: 0.5,
            ease: "easeInOut",
          }
        );
    });
  });

  return (
    <section
      id="section-featured-ref"
      className="trigger w-[100%] lg:h-screen h-full section-featured-ref lg:overflow-hidden lg:p-8 relative md:my-0 lg:fixed top-0 left-0 z-10 bg-background pb-12"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full ${className}`}
      >
        <div className="pt-8 pb-4 w-full relative lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
          <Marquee title="FEATURED CLIENTS" />
        </div>
        <div />
        <div className="relaitve grid grid-cols-1 h-[85%] lg:col-span-11">
          <div
            ref={followHeadingRef}
            className="w-full md:w-7/12 px-10 lg:p-4 pt-8 pb-0 flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center"
          >
            <h3 className="uppercase text-lg lg:text-2xl font-bold text-primary w-10/12 lg:w-6/12">
              HELPING BRAND’S BIG & SMALL AGENCY INDUSTRY
            </h3>
            <div className="w-12 border-b border-foreground hidden lg:block" />
            <p className="text-foreground/80">
              Empowering agencies of all sizes, we specialize in supporting
              brands to thrive in the competitive industry.
            </p>
          </div>
          <div className="h-auto relative parent lg:my-20 py-6">
            <div
              ref={ServiceCardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:justify-center lg:justify-between card gap-12 items-center px-10 lg:px-4 md:px-10"
            >
              <LogoCard />
            </div>
          </div>
          <div
            ref={bottomCounterSectionRef}
            className="flex gap-10 w-auto origin-left md:ml-32 px-10 lg:px-4 pb-12"
          >
            <div className="text-center flex flex-col">
              <div className="font-bold text-2xl md:text-3xl text-start">
                <span id="clientCounter">1600</span>
                <span>+</span>
              </div>
              <span className="capitalize font-light text-start">
                world wide clients
              </span>
            </div> 
            <div className="text-center flex flex-col">
              <div className="font-bold text-xl md:text-3xl text-start">
                <span id="companyCounter">50</span>
                <span>+</span>
              </div>
              <span className="capitalize font-light text-start">
                trusted company
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;

type CardType = {
  logo?: string;
  companyName?: string;
  shortDescription?: string;
};

const LogoCard = () => {
  const cardRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          start: "center 550px",
          end: "end",
          trigger: "#triggerFollowHeading",
        },
      }
    );
  }, []);

  return cards.map((card, index) => (
    <div key={index}>
      <div
        className="flex flex-col justify-start relative cards gap-4 w-full"
        key={index}
        id={`card-${index}`}
      >
        <div className="flex flex-col gap-4 min-h-fit h-full lg:h-[240px]">
          <div className="w-1/2 lg:w-10/12 h-full md:h-32 lg:w-[200px] lg:h-fit">
            {card?.logo && (
              <Image
                src={card?.logo}
                className="object-cover"
                alt="image"
                width={800}
                height={800}
              />
            )}
          </div>
          <h3 className="text-2xl font-extrabold uppercase mt-4">
            {card?.companyName}
          </h3>
          <div className="text-sm md:text-lg text-foreground/40 line-clamp-3">
            {card?.shortDescription}
          </div>
        </div>
      </div>{" "}
    </div>
  ));
};

const cards: CardType[] = [
  {
    logo: CapitalNumber,
    companyName: "Capital Numbers",
    shortDescription:
      "Capital Numbers is a leading software development company based in India with over 750 employees.",
  },
  {
    logo: Simply5,
    companyName: "Simply5",
    shortDescription:
      "Simply5 aims to provide enterprise-grade networking capabilities typically requiring complex configurations.",
  },
  {
    logo: IvoyantLogo,
    companyName: "Ivoyant",
    shortDescription:
      "Ivoyant is a solutions and services provider for technology-led enterprise business transformation.",
  },
  {
    logo: SunRise,
    companyName: "Sunrise Integration",
    shortDescription:
      "Sunrise Integration provides software development services for enterprise ecommerce, data migration and mobile apps",
  },
];

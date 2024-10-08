'use client'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomMarquee from "../ui/Marquee";
import ServiceCard from "../services/ServiceCard";
import { Button } from "../ui";
interface ServicePropsType {
  header_title: string,
  header_description: string,
  animated_title: string,
  post_title: string,
  post_image: string,
  post_description: string,
  top_title: string,
  innerContent?: any
}
interface pageContentType {
  header_title: string,
  header_description: string,
  animated_title: string,
}
interface ServiceClientsProps {
  className?: string;
  pbxData: ServicePropsType[],
  pbxContent: pageContentType,
  nugenData: ServicePropsType[],
  nugenContent: pageContentType,
}
const OurServicesSection: React.FC<ServiceClientsProps> = ({ className, pbxData, pbxContent, nugenContent, nugenData }) => {
  const followHeadingRef = useRef(null);
  const ServiceCardsRef = useRef(null);
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let matchMediaToggler = gsap.matchMedia();
  const [select, setSelect] = useState(true)
  const [data, setData] = useState<any>([])
  const [pageContent, setPageContent] = useState<any>({})
  useEffect(() => {
    if (select) {
      setData(pbxData)
      setPageContent(pbxContent)
    } else {
      setData(nugenData)
      setPageContent(nugenContent)
    }
  }, [select])

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
            x: "20%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          ServiceCardsRef.current,
          {
            x: "0%",
          },
          {
            x: "-40%",
            stagger: 0.2,
            duration: 1.5,
            ease: "easeInOut",
          }
        );
    });
  }, []);
  return (
    <section
      id="section-our-services-ref"
      className="trigger w-screen lg:h-screen h-full section-featured-ref overflow-hidden p-2 relative lg:fixed top-0 left-0 z-10 bg-background lg:shadow-2xl"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full ${className}`}
      >
        <div className="pt-8 pb-4 w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
          <CustomMarquee title={pageContent?.animated_title} />
        </div>
        <div className="flex w-full flex-col gap-2 h-full col-span-11">
          <div
            className=" lg:w-4/5 flex flex-col lg:flex-row gap-2 lg:gap-8 items-center"
            ref={followHeadingRef}
          >
            <h3 className="uppercase text-2xl font-bold text-primary w-full">
              {pageContent?.header_title}
            </h3>
            <div className=" border-b border-foreground hidden lg:block" />
            <p className="text-foreground/80">
              {pageContent?.header_description}
            </p>
          </div>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              variant="default"
              onClick={() => { setSelect(true) }}
              className="w-fit"
            >
              Wireless Technologies
            </Button>
            <Button
              variant="default"
              onClick={() => { setSelect(false) }}
              className="w-fit"
            >
              IT Services
            </Button>
          </div>
        </div>
        <div className="lg:absolute lg:top-[15%] lg:left-1/2 w-[90%] lg:ml-10">
          <div
            className="flex flex-wrap lg:flex-nowrap gap-6 relative my-16  items-center justify-center lg:overflow-auto lg:w-full lg:right-40 lg:pl-96 pt-12"
            ref={ServiceCardsRef}
          >
            {data?.map((value: any, index: any) => (
              <div key={index}>
                <ServiceCard index={index} {...value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServicesSection;

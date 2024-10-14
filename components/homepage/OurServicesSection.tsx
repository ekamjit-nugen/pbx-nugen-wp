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
  const [data, setData] = useState<any>([])
  const [pageContent, setPageContent] = useState<any>({})
  const params = new URLSearchParams(window.location.search);
  const value = params.get('data')?.trim();
  useEffect(() => {
    if (value === `"pbx"`) {
      setData(pbxData)
      setPageContent(pbxContent)
    } else {
      setData(nugenData)
      setPageContent(nugenContent)
    }
  }, [value])

  // useLayoutEffect(() => {
  //   matchMediaToggler.add("(max-width: 1023px)", () => {
  //     timeline.fromTo(
  //       followHeadingRef.current,
  //       {
  //         x: "-20%",
  //       },
  //       {
  //         x: "0%",
  //         stagger: 0.2,
  //         ease: "easeInOut",
  //       }
  //     );
  //     gsap.fromTo(
  //       ServiceCardsRef.current,
  //       {
  //         x: "-12%",
  //       },
  //       {
  //         x: "0%",
  //         ease: "easeInOut",
  //       }
  //     );
  //   });
  //   matchMediaToggler.add("(min-width: 1040px)", () => {
  //     timeline
  //       .fromTo(
  //         followHeadingRef.current,
  //         {
  //           x: "50%",
  //         },
  //         {
  //           x: "20%",
  //           stagger: 0.2,
  //           ease: "easeInOut",
  //         }
  //       )
  //       .fromTo(
  //         ServiceCardsRef.current,
  //         {
  //           x: "0%",
  //         },
  //         {
  //           x: "-40%",
  //           stagger: 0.2,
  //           duration: 1.5,
  //           ease: "easeInOut",
  //         }
  //       );
  //   });
  // }, []);
  return (
    <section
      id=""
      className=" w-screen h-full section-featured-ref p-2 relative flex top-0 left-0 z-10 bg-background"
    >
      <div
        className={` relative items-center flex flex-col justify-center w-full h-full ${className}`}
      >
        <div className="pt-8 pb-4 w-full">
          <CustomMarquee title={pageContent?.animated_title} />
        </div>
        <div className="flex w-full flex-col gap-2 h-full col-span-11">
          <div
            className=" flex flex-col gap-2  items-center"
            ref={followHeadingRef}
          >
            <h3 className="uppercase text-2xl font-bold text-primary w-full">
              {pageContent?.header_title}
            </h3>
            <div className=" border-b border-foreground hidden" />
            <p className="text-foreground/80">
              {pageContent?.header_description}
            </p>
          </div>
        </div>
        <div className="w-[90%] flex justify-center">
          <div
            className="flex flex-wrap justify-center lg:justify-center lg:flex-nowrap gap-6 relative my-16 lg:pl-56  items-center justify-center lg:overflow-auto pt-12"
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

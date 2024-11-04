'use client'
import { useEffect, useState } from "react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";
import { leftToRightAnimation, rightToLeftAnimation, staggerParent, topToBottomAnimation } from "@/lib/animation/animationUtils";
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
  return (
    <motion.section
      {...staggerParent}
      id=""
      className="w-screen h-full section-featured-ref p-2 relative flex top-0 left-0 z-10 bg-background"
    >
      <div
        className={` relative items-center flex flex-col justify-center w-full h-full ${className}`}
      >
        <div className="w-full text-4xl md:text-6xl capitalize font-serif font-bold text-primary flex justify-center">
          <motion.p variants={topToBottomAnimation}>{pageContent?.animated_title}</motion.p>
        </div>
        <div className="flex w-full flex-col gap-2 h-full col-span-11 lg:pl-32">
          <div
            className=" flex flex-col gap-2 pl-16"
          >
            <motion.h3 variants={rightToLeftAnimation} className="capitalize text-2xl font-bold text-primary w-10/12">
              {pageContent?.header_title}
            </motion.h3>
            <div className=" border-b border-foreground hidden" />
            <motion.p variants={rightToLeftAnimation} className="text-foreground/80">
              {pageContent?.header_description}
            </motion.p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className="flex h-full flex-wrap justify-center lg:flex-nowrap gap-6 relative my-16 overflow-x-auto overflow-y-hidden pt-8 "
          >
            {data?.map((value: any, index: any) => (
              <motion.div variants={leftToRightAnimation} key={index}>
                <ServiceCard index={index} {...value} />
              </motion.div> 
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default OurServicesSection;

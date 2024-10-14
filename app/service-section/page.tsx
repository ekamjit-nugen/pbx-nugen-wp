import React from "react";
import ServiceSection from "../../components/homepage/ServiceSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "../featured-client/page";
const ServiceSectionPage = async() => {
  const pageCont = await getPageBySlug("work-with-us")
  const images=await imageLink(pageCont?.acf?.image)
  const pageContent={...pageCont,image:images}

  return (
    <>
      <ScreenAnimation />
      <ServiceSection pageContent={pageContent?.acf}/>
    </>
  );
};

export default ServiceSectionPage;

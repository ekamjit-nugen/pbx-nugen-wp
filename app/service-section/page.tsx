import React from "react";
import ServiceSection from "../../components/homepage/ServiceSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getPageBySlug } from "@/lib/wordpress";
const ServiceSectionPage = async() => {
  const pageContent = await getPageBySlug("work-with-us")
  return (
    <>
      <ScreenAnimation />
      <ServiceSection pageContent={pageContent?.acf}/>
    </>
  );
};

export default ServiceSectionPage;

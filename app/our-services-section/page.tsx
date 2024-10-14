import React from "react";
import OurServicesSection from "../../components/homepage/OurServicesSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getPageBySlug } from "@/lib/wordpress";
import { ButtonData, ServicesData } from "../apiCall";

const OurServicesSectionPage = async () => {
  const pbxData =await ServicesData('services-section')
  const pbxContent = await getPageBySlug("services-section")
  const nugenData=await ServicesData('services-section-it')
  const nugenContent=await getPageBySlug('services-section-it')
  return (
    <>
      <ScreenAnimation />
      <OurServicesSection pbxData={pbxData} pbxContent={nugenContent?.acf} nugenContent={nugenContent?.acf} nugenData={nugenData}/>
    </>
  );
};

export default OurServicesSectionPage;

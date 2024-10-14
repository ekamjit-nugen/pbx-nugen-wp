import React from "react";
import FeaturedWorkSection from "../../components/homepage/FeaturedWorkSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getPageBySlug } from "@/lib/wordpress";
import { ButtonData, PagesData } from "../apiCall";
const FeaturedWorkSectionPage = async() => {
  const imagessss = await PagesData("work-section")
  const pbxContent=await  getPageBySlug("work-section")
  const nugenData=await PagesData("work-section-it")
  const nugenContent=await  getPageBySlug("work-section-it")

  return (  
    <>
      <ScreenAnimation />
      <FeaturedWorkSection pbxContent={imagessss} nugenContent={nugenData} nugenData={nugenContent?.acf} pbxData={pbxContent?.acf}/>
    </>
  );
};

export default FeaturedWorkSectionPage;

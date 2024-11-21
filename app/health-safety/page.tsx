import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import HealthAndSafetyContent from "@/components/homepage/HealthAndSafetyContent";
import { imageLink, PagesData } from "../apiCall";
import { getPageBySlug } from "@/lib/wordpress";
const FeaturedClientPage = async () => {
  const buttonData=await PagesData("health-safety-button")
  const healthData=await getPageBySlug("health-safety")
  const description=await PagesData("health-safety")
  const image=await imageLink(healthData?.acf?.image)
  const contentData={...healthData?.acf,image:image}
  return (
    <div>
      <ScreenAnimation />
      <HealthAndSafetyContent buttonData={buttonData} contentData={contentData} descriptionData={description}/>
    </div>
  );
};

export default FeaturedClientPage;

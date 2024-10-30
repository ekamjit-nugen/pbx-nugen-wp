import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import HealthAndSafetyContent from "@/components/homepage/HealthAndSafetyContent";
import { PagesData } from "../apiCall";
import { getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "../featured-client/page";
const FeaturedClientPage = async () => {
  const buttonData=await PagesData("health-safety")
  const healthData=await getPageBySlug("health-safety")
  const image=await imageLink(healthData?.acf?.image)
  const contentData={...healthData?.acf,image:image}
  return (
    <div>
      {/* <ScreenAnimation /> */}
      <HealthAndSafetyContent buttonData={buttonData} contentData={contentData}/>
    </div>
  );
};

export default FeaturedClientPage;

import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import HealthSafety from "@/components/homepage/healthAndSafety";
import { getPageBySlug } from "@/lib/wordpress";
import { PagesData } from "../apiCall";
const FeaturedClientPage = async () => {
  const pageContent=await getPageBySlug("health-safety")
  const Affilations=await PagesData("our-affilations")
  return (
    <div>
      {/* <ScreenAnimation /> */}
      <HealthSafety  pageContent={pageContent?.acf} affilations={Affilations}/>
    </div>
  );
};

export default FeaturedClientPage;

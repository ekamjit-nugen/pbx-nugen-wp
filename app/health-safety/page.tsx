import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import HealthSafety from "@/components/homepage/healthAndSafety";
import { getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";
import { PagesData } from "../apiCall";
import { imageLink } from "../featured-client/page";
const FeaturedClientPage = async () => {
  // const pageContent=await getPageBySlug("health-safety")
  // const Affilations=await PagesData("our-affilations")
  const PageContent = await getPageBySlug('home')
  const svgValue = await imageLink(PageContent?.acf?.svg)


  return (
    <div>
      {/* <ScreenAnimation /> */}
      {/* <HealthSafety  pageContent={pageContent?.acf} affilations={Affilations}/> */}
    </div>
  );
};

export default FeaturedClientPage;

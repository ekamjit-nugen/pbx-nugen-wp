import React from "react";
import SubscribeSection from "../../components/homepage/SubscribeSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";

const SubscribeSectionPage = async() => {
  const PageContent= await getPageBySlug('contact-us')
  return (
    <>
      <ScreenAnimation />
      <SubscribeSection props={PageContent?.acf}/>
    </>
  );
};

export default SubscribeSectionPage;

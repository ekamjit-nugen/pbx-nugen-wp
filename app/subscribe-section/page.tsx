import React from "react";
import SubscribeSection from "../../components/homepage/SubscribeSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "../featured-client/page";

const SubscribeSectionPage = async() => {
  const PageContent= await getPageBySlug('contact-us')
  const logo=await imageLink(PageContent?.acf?.footer_logo)
  // console.log(logo,"this is logo ...")
  const contactLogo=await imageLink(PageContent?.acf?.contact_image)
  const props={...PageContent?.acf,footer_logo:logo,contact_image:contactLogo}
  
  return (
    <>
      <ScreenAnimation />
      <SubscribeSection props={props}/>
    </>
  );
};

export default SubscribeSectionPage;

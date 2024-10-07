import React from "react";
import OurServicesSection from "../../components/homepage/OurServicesSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getAllCategories, getAllPosts, getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "../featured-client/page";

const OurServicesSectionPage = async () => {
  const servicesSection = await getAllCategories()
  const clientCategory = servicesSection.find((cat) => cat.name === "services-section") || { id: "1" };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => { return data.acf })
  const imagessss = await Promise.all(data.map(async (item) => {
    const value = await imageLink(item?.post_image);
    const postCategory = servicesSection.find((cat) => cat.name === item.cat) || { id: "1" };
    const postValue = await getAllPosts({ category: postCategory?.id.toString() });
    const innerContent = postValue.map((data) => { return data.acf })
    return { ...item, post_image: value, innerContent: innerContent };
  }));
  const pageContent = await getPageBySlug("services-section")
  return (
    <>
      <ScreenAnimation />
      <OurServicesSection props={imagessss} pageContent={pageContent?.acf} />
    </>
  );
};

export default OurServicesSectionPage;

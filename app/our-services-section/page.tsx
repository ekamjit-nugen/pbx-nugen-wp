import React from "react";
import OurServicesSection from "../../components/homepage/OurServicesSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getAllCategories, getAllPosts } from "@/lib/wordpress";

const OurServicesSectionPage = async() => {

  const servicesSection=await getAllCategories()
  const clientCategory = servicesSection.find((cat) => cat.name === "services-section") || { id: "1" };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => { return data.acf })
  return (
    <>
      <ScreenAnimation />
      <OurServicesSection />
    </>
  );
};

export default OurServicesSectionPage;

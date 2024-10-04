import React from "react";
import FeaturedWorkSection from "../../components/homepage/FeaturedWorkSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getAllCategories, getAllPosts, getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";
const FeaturedWorkSectionPage = async() => {
  const imageLink = async (id: number) => {
    const imagevalue = await getFeaturedMediaById(id)
    return imagevalue?.source_url
  }  
  const workSection=await getAllCategories()
  const clientCategory = workSection.find((cat) => cat.name === "work-section") || { id: "1" };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => { return data.acf })
  const imagessss = await Promise.all(data.map(async (item) => {
    const value = await imageLink(item?.post_image);
    return {...item,post_image:value};
  }));
  const pageValue=await  getPageBySlug("work-section")
  return (
    <>
      <ScreenAnimation />
      <FeaturedWorkSection props={imagessss} pageContent={pageValue?.acf}/>
    </>
  );
};

export default FeaturedWorkSectionPage;

import React from "react";
import { PagesData } from "../apiCall";
import HeroSection from "@/components/blog-nugen/HeroSection";
import BlogDescription from "@/components/blog-nugen/BlogDescription";
import BlogSideBar from "@/components/blog-nugen/BlogSideBar";
import RelaedPosts from "@/components/blog-nugen/RelaedPosts";
import ScreenAnimation from "../../components/ui/ThreeDMenu";

export default async function NugenBlog() {
  const data = await PagesData("access-to-expert-knowledge");
  const datalength = data?.length;
  const RelatedPost = await PagesData("blog");
  const socialData = await PagesData("social-media");

  return (
    <>
      <ScreenAnimation />
      <HeroSection data={data[datalength - 1]} />
      <div className="w-full flex flex-col mx-[auto] lg:flex-row">
        <div className="w-full p-8">
          <BlogDescription data={data} />
        </div>
        <div className="w-full p-2 lg:w-[60%]">
          <BlogSideBar socialData={socialData} />
        </div>
      </div>
      <RelaedPosts BlogData={RelatedPost} />
    </>
  );
}

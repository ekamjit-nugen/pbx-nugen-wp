import React from "react";
import { NugenPage, PagesData } from "../apiCall";
import BlogPage from "@/components/homepage/BlogPage";
import ScreenAnimation from "../../components/ui/ThreeDMenu";

export default async function NugenBlog() {
  const BlogData = await PagesData("blog");
  return (
    <>
      <ScreenAnimation />
      <BlogPage BlogData={BlogData} />
    </>
  );
}

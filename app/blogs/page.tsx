import React from "react";
import { NugenPage } from "../apiCall";
import BlogPage from "@/components/homepage/BlogPage";

export default async function NugenBlog() {
  const nugendata = await NugenPage("blog");
  console.log(nugendata, "nugenData");
  return (
    <>
      <BlogPage />
    </>
  );
}

import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import {
  getAllCategories,
  getAllPosts,
  getFeaturedMediaById,
  getPageBySlug,
} from "@/lib/wordpress";
import HealthSafety from "@/components/homepage/healthAndSafety";

export const imageLink = async (id: number) => {
  const imagevalue = await getFeaturedMediaById(id);
  return imagevalue?.source_url;
};
const FeaturedClientPage = async () => {
  const categories = await getAllCategories();
  const clientCategory = categories.find(
    (cat) => cat.name === "client-section"
  ) || { id: "1" };
  const posts = await getAllPosts({ category: clientCategory?.id.toString() });
  const data = posts.map((data) => {
    return data.acf;
  });
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = await imageLink(item?.post_image);
      return { ...item, post_image: value };
    })
  );
  const pageValue = await getPageBySlug("client-section");
  return (
    <div>
      <ScreenAnimation />
      <HealthSafety props={imagessss} pageContent={pageValue?.acf} />
    </div>
  );
};

export default FeaturedClientPage;

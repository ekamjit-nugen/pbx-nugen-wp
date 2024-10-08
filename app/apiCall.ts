import { getAllCategories, getAllPosts } from "@/lib/wordpress";
import { imageLink } from "./featured-client/page";

export const PagesData = async (category:string) => {
    const workSection = await getAllCategories()
    const clientCategory = workSection.find((cat) => cat.name === category) || { id: "1" };
    const posts = await getAllPosts({ category: clientCategory?.id.toString() });
    const data = posts.map((data) => { return data.acf })
    const imagessss = await Promise.all(data.map(async (item) => {
        const value = await imageLink(item?.post_image);
        return { ...item, post_image: value };
    }));
    return imagessss;
}

export const ServicesData = async (category:string) => {
    const servicesSection = await getAllCategories()
    const clientCategory = servicesSection.find((cat) => cat.name === category) || { id: "1" };
    const posts = await getAllPosts({ category: clientCategory?.id.toString() });
    const data = posts.map((data) => { return data.acf })
    const imagessss = await Promise.all(data.map(async (item) => {
      const value = await imageLink(item?.post_image);
      const postCategory = servicesSection.find((cat) => cat.name === item.cat) || { id: "1" };
      const postValue = await getAllPosts({ category: postCategory?.id.toString() });
      const innerContent = postValue.map((data) => { return data.acf })
      return { ...item, post_image: value, innerContent: innerContent };
    }));
    return imagessss;
}


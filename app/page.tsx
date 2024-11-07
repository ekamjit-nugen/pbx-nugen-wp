import HeroSection from "../components/homepage/HeroSection";
import Layout from "../components/Layout";
import ScreenAnimation from "../components/ui/ThreeDMenu";
import Topbar from "../components/Layout/Topbar";
import NavBar from "../components/Navbar";
import { getAllCategories, getAllPosts, getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "./featured-client/page";
const Home = async () => {
  const PageContent = await getPageBySlug('home')
  const logoLink = await getFeaturedMediaById(PageContent?.acf?.logo)
  const pageContents = { logo: logoLink?.source_url }
  const categories = await getAllCategories()
  const navBarCategory = categories.find((cat) => cat.name === "nav-bar") || { id: "1" };
  const posts = await getAllPosts({ category: navBarCategory?.id.toString() });
  const data = posts.map((data) => { return data.acf })
  const svgValue = await imageLink(PageContent?.acf?.svg)
  return (
    <Layout>
      <div
        id="content-id"
        className="bg-background dark:bg-slate-950 relative h-screen w-screen"
      > <ScreenAnimation/>
        <Topbar props={pageContents} />
        <HeroSection props={PageContent?.acf} svg={svgValue} />
        <NavBar menu={data} />
      </div>
    </Layout>
  );
};

export default Home;

import HeroSection from "../components/homepage/HeroSection";
import Layout from "../components/Layout";
import ScreenAnimation from "../components/ui/ThreeDMenu";
import Topbar from "../components/Layout/Topbar";
import NavBar from "../components/Navbar";
import { getAllCategories, getAllPosts, getFeaturedMediaById, getPageBySlug } from "@/lib/wordpress";
import { imageLink } from "./featured-client/page";
import HealthSafetyHome from "@/components/homepage/healthAndSafety";
import { PagesData } from "./apiCall";
import InterestedSection from "@/components/homepage/ServiceSection";
import CustomizeProject from "@/components/homepage/CustomizeProject";
const Home = async () => {
  const PageContent = await getPageBySlug('home')
  const logoLink = await getFeaturedMediaById(PageContent?.acf?.logo)
  const pageContents = { logo: logoLink?.source_url }
  const categories = await getAllCategories()
  const navBarCategory = categories.find((cat) => cat.name === "nav-bar") || { id: "1" };
  const posts = await getAllPosts({ category: navBarCategory?.id.toString() });
  const data = posts.map((data) => { return data.acf })
  const svgValue = await imageLink(PageContent?.acf?.svg)
  const pageContent = await getPageBySlug("health-safety")
  const Affilations = await PagesData("our-affilations")

  const pageCont = await getPageBySlug("work-with-us")
  const images=await imageLink(pageCont?.acf?.image)
  const ServicepageContent={...pageCont?.acf,image:images}
  return (
    <Layout>
      <div
        id="content-id"
        className="bg-background dark:bg-slate-950 relative h-full w-screen"
      > <ScreenAnimation/>
        <Topbar props={pageContents} />
        <HeroSection props={PageContent?.acf} svg={svgValue} />
        <HealthSafetyHome pageContent={pageContent?.acf} affilations={Affilations} />
        <CustomizeProject pageContent={ServicepageContent}/>
        <InterestedSection pageContent={ServicepageContent}/>
        <NavBar menu={data} />

      </div>
    </Layout>
  );
};

export default Home;

import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import ScreenAnimation from "../components/ui/ThreeDMenu";
import Topbar from "../components/Layout/Topbar";
import {
  getAllCategories,
  getAllPosts,
  getFeaturedMediaById,
  getPageBySlug,
} from "@/lib/wordpress";
import { imageLink, PagesData } from "./apiCall";

const HeroSection = dynamic(() => import("../components/homepage/HeroSection"), {
  ssr: false,
});
const HealthSafetyHome = dynamic(
  () => import("../components/homepage/healthAndSafety"),
  { ssr: false }
);
const InterestedSection = dynamic(
  () => import("../components/homepage/ServiceSection"),
  { ssr: false }
);
const CustomizeProject = dynamic(
  () => import("../components/homepage/CustomizeProject"),
  { ssr: false }
);
const NavBarSection = dynamic(
  () => import("../components/Navbar"),
  { ssr: false }
);

const Home = async () => {
  const PageContent = await getPageBySlug("home");
  const logoLink = await getFeaturedMediaById(PageContent?.acf?.logo);
  const pageContents = { logo: logoLink?.source_url };
  const categories = await getAllCategories();
  const navBarCategory =
    categories.find((cat) => cat.name === "nav-bar") || { id: "1" };
  const posts = await getAllPosts({ category: navBarCategory?.id.toString() });
  const data = posts.map((data) => data.acf);
  const svgValue = await imageLink(PageContent?.acf?.svg);
  const pageContent = await getPageBySlug("health-safety");
  const Affilations = await PagesData("our-affilations");

  const pageCont = await getPageBySlug("work-with-us");
  const images = await imageLink(pageCont?.acf?.image);
  const ServicepageContent = { ...pageCont?.acf, image: images };

  const customPro = await getPageBySlug("customize-project");
  const Customimages = await imageLink(customPro?.acf?.image);
  const CustomProject = { ...customPro?.acf, image: Customimages };

  return (
    <Layout>
      <div
        id="content-id"
        className="bg-background relative h-full w-screen"
      >
        <ScreenAnimation />
        <Topbar props={pageContents} />
        <HeroSection props={PageContent?.acf} svg={svgValue} />
        <HealthSafetyHome
          pageContent={pageContent?.acf}
          affilations={Affilations}
        />
        <CustomizeProject pageContent={CustomProject} />
        <InterestedSection pageContent={ServicepageContent} />
        <NavBarSection menu={data} />
      </div>
    </Layout>
  );
};

export default Home;

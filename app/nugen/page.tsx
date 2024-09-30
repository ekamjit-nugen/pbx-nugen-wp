import HeroSection from "../nugen/components/homepage/HeroSection";
import Layout from "../nugen/components/Layout";
import ScreenAnimation from "../nugen/components/ui/ThreeDMenu";
import Topbar from "../nugen/components/Layout/Topbar";
import NavBar from "./components/Navbar";

const Home = () => {
  return (
    <Layout>
      <div
        id="content-id"
        className="bg-background dark:bg-slate-950 relative h-screen overflow-hidden"
      >
        <Topbar />
        <HeroSection />
        <ScreenAnimation />
        <NavBar />

      </div>
    </Layout>
  );
};

export default Home;

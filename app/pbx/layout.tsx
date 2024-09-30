import Footer from "./components/footer";
import Header from "./components/header";

interface LayoutProps {
  children: React.ReactNode; // Define children type as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import CustomMarquee from "../ui/Marquee";
import ServiceCard from "../services/ServiceCard";
import ComputerIcon from "../../components/icons/png/computer.png";
// import AmazonIcon from "@/components/icons/png/chart.png";
import RocketIcon from "../../components/icons/png/rocket-icon.png";
import MobileIcon from "../../components/icons/png/mobile.png";
import SettingIcon from "../../components/icons/png/setting-icon.png";
import HtmlIcon from "../icons/Html";
import CssIcon from "../icons/Css";
import BootstrapIcon from "../icons/Bootstrap";
import { GoogleIcon, ReactIcon } from "../icons";
import PhpIcon from "../icons/Php";
import ExpressIcon from "../icons/Express";
import NodeIcon from "../icons/Node";
import TailwindIcon from "../icons/Tailwind";
import LighthouseIcon from "../icons/Lighthouse";
import MangoolsIcon from "../icons/Mangools";
// import AwsIcon from "../icons/Aws";
// import VercelIcon from "../icons/VercelIcon";
// import AzureIcon from "../icons/AzureIcon";
import AndroidStudio from "../icons/AndroidStudio";
interface ServicePropsType {
  header_title: string,
  header_description: string,
  animated_title: string,
  post_title: string,
  post_image: string,
  post_description: string,
  top_title: string,
  innerContent?:any
}
interface pageContentType {
  header_title: string,
  header_description: string,
  animated_title: string,
}
interface ServiceClientsProps {
  className?: string;
  props: ServicePropsType[],
  pageContent:pageContentType
}
const OurServicesSection: React.FC<ServiceClientsProps> = ({ className, props,pageContent }) => {
  const followHeadingRef = useRef(null);
  const ServiceCardsRef = useRef(null);
  const timeline = gsap.timeline({
    delay: 1.2,
  });
  let matchMediaToggler = gsap.matchMedia();

  useLayoutEffect(() => {
    matchMediaToggler.add("(max-width: 1023px)", () => {
      timeline.fromTo(
        followHeadingRef.current,
        {
          x: "-20%",
        },
        {
          x: "0%",
          stagger: 0.2,
          ease: "easeInOut",
        }
      );
      gsap.fromTo(
        ServiceCardsRef.current,
        {
          x: "-12%",
        },
        {
          x: "0%",
          ease: "easeInOut",
        }
      );
    });
    matchMediaToggler.add("(min-width: 1040px)", () => {
      timeline
        .fromTo(
          followHeadingRef.current,
          {
            x: "50%",
          },
          {
            x: "20%",
            stagger: 0.2,
            ease: "easeInOut",
          }
        )
        .fromTo(
          ServiceCardsRef.current,
          {
            x: "0%",
          },
          {
            x: "-40%",
            stagger: 0.2,
            duration: 1.5,
            ease: "easeInOut",
          }
        );
    });
  }, []);
  return (
    <section
      id="section-our-services-ref"
      className="trigger w-screen lg:h-screen h-full section-featured-ref overflow-hidden lg:p-8 relative lg:fixed top-0 left-0 z-10 bg-background lg:shadow-2xl"
    >
      <div
        className={`lg:grid lg:grid-cols-12 relative items-start w-full lg:h-screen h-full ${className}`}
      >
        <div className="pt-8 pb-4 w-full lg:absolute lg:bottom-0 lg:left-[7%] lg:-rotate-90 origin-bottom-left">
          <CustomMarquee title={pageContent?.animated_title} />
        </div>
        <div className="flex w-full flex-col gap-2 h-full col-span-11">
          <div
            className=" lg:w-4/5 p-4 flex flex-col lg:flex-row gap-2 lg:gap-8 items-center"
            ref={followHeadingRef}
          >
            <h3 className="uppercase text-2xl font-bold text-primary w-full">
              {pageContent?.header_title}
            </h3>
            <div className=" border-b border-foreground hidden lg:block" />
            <p className="text-foreground/80">
             {pageContent?.header_description}
            </p>
          </div>
        </div>
        <div className="lg:absolute lg:top-[15%] lg:left-1/2 w-[90%] lg:ml-10 ">
          <div
            className="flex flex-wrap lg:flex-nowrap gap-6 relative my-16  items-center justify-center lg:overflow-auto lg:w-full lg:right-40 lg:pl-96"
            ref={ServiceCardsRef}
          >
            {props?.map((value, index) => (
              <div key={index}>
                <ServiceCard index={index} {...value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServicesSection;

// const dummyData = [
//   {
//     icon: ComputerIcon,
//     icons: [
//       <HtmlIcon key={1} className={`h-12 w-full`} />,
//       <CssIcon key={2} className={`h-12 w-full`} />,
//       <BootstrapIcon key={3} className={`h-12 w-full`} />,
//       <ReactIcon key={4} className={`h-12 w-full`} />,
//       <TailwindIcon key={5} className={`h-12 w-full`} />,
//     ],
//     title: "WEB DESIGN / DEVELOPMENT",
//     subTitle: "CUSTOMIZED WEB DEVELOPMENT",
//     left: 10,
//     desc: "As a distinguished web development firm, we specialize in crafting web applications tailored to meet the unique business requirements of our valued clientele. Leveraging the expertise and experience of our developers, coupled with cutting-edge technology, we guarantee the delivery of robust web applications. Our comprehensive suite of web application services is designed to address all facets of your business needs, and our dedicated programmers consistently strive to excel in custom web application development.",
//     innerContent: [
//       {
//         title: "ESTABLISH YOUR PRESENCE",
//         subTitle: "WITH STATE-OF-THE-ART WEB APPLICATION DEVELOPMENT",
//         desc: "As a distinguished web development firm, we specialize in crafting web applications tailored to meet the unique business requirements of our valued clientele. Leveraging the expertise and experience of our developers, coupled with cutting-edge technology, we guarantee the delivery of robust web applications. Our comprehensive suite of web application services is designed to address all facets of your business needs, and our dedicated programmers consistently strive to excel in custom web application development.",
//       },
//       {
//         title: "RESULTS-DRIVEN WEBSITES",
//         subTitle: "GEARED TOWARDS ACHIEVING YOUR BUSINESS OBJECTIVES",
//         desc: "Our website design services seamlessly integrate the proficiency of an exceptional team, including project managers, graphic designers, web developers, content writers, and user experience consultants. This collaborative effort ensures the creation of an online solution meticulously tailored to the specific requirements of your company, with the ultimate goal of maximizing your business potential.",
//       },
//     ],
//   },
//   {
//     icon: MobileIcon,
//     icons: [
//       <AndroidStudio key={1} className={`w-full`} />,
//       <ReactIcon key={4} className={`w-full`} />,
//     ],
//     title: "Android & Ios / DEVELOPMENT",
//     subTitle: "CUSTOMIZED App Development",
//     left: 20,
//     desc: "Your aspirations deserve more than mere contemplation; they deserve a tangible presence on platforms like the Apple App Store and Google Play Store. Entrust your dream to our adept mobile app developers, who are committed to translating your vision into a reality that aligns with your specifications, budget, and timeline. The mobile apps we craft showcase only a fraction of the capabilities inherent in our mobile app development team. Drawing from extensive experience on numerous projects, we recognize the uniqueness of each app endeavor, warranting meticulous planning and research.",
//     innerContent: [
//       {
//         title: "TURN YOUR VISION INTO A DIGITAL REALITY",
//         subTitle: "EXPERT MOBILE APP DEVELOPMENT AT YOUR SERVICE",
//         desc: "Your aspirations deserve more than mere contemplation; they deserve a tangible presence on platforms like the Apple App Store and Google Play Store. Entrust your dream to our adept mobile app developers, who are committed to translating your vision into a reality that aligns with your specifications, budget, and timeline. The mobile apps we craft showcase only a fraction of the capabilities inherent in our mobile app development team. Drawing from extensive experience on numerous projects, we recognize the uniqueness of each app endeavor, warranting meticulous planning and research.",
//       },
//       {
//         title: "CATALYZING MOBILE APP INNOVATION",
//         subTitle: "FOR ENTREPRENEURS, STARTUPS & BUSINESSES",
//         desc: "From conceptualization to development, Nugen I.T. Services comprehensively covers the entire app development life cycle, addressing the diverse and intricate needs of our clients. Our proficiency in meeting your requirements emanates from a team of seasoned experts with extensive experience in global app solution services and product engineering industries.",
//       },
//     ],
//   },
//   {
//     icon: RocketIcon,
//     icons: [
//       <GoogleIcon key={1} className={`h-12 w-full`} />,
//       <LighthouseIcon key={2} className={`h-12 w-full`} />,
//       <MangoolsIcon key={3} className={`h-12 w-full`} />,
//     ],
//     title: "SEO Services",
//     subTitle: "OPTIMIZE YOUR WEBSITE",
//     left: 30,
//     desc: "Effective & Affordable SEO Service doesn’t just happen. There’s a long-term strategy to obtain the best results and continues to evolve with search engine metrics. When you’re working with SEO professionals, you will get a better quality result.",
//     innerContent: [
//       {
//         title: "SEO SERVICES",
//         subTitle: "ELEVATE YOUR ONLINE PRESENCE WITH STRATEGIC SEO SERVICES",
//         desc: "Achieving meaningful results through SEO requires more than chance; it demands a meticulously crafted, long-term strategy that adapts to the evolving landscape of search engine metrics. Our effective and affordable SEO services are designed to provide not just immediate outcomes, but sustainable success over time. Collaborating with seasoned SEO professionals ensures a superior quality of results, extending beyond the inclusion of keywords within content or driving general traffic to your site. Instead, our focus is on cultivating relevant traffic that aligns seamlessly with your business objectives.",
//       },
//       {
//         title: "DRIVE LEADS AND ENHANCE SALES",
//         subTitle: "OPTIMIZE YOUR ONLINE SPACE",
//         desc: "For online businesses seeking growth, our SEO services play a pivotal role in shaping an effective marketing strategy. In the contemporary digital landscape, securing a prominent position on search engine results is integral to capturing the attention of online consumers. We specialize in optimizing websites to maximize organic traffic from search engines, ensuring that your business is prominently featured for the audience actively seeking the products or services you offer. Partner with us to transform your online presence and propel your business towards sustained success.",
//       },
//     ],
//   },
//   // {
//   //   icon: AmazonIcon,
//   //   icons: [
//   //     <AwsIcon key={1} className={`h-16 w-16`} />,
//   //     <VercelIcon key={2} className={`w-40`} />,
//   //     <AzureIcon key={3} className="w-20" />,
//   //   ],
//   //   title: "Amazon Web Services",
//   //   subTitle: "cloud deployment",
//   //   left: 40,
//   //   desc: "Nugen I.T. Services stands as a premier provider of AWS cloud deployment services, offering a blend of flexibility, reliability, and scalability tailored to meet the diverse needs of our clients. As a strategic partner with Amazon Cloud Service, we empower enterprises and businesses by facilitating the seamless deployment, migration, and maintenance of cloud infrastructure for storage, computing, processing, and other essential requirements. Our team of seasoned AWS architects has successfully executed the deployment of numerous mobile and web applications across various industries on the AWS cloud platform.",
//   //   innerContent: [
//   //     {
//   //       title: "DRIVE BUSINESS EXPANSION",
//   //       subTitle: "THROUGH OUR ADVANCED AWS CLOUD DEPLOYMENT SERVICES",
//   //       desc: "Nugen I.T. Services stands as a premier provider of AWS cloud deployment services, offering a blend of flexibility, reliability, and scalability tailored to meet the diverse needs of our clients. As a strategic partner with Amazon Cloud Service, we empower enterprises and businesses by facilitating the seamless deployment, migration, and maintenance of cloud infrastructure for storage, computing, processing, and other essential requirements. Our team of seasoned AWS architects has successfully executed the deployment of numerous mobile and web applications across various industries on the AWS cloud platform.",
//   //     },
//   //     {
//   //       title: "UNLEASH BUSINESS POTENTIAL",
//   //       subTitle: "ON THE CLOUD WITH OUR EXEMPLARY SERVICES",
//   //       desc: "In the realm of software systems, constructing a solid foundation is akin to the critical phase of building construction. An inefficient system can emerge when foundational elements are neglected. Recognizing this principle, our exceptional AWS cloud deployment services are designed to ensure a robust and reliable foundation for your technology solutions. Partner with us to unlock the full potential of your business on the cloud, with our commitment to delivering excellence in every aspect of deployment, from architecture to implementation.",
//   //     },
//   //   ],
//   // },
//   {
//     icon: SettingIcon,
//     icons: [
//       <PhpIcon key={1} className={`h-16 w-16`} />,
//       <ExpressIcon key={2} className={`h-16 w-16`} />,
//       <NodeIcon key={3} className={`h-16 w-16`} />,
//     ],
//     title: "BACK-END/ DEVELOPMENT",
//     subTitle: "Customized Back-End Development",
//     left: 50,
//     desc: "Our back-end development services encompass the creation and maintenance of server-side logic, databases, and application architecture. We leverage the latest programming languages and frameworks to build scalable, secure, and efficient solutions tailored to meet your specific business needs.",
//     innerContent: [
//       {
//         title: "ESTABLISHING EXCELLENCE",
//         subTitle: "CUSTOMIZED BACK-END DEVELOPMENT SERVICES",
//         desc: "Embark on a journey towards digital excellence with our meticulously crafted Back-End Development services. Uncover unparalleled expertise that propels seamless functionality, robust databases, and dynamic server-side solutions. From architecting scalable frameworks to optimizing performance, our team of skilled developers is committed to forging the cornerstone of your digital triumph",
//       },
//       {
//         title: "EFFICIENT BACK-END SOLUTIONS",
//         subTitle: "STREAMLINING DEVELOPMENT FOR PEAK PERFORMANCE",
//         desc: "Immerse yourself in the efficiency of our Back-End Solutions, where we prioritize streamlined development for enhanced performance. Encounter the simplicity of robust digital solutions meticulously tailored to meet your unique requirements. Elevate your projects with our straightforward approach to Back-End Development – where simplicity meets power. Opt for simplicity, choose success.",
//       },
//     ],
//   },
// ];

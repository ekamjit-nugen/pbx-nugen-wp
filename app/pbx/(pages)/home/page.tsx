"use client"
import React from "react";
import Services from "./services";
import Feedback from "./feedback";
import "./index.css";
import Features from "./features";
import AboutCompanyBottom from "./aboutCompanyBottom";
import AboutCompany from "./aboutCompany";
import News from "./news";
import Banner from "./banner";
/* import AboutHome from "./aboutHome"; */
import HealthSafetyHome from "./HealthSafetyHome";
import Images from "./images";
/* import { Blogdata } from "../../helpers" */

const Home = () => {
  return (
    <>
      <Banner />
      <AboutCompany headingS={true}/>

      {/*  <AboutHome /> */}
      <Services />
      {/*   <Feedback /> */}
      <Features heading={true} />

      <HealthSafetyHome heading={true} headingS={false} />
      <AboutCompanyBottom />
      {/*  <News BlogData={Blogdata} limit={3} useFlexWrap={false}/> */}
      <Images />
      </>
  );
};

export default Home;

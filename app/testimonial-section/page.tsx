import React from "react";
import TestiomonialSection from "../../components/homepage/TestiomonialSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { PagesData } from "../apiCall";

const TestiomonialSectionPage = async () => {
  const testimonialData= await PagesData("testimonial-section")
  const testimonialData2=await PagesData("testimonial-section-2")
  return (
    <>
      <ScreenAnimation />
      <TestiomonialSection testimonialData={testimonialData} testimonialData2={testimonialData2}/>
    </>
  );
};

export default TestiomonialSectionPage;

import React from "react";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { ButtonData } from "../apiCall";
import OurServices from "@/components/homepage/OurServices";

const OurServicesSectionPage = async () => {
  const buttonData = await ButtonData("buttons-services")
  console.log(buttonData,"this is button data...")
  return (
    <>
      <ScreenAnimation />
      <OurServices buttonData={buttonData} />
    </>
  );
};

export default OurServicesSectionPage;

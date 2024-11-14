import React from "react";
import { ServicesData } from "../apiCall";
import { getPageBySlug } from "@/lib/wordpress";
import OurServicesSection from "@/components/homepage/OurServicesSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";

export default async function WorkService() {
  const nugenData = await ServicesData("services-section-it");
  const nugenContent = await getPageBySlug("services-section-it");
  return (
    <div className="overflow-auto">
      <ScreenAnimation />
      <OurServicesSection
        nugenContent={nugenContent?.acf}
        nugenData={nugenData}
      />
    </div>
  );
}

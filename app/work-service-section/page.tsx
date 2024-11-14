import React from "react";
import { PagesData } from "../apiCall";
import { getPageBySlug } from "@/lib/wordpress";
import FeaturedWorkSection from "@/components/homepage/FeaturedWorkSection";
import ScreenAnimation from "../../components/ui/ThreeDMenu";

export default async function WorkService() {
  const nugenDataWork = await PagesData("work-section-it");
  const nugenContentWork = await getPageBySlug("work-section-it");
  return (
    <div className="overflow-y-hidden">
      <ScreenAnimation />
      <FeaturedWorkSection
        nugenContent={nugenDataWork}
        nugenData={nugenContentWork?.acf}
      />
    </div>
  );
}

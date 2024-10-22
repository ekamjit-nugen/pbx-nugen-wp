import React from 'react'
import { PagesData, ServicesData } from '../apiCall'
import { getPageBySlug } from '@/lib/wordpress'
import FeaturedWorkSection from '@/components/homepage/FeaturedWorkSection'
import OurServicesSection from '@/components/homepage/OurServicesSection'

export default async function WorkService() {
    const imagessssWork = await PagesData("work-section")
    const pbxContentWork=await  getPageBySlug("work-section")
    const nugenDataWork=await PagesData("work-section-it")
    const nugenContentWork=await  getPageBySlug("work-section-it")


    const pbxData =await ServicesData('services-section')
    const pbxContent = await getPageBySlug("services-section")
    const nugenData=await ServicesData('services-section-it')
    const nugenContent=await getPageBySlug('services-section-it')
  return (
    <div className='overflow-auto'>
      {/* <FeaturedWorkSection pbxContent={imagessssWork} nugenContent={nugenDataWork} nugenData={nugenContentWork?.acf} pbxData={pbxContentWork?.acf}/> */}
      <OurServicesSection pbxData={pbxData} pbxContent={nugenContent?.acf} nugenContent={nugenContent?.acf} nugenData={nugenData}/>
    </div>
  )
}

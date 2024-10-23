import React from 'react'
import { ServicesData } from '../apiCall'
import { getPageBySlug } from '@/lib/wordpress'
import OurServicesSection from '@/components/homepage/OurServicesSection'

export default async function WorkService() {
    const pbxData =await ServicesData('services-section')
    const nugenData=await ServicesData('services-section-it')
    const nugenContent=await getPageBySlug('services-section-it')
  return (
    <div className='overflow-auto'>
      <OurServicesSection pbxData={pbxData} pbxContent={nugenContent?.acf} nugenContent={nugenContent?.acf} nugenData={nugenData}/>
    </div>
  )
}

import React from 'react'
import { PagesData } from '../apiCall'
import { getPageBySlug } from '@/lib/wordpress'
import FeaturedWorkSection from '@/components/homepage/FeaturedWorkSection'

export default async function WorkService() {
    const imagessssWork = await PagesData("work-section")
    const pbxContentWork=await  getPageBySlug("work-section")
    const nugenDataWork=await PagesData("work-section-it")
    const nugenContentWork=await  getPageBySlug("work-section-it")
  return (
    <div className='overflow-auto'>
      <FeaturedWorkSection pbxContent={imagessssWork} nugenContent={nugenDataWork} nugenData={nugenContentWork?.acf} pbxData={pbxContentWork?.acf}/>
    </div>
  )
}

import OurProjects from '@/components/homepage/OurProjects'
import React from 'react'
import { ButtonData } from '../apiCall'
import ScreenAnimation from '../../components/ui/ThreeDMenu'
export default async function Projects() {
  const buttonData=await ButtonData("buttons")
  return (
    <div>
      <ScreenAnimation/>
      <OurProjects buttonData={buttonData}/>
    </div>
  )
}

import OurProjects from '@/components/homepage/OurProjects'
import React from 'react'
import { ButtonData } from '../apiCall'

export default async function Projects() {
  const buttonData=await ButtonData("buttons")
  return (
    <div>
      <OurProjects buttonData={buttonData}/>
    </div>
  )
}

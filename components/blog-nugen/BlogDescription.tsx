import React from 'react'
import { HeroSectionType } from './HeroSection'
interface BlogDescriptionType {
  data: HeroSectionType[]
}
const BlogDescription: React.FC<BlogDescriptionType> = ({ data }) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        data?.map((value) => {
          return <>
            {value?.post_image === undefined &&
              <>
                <div className="">
                  <div className=" text-2xl lg:text-3xl  font-bold pb-2">{value?.post_title}</div>
                  <div className="text-base">{value?.post_description}</div>
                </div>
              </>
            }
          </>
        })
      }
    </div>
  )
}
export default BlogDescription

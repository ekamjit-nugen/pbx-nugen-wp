"use client"
import React from 'react'
interface nugenDataType {
  data?: any
}
const NugenData: React.FC<nugenDataType> = ({ data }) => {

  {/* <div className='p-4' dangerouslySetInnerHTML={{ __html: data }} /> */}
  return (
    <>
    <div className="relative w-full h-[500px] flex py-20">
      <div className="absolute top-0 w-[50%] bg-[#111827] h-full z-10 rounded-r-3xl"></div>
      <div className=" w-full z-20 flex justify-center h-full">
        <div className="w-[70%] p-4 text-white flex flex-col gap-4 pl-32">
          <div className="flex gap-2">
            <button className='w-fit rounded-full border-2 border-white px-2'>Tools</button>
            <button className='w-fit rounded-full border-2 border-white px-2'>Video</button>
          </div>
          <div className="text-white text-3xl">To cool datacenter servers, Microsoft turns to boiling liquid Donec quis</div>
          <div className="text-white">Immerse yourself in the world of literature with our curated collection of books. From</div>
        </div>
        <div className="w-full h-full border-4 border-white-700 rounded-3xl mr-32">

        </div>
      </div>
    </div>
    </>
  )
}

export default NugenData 

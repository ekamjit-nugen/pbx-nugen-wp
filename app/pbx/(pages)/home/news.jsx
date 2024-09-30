import React from "react";
import { ImBlogger } from "react-icons/im";

export default function News({ BlogData, limit, headingT, useFlexWrap }) {
  const limitedData = BlogData.slice(0, limit);

  return (
    <div className="container mx-auto xl:px-4 sm:px-8 px-4 lg:py-[120px] md:py-[80px] py-[60px]">
      <div
        className={`${
          headingT ? "hidden" : "block"
        } text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px] font-bold text-center pb-5`}>
        Our Blog
      </div>
      <div
        className={`  ${
          useFlexWrap ? "flex flex-wrap" : "flex lg:flex-nowrap flex-wrap  "
        }  justify-center md:items-stretch lg:gap-5 gap-3`}>
        {limitedData.map((data, i) => {
          return (
            <div
              className="col-end h-auto  bg-[#fafafa] lg:w-2/6 md:w-[48%] w-full  shadow-lg min-w-[280px] text-black   border-none mr-2 lg:my-8 my-3 hover:shadow-lg  rounded-b-[10px]"
              key={i}>
              <div className="flex justify-center ">
                <img
                  src={data.img}
                  className="h-[20rem] w-[22rem] rounded-t-[10px]"
                  alt="background"></img>
              </div>
              <div className="flex justify-center relative">
                <div
                  className={`h-[60px] w-[60px] rounded-[55%] px-2 absolute bottom-[-30px] bg-[${data.boxColor}]`}>
                  <ImBlogger
                    color="#ffffff"
                    className="absolute top-[25%] left-[25%]"
                    size={30}
                  />
                  <div
                    className={`my-designF relative before:border-2 before:border-dashed before:border-[${data.boxColor}]`}></div>
                </div>
              </div>
              <ul className="list-image-none flex justify-start xl:text-[15px] sm:text-[14px] text-[13px]  text-slate-500 pb-1 pt-10 px-4">
                <li>{data.post}</li>
                <li className="px-4">{data.sign}</li>
                <li>{data.tag}</li>
              </ul>
              <div className="px-4 py-2 pb-6 text-[20px] font-medium ">
                <a href="/" className="text-ellipsis overflow-hidden">
                  {data.a}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

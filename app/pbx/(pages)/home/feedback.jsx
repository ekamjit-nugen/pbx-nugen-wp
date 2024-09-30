import React from "react";
import FeedbackBanner from "../../assets/feedback-bg.png";
import { feedbackData } from "../../helpers";

const Feedback = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${FeedbackBanner})` }}
        className="relative feedback feedback-section-bg"
      >
        <div className="feedback-inner-box my-[60px] py-[60px] text-white relative">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className=" max-w-[600px] mb-[50px]">
              <h1 className="text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px] font-bold text-center pb-5">
                Our Client Feedback
              </h1>
              <p className="text-lg lg:text-[22px] font-normal text-center">
                Donec interdum metus et hendrerit aliquet dolor diam satis
                ligula eget egestas libero turpis velmi Nunc nulla.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              {feedbackData?.map((value, i) => (
                <div
                  key={i}
                  className="w-full sm:w-3/6 lg:w-2/6 flex flex-col justify-center items-center mt-[48px] px-[24px]"
                >
                  <div
                    className={`h-[60px]  w-[60px] rounded-[10px] bg-[${value.boxColor}] origin-center rotate-45 mt-[30px] mb-[10px]`}
                  ></div>
                  <h1 className="font-medium text-xl">{value.name}</h1>
                  <p className="text-base  lg:text-[18px]  font-normal">
                    {value.role}
                  </p>
                  <p className="text-[15px] md:text-[18px] lg:text-xl xl:text-[24px] font-normal italic text-center mt-[30px]">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;

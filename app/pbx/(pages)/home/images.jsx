import React from "react";
import CwLogoImg from "../../assets/cwlogo.webp";
import AvettaImg from "../../assets/avetta.png";
import WsibImg from "../../assets/WSIB.png";
import SapImg from "../../assets/sapp.png";

const allImages = [
  {
    name: "Avetta",
    image: AvettaImg,
  },
  {
    name: "CW",
    image: CwLogoImg,
  },
  {
    name: "wsib",
    image: WsibImg,
  },
  {
    name: "sap",
    image: SapImg,
  },
];

const Images = () => {
  return (
    <div>
      <div className="row flex about-us justify-center bg-[#080c3c] ">
        <h3 className="font-semibold text-my-headingT font-serif  text-white py-[30px]">
          Our Affilations
        </h3>
      </div>

      <div className="flex justify-center items-center gap-5 md:gap-16 py-8 ">
        {allImages.map((imageObj) => (
          <img
            alt={imageObj?.name}
            key={imageObj?.name}
            src={imageObj?.image}
            className={`sm:w-[3rem] md:w-[11rem] w-[4rem]`}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;

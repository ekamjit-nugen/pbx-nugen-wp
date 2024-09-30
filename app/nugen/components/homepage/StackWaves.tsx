"use client"
import React, { useEffect, useLayoutEffect, useRef } from "react";
import WaveIcon from "../icons/Wave";
import WaveIcon2 from "../icons/Wave2";
import gsap from "gsap";

const StackWaves = () => {
  const waveOne = useRef(null);
  const waveTwo = useRef(null);

  useEffect(() => {
    gsap.to(waveOne.current, {
      x: 100,
      yoyo: true,
    });
    gsap.to(waveTwo.current, {
      x: -100,
      yoyo: true,
    });
  }, []);
  return (
    <>
      <div ref={waveOne}>
        <WaveIcon className="absolute -top-0" />
      </div>
      <div ref={waveTwo}>
        <WaveIcon2 className="absolute -top-0 " />
      </div>
    </>
  );
};

export default StackWaves;

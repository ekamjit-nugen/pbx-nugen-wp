"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";

type HeroImageSVGProps = {
  width?: string;
  height?: string;
};

const StringSVG = ({ width, height }: HeroImageSVGProps) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#string-id",
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <svg
      ref={svgRef}
      width="1244"
      height="4226"
      viewBox="0 0 1244 4226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="string-id"
        d="M118.093 2V40.6617C118.093 65.75 114.461 90.7062 107.312 114.754L73.624 228.068C44.8572 324.829 77.7379 429.364 156.716 492.234V492.234C192.326 520.582 235.063 538.561 280.229 544.194L1019.44 636.394C1113.13 648.078 1183.44 727.707 1183.44 822.117V822.117C1183.44 900.037 1135.17 969.805 1062.25 997.269L93.7525 1362.03C38.5477 1382.82 2 1435.64 2 1494.63V1494.63C2 1572.88 65.4383 1636.32 143.694 1636.32H1191.94C1217.54 1636.32 1231.38 1666.33 1214.75 1685.8L1104.09 1815.41C1092.85 1828.56 1095.04 1848.47 1108.87 1858.86L1229.53 1949.62C1244.06 1960.55 1245.61 1981.78 1232.82 1994.7L1106.08 2122.7C1093.81 2135.09 1094.66 2155.3 1107.91 2166.62L1230.38 2271.23C1244.37 2283.18 1244.4 2304.8 1230.45 2316.79L1109.35 2420.89C1095.59 2432.71 1095.39 2453.95 1108.93 2466.03L1223.67 2568.35C1239.58 2582.54 1236.03 2608.33 1216.88 2617.69L1118.21 2665.92C1100.58 2674.54 1095.84 2697.5 1108.62 2712.41L1220.15 2842.42C1235.82 2860.69 1224.67 2889.05 1200.75 2891.76L335.793 2989.83C204.374 3004.72 105.082 3115.73 105.082 3248C105.082 3273.77 105.082 3302.38 105.082 3334.13C105.082 3625.89 345 3738.95 410.5 3641.09C476 3543.23 426 3459.08 370.5 3424.7C348.633 3411.16 317.243 3413.62 287.229 3421.58C231.549 3436.35 207.187 3497.31 220.43 3553.37V3553.37C247.37 3667.41 365.175 3734.86 477.162 3700.36L782.017 3606.44C979.516 3545.6 1184.83 3674.92 1215.25 3879.33V3879.33C1223.93 3937.64 1167.13 3984.04 1111.73 3963.9L1007.12 3925.89C832.685 3862.49 641.525 3850.66 467.322 3914.69C387.24 3944.13 310.352 3977.46 270.214 4008.52C164.129 4090.6 143.112 4224 143.112 4224"
        stroke="#d4f6ff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default StringSVG;
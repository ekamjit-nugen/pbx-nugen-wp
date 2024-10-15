import gsap from "gsap";
import { useLayoutEffect } from "react";
import Icon from '../../icons/icon'
const HeroImageSVGRight = ({ svg }: any) => {
  const duration = 1;
  useLayoutEffect(() => {

    const pathTL = gsap.timeline([])

    pathTL.fromTo("#path1", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo(["#path2", "#path3"], {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo(["#path4", "#path5"], {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })



    pathTL.fromTo("#path6", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })
    pathTL.fromTo("#path7", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path8", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path9", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path10", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path11", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path12", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path13", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })

    pathTL.fromTo("#path14", {
      strokeDashoffset: 500,
      strokeDasharray: 500,
    }, {
      strokeDashoffset: 0,
      duration: duration,
    })
  }, [])
  return (
    <>
      <svg width="1891" height="732" viewBox="0 0 1891 732" fill="none">
        <path id="path1" d="M150 586H87C61.5949 586 41 565.405 41 540V480.5C41 455.095 61.5949 434.5 87 434.5H121.5C146.905 434.5 167.5 413.905 167.5 388.5V317" stroke="black" strokeWidth="4" />
        <path id="path2" d="M209 293H376C401.405 293 422 272.405 422 247V147" stroke="black" strokeWidth="4" />
        <path id="path3" d="M212 294H368.038C392.642 294 412.89 313.361 413.991 337.94L420 472" stroke="black" strokeWidth="4" />
        <path id="path4" d="M429 132H573.5C598.905 132 619.5 152.595 619.5 178V348" stroke="black" strokeWidth="4" />
        <path id="path5" d="M465.5 488H580C604.853 488 625 467.853 625 443V388.5" stroke="black" strokeWidth="4" />
        <path id="path6" d="M623 366H663.46C687.884 366 708.049 385.088 709.39 409.475L712.61 468.025C713.951 492.412 734.116 511.5 758.54 511.5H896" stroke="black" strokeWidth="4" />
        <path id="path7" d="M897 503.5V315.5" stroke="black" strokeWidth="4" />
        <path id="path8" d="M943.5 290.5H992C1016.85 290.5 1037 310.647 1037 335.5V345C1037 369.853 1057.15 390 1082 390H1117.5C1142.35 390 1162.5 369.853 1162.5 345V290.5" stroke="black" strokeWidth="4" />
        <path id="path9" d="M1157 270V117C1157 92.1472 1136.85 72 1112 72H852" stroke="black" strokeWidth="4" />
        <path id="path10" d="M808 79H758C733.147 79 713 99.1472 713 124V247C713 271.853 733.147 292 758 292H837.5" stroke="black" strokeWidth="4" />
        <path id="path11" d="M1177 288H1226C1251.41 288 1272 308.595 1272 334V454.5" stroke="black" strokeWidth="4" />
        <path id="path12" d="M1295 510H1384.5C1409.91 510 1430.5 489.405 1430.5 464V396" stroke="black" strokeWidth="4" />
        <path id="path13" d="M1436 366V256C1436 230.595 1456.59 210 1482 210H1586" stroke="black" strokeWidth="4" />
        <path id="path14" d="M1658.5 286V335C1658.5 359.853 1678.65 380 1703.5 380H1743.5C1768.35 380 1788.5 400.147 1788.5 425V558" stroke="black" strokeWidth="4" />
      <Icon/>
      </svg>
    </>
  );
};

export default HeroImageSVGRight;

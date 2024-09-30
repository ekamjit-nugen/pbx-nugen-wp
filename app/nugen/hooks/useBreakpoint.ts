"use client"
import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState<number>();
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (windowSize.width < 600) {
      setBreakPoint(windowSize.width);
    }
    if (windowSize.width < 960) {
      setBreakPoint(windowSize.width);
    }
    if (windowSize.width < 1024) {
      setBreakPoint(windowSize.width);
    }
    if (windowSize.width < 1920) {
      setBreakPoint(windowSize.width);
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(windowSize.width);
    }

    // return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;

const breakpoints = {
  0: "xs",
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};

import dynamic from "next/dynamic";
import {useRouter, useSearchParams } from "next/navigation";
import React from "react";
const searchParams = useSearchParams()
const search = searchParams?.get('id')
const Cubic = dynamic(
  () => import("../components/3d/index").then((module) => module.default),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading...</div>,
  }
);

const Navigation = () => {
  const router = useRouter();
  // console.log("router", router);
  return <p>Post: {search}</p>; 
};

export default Navigation;

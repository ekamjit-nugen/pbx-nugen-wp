"use client";
import React, { useState } from "react";
import gsap from "gsap";
// import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
// import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { Button } from "./ui";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
// import {useRouter } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../components/ui/drawer";
import useBreakpoint from "../hooks/useBreakpoint";

import { usePathname, useRouter } from "next/navigation";
// gsap.registerPlugin(ScrollToPlugin, ScrollSmoother);

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);
  const breakpoint = useBreakpoint();
  const [btnStatus, setbtnStatus] = useState(false);
  const handleNavigation = (path?: any) => {
    setToggle(false);
    setbtnStatus(true);
    if (path == pathname) {
      router.push(path);
      setbtnStatus(false);
    } else {
      gsap.fromTo(
        ".item",
        {
          y: "-100%"
        },
        {
          y: "0%",
          stagger: 0.2
        }
      );
      setTimeout(() => {
        router.push(path);
      }, 1500);

      setTimeout(() => {
        setbtnStatus(false);
      }, 3000);
    }
  };

  return (
    <>
      {breakpoint && breakpoint > 1039 ? (
        <div className="fixed bottom-4 z-[99990] lg:flex justify-center w-full px-3">
          <div
            className="w-auto relative md:flex bg-foreground/40 backdrop-blur-xl border border-background md:p-4 rounded-2xl z-50"
            id="nav"
          >
            <NavbarItems
              btnStatus={btnStatus}
              onClick={(e) => handleNavigation(e)}
            />
          </div>
        </div>
      ) : (
        <div className="fixed right-0 bottom-5 flex justify-end px-3 z-50 h-12 w-12">
          <Drawer open={toggle} onClose={() => setToggle(false)}>
            <DrawerTrigger>
              <button
                onClick={() => setToggle(true)}
                className="ml-auto bg-foreground/60 backdrop-blur-xl border border-background p-4 rounded-2xl text-white active:bg-foreground active:text-primary transition-all"
              >
                <HamburgerMenuIcon width={20} height={20} />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-left border-b-2 pb-4 px-4 flex justify-between items-center">
                  Menu
                  <DrawerClose
                    onClick={() => setToggle(false)}
                    className="p-1 rounded-full bg-slate-800/20"
                  >
                    <Cross2Icon />
                  </DrawerClose>
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-4 px-4 pb-8">
                <NavbarItems
                  btnStatus={btnStatus}
                  onClick={(e) => handleNavigation(e)}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default NavBar;

const NavbarItems = ({
  btnStatus,
  onClick
}: {
  btnStatus: boolean;
  onClick: (e: string) => void;
}) => {
  return (
    <>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/")}
        disabled={btnStatus}
      >
        Home
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/featured-client")}
        disabled={btnStatus}
      >
        Clients
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/featured-work-section")}
        disabled={btnStatus}
      >
        Work
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/our-services-section")}
        disabled={btnStatus}
      >
        Services
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/testimonial-section")}
        disabled={btnStatus}
      >
        TESTIMONIALS
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/service-section")}
        disabled={btnStatus}
      >
        Work with US
      </Button>
      <Button
        className="px-4 md:px-8 uppercase max-md:text-black hover:text-white active:text-white"
        variant="ghost"
        onClick={() => onClick("/subscribe-section")}
        disabled={btnStatus}
      >
        Contact Us
      </Button>
    </>
  );
};

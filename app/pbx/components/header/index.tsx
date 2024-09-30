'use client';
import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderLogo from "../../assets/logoBlack.png";
import Link from "next/link"; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative z-0 border-none">
      <nav
        className="mx-auto container flex items-center justify-between p-6 lg:px-8 z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 relative">
          <Link href="/" passHref>
            <span className="sr-only">Your Company</span>
            <Image
              className="md:h-[55px] h-12 w-auto relative"
              src={HeaderLogo}
              alt="header logo"
              width={230} 
              height={55}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open Close menu</span>
            {!mobileMenuOpen ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 justify-center items-center">
          <Link href="/" className="text-large font-extrabold leading-6 text-gray-900 headHover">Home</Link>
          <Link href="/about" className="text-large font-extrabold leading-6 text-gray-900 headHover">About us</Link>
          <Link href="/services" className="text-large font-extrabold leading-6 text-gray-900 headHover">Our Services</Link>
          <Link href="/our-projects" className="text-large font-extrabold leading-6 text-gray-900 headHover">Our Projects</Link>
          <Link href="/health-safety" className="text-large font-extrabold leading-6 text-gray-900 headHover">Health & Safety</Link>
          <Link href="/contact" className="text-large font-extrabold leading-6 text-gray-900 headHover">Contact Us</Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="right-0 w-full overflow-y-auto px-6 py-6 absolute top-20 bg-[#080c3c] z-10">
          <div className="flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">Home</Link>
                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">About us</Link>
                <Link href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">Our Services</Link>
                <Link href="/our-projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">Our Projects</Link>
                <Link href="/health-safety" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">Health & Safety</Link>
                <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">Contact Us</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Header;

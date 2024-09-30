'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { MobileIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../../components/ui/ThemeToggler";
import { QueryForm } from "../QueryForms";
import NugenLogoBlack from "../icons/png/nugen-logo-black.png";
import NugenLogoWhite from "../icons/png/nugen-logo-white.png";

const Topbar = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="w-full left-0 top-0 h-auto z-[80] relative"
      id="layout-wrapper"
    >
      <div className="fixed bg-slate-800 h-2 w-screen bottom-0">
        <div
          id="page-loading-width"
          className="origin-top-left fixed bottom-0 left-0 w-[102%] bg-primary h-2"
        />
      </div>
      <div className="flex justify-between py-4 px-4 md:px-32">
        <div className="w-6/12">
          <Image
            src={resolvedTheme === "dark" ? NugenLogoWhite : NugenLogoBlack}
            alt=""
            height={80}
            width={200}
          />
        </div>
        <div className="flex gap-2 items-center">
          <QueryForm
            buttonTitle={
              <>
                <div>
                  <MobileIcon />
                </div>
                <>Book a Call</>
              </>
            }
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

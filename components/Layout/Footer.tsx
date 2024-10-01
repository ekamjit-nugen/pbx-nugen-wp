import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../components/icons";
import NugenLogoWhite from "../icons/png/nugen-logo-white.png";
import EmailIcon from "../icons/Email";
import UpWorkIcon from "../icons/UpWork";
import PhoneIcon from "../icons/Phone";
import useSize from "../windowSize";

const Footer = () => {
  const size = useSize();

  return (
    <div className={`bg-black h-auto w-screen pb-20 lg:pb-2 lg:fixed bottom-0 left-0 z-10 ${size && size > 1300 ? "pt-5" : "pt-10"}`}>
      <div className={`container mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10 md:gap-5 border-b border-white/25  ${size && size > 1300 && size < 1400  ? "pb-5" : "pb-16"}`}>
        <div className="w-full md:w-1/2 flex flex-col gap-3 items-start">
          <div className="text-center md:text-left flex flex-col md:items-start items-center justify-center gap-3 text-white">
            <Image src={NugenLogoWhite} alt="" height={80} width={200} />
            <div className="w-full md:w-1/1">
              <p className="text-base md:text-normal font-light text-center md:text-left">
                High Level experience in web design and development knowledge,
                producing quality work.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-full md:text-center text-left md:capitalize text-white  flex flex-col gap-3 items-center justify-center">
          <p className="font-semibold">Follow us</p>
          <div className="flex justify-center items-center gap-4">
            <Link href="https://www.facebook.cominfo/">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <FacebookIcon className="fill-[#3b5998]" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/_nugen_/">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <InstagramIcon className="!h-6 !w-6" />
              </div>
            </Link>
            <Link href="https://twitter.com/n_U_gEn">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <TwitterIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href="">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <EmailIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href="">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <UpWorkIcon className="fill-[#26a7de]" />
              </div>
            </Link>
            <Link href="">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <LinkedInIcon className="fill-[#0077b5]" />
              </div>
            </Link>
            <Link href="">
              <div className="cursor-pointer hover:scale-125 transition-all">
                <PhoneIcon className="fill-[#26a7de]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

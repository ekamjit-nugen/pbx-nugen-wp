import RMaquee from "react-fast-marquee";
import MarqueStarIcon from "../../components/icons/StarIcon";
import useBreakpoint from "../../hooks/useBreakpoint";

const Marquee = ({ title }: { title: string }) => {
  const breakpoint = useBreakpoint();
  const speed = (): number => {
    if (breakpoint && breakpoint > 1024) {
      return 10;
    } else {
      return 160;
    }
  };
  return (
    <RMaquee speed={speed()} loop={0.5} className={`${title == "contact us" ? " lg:pl-20" : title === "OUR SERVICES" && "TESTIMONIALS" ? "pl-18" : ""}`}>
      <div className="flex gap-x-32 items-center pr-32">
        <div className={`text-5xl md:text-[101.21px] font-black text-primary uppercase ${title === "contact us" ? "pl-14 sm:pl-48 md:pl-28 lg:pl-32" : title === "OUR SERVICES" || "TESTIMONIALS" ? "pl-10 sm:pl-28 md:pl-36 lg:pl-14" : title === "career in nugen" ? "pl-10 sm:pl-28 md:pl-14" : "pl-10"}`}>
          {title}
        </div>
        <MarqueStarIcon />
        <div className="text-5xl md:text-[101.21px] font-black text-primary uppercase pl-10">
          {title}
        </div>
        <MarqueStarIcon />
      </div>
    </RMaquee>
  );
};

export default Marquee;

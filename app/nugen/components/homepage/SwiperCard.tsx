import { TestimonialData } from "../../lib/data/testimonials";
import { StarFilledIcon } from "@radix-ui/react-icons";

const SwiperCard: React.FC<TestimonialData> = (props) => {
  const { rating, text, icon, source, name, randomColor } = props;
  const first = name.split(" ")?.[0];
  const last = name.split(" ")?.[1];

  const returnInitals = () => {
    let initals = "";
    initals = first?.[0];
    initals = initals + (last.length > 0 ? last?.[0] : "");
    return initals;
  };

  return (
    <>
      <div className="swiper-card-gsap flex flex-col text-center gap-2 p-4 justify-between lg:justify-center items-center shadow-xl bg-white dark:bg-foreground h-[300px] w-[420px] lg:w-[280px] xl:w-full rounded-xl max-w-fit">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-12 h-12 rounded-full items-center text-center text-background dark:text-foreground flex justify-center uppercase`}
              style={{
                background: randomColor,
              }}
            >
              {returnInitals()}
            </div>
            <div className="flex flex-col items-start">
              <div className="text-foreground dark:text-background">{name}</div>
              <div className="flex gap-2">
                <Stars length={rating} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <p className="text-left text-sm text-foreground dark:text-background my-2 w-[320px] lg:w-full h-fit leading-6 line-clamp-5 px-2">
            {text}
          </p>
        </div>
        <div className="flex justify-start items-center w-full gap-1 border-t pt-3 ">
          <div className="!h-6 !w-6 flex justify-center items-center">
            {icon}
          </div>
          <div className="text-sm capitalize text-foreground dark:text-background font-semibold">
            {source}
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperCard;

const Stars = ({ length }: { length: number }) =>
  Array.from({ length: length }, (_, index) => (
    <StarFilledIcon className="text-yellow-500" key={index} />
  ));

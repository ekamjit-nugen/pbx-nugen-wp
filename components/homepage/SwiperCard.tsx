import { StarFilledIcon } from "@radix-ui/react-icons";
import { TestimonialData } from "./TestiomonialSection";

const SwiperCard: React.FC<TestimonialData> = (props) => {
  const { rating, post_description, icon, source, post_title } = props;
  const first = post_title.split(" ")?.[0];
  const last = post_title.split(" ")?.[1];

  const returnInitals = () => {
    let initals = "";
    initals = first?.[0]; 
    initals = initals + (last?.length > 0 ? last?.[0] : "");
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
                background: "#626262",
              }}
            >
              {returnInitals()}
            </div>
            <div className="flex flex-col items-start">
              <div className="text-foreground dark:text-background">{post_title}</div>
              <div className="flex gap-2">
                <Stars length={parseInt(rating)} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <p className="text-left text-sm text-foreground dark:text-background my-2 w-[320px] lg:w-full h-fit leading-6 line-clamp-5 px-2">
            {post_description}
          </p>
        </div>
        <div className="flex justify-start items-center w-full gap-1 border-t pt-3 ">
          <div className="!h-6 !w-6 flex justify-center items-center">
            {""}
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

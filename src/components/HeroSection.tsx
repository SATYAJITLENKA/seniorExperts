import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { empData } from "../utils/data/empData";
import { companies } from "../utils/data/companiesData";
import { Switch } from "./ui/switch";
const HeroSection = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [companies.length]);
  return (
    <div className="text-center bg-transparent  text-white">
      <div className="text-sm font-medium pt-6 flex items-center gap-3 justify-center">
        FOR SENIORS{" "}
        <div>
          <Switch
            id="airplane-mode"
            checked={isEnabled}
            onCheckedChange={() => setIsEnabled(!isEnabled)}
            className={`${
              isEnabled
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-green-200"
            } border-2 rounded-full transition duration-200 ease-in-out`}
          />
        </div>{" "}
        FOR SMES
      </div>
      <h1 className=" text-4xl text-md-6xl font-medium font-md-extrabold py-6 max-w-[800px] m-auto">
        Unlock New Oppoertunities in Retirement
      </h1>

      <p className="font-normal">
        Explore flexible work arrangements the fit your lifestyle . Keep <br />
        learnning and growing professionally
      </p>
      <div className="flex gap-2 flex-wrap justify-center my-8 font-medium">
        <button className="rounded-xl bg-white text-black px-8 py-3">
          Register
        </button>
        <button className="rounded-xl text-white px-8 py-3 bg-[#df6433]">
          Get Demo
        </button>
      </div>
      <div className="flex items-center justify-center">
        {empData.map((ele) => (
          <div className=" -mr-3">
            <Avatar className="border-2 rounded-full">
              <AvatarImage key={ele.id} src={ele.image} />
            </Avatar>
          </div>
        ))}
      </div>
      <p className="mt-2 mb-8 text-slate-100 text-sm">
        Trusted by <span className="font-medium text-white">5000+</span> Senior
        Experts and <span className="font-medium text-white">200+</span> SMEs
      </p>
      <div className="px-20">
        <Carousel>
          <CarouselContent>
            {companies.map((item, index) => (
              <CarouselItem
                key={index}
                className={`basis-1/1 md:basis-1/5 ${activeIndex === index ? "active" : ""}`}
              >
                <img src={item.image} className="h-14 w-52" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;

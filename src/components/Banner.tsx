import React from "react";

interface BannerProps {
  Component: React.ComponentType;
  image: string;
}
const Banner = ({ Component, image }: BannerProps) => {
  return (
    <>
      <div className="bg-gradient-to-r h-xl from-[#5b4b98] to-[#d7683d] text-white px-md-8 py-6 rounded-md my-12">
        <div className="max-w-6xl m-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center">
            <Component/>
          </div>
          <div>
            <img className="rounded-xl h-60" src={image} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";

const JoiningBenifits = () => {
  return (
    <>
      <div className="max-w-6xl m-auto p-3 p-md-0">
        <div className=" flex flex-col md:flex-row gap-9 gap-md-40 m-auto py-16">
          <div className="w-fit">
            <h4 className="text-[#23299d] font-bold text-3xl mt-4 ">
             Benifits of Joining Our Senior <br /> Expert Community
            </h4>
          </div>
          <div>
            <p className="text-black font-medium">
              Our platform empowers Senior Experts to share their <br /> Valuable knowledge. Connect with exciting oppertunities, <br /> and continue making a meaningful impact
            </p>
            <button className="rounded-xl text-white px-8 py-3 bg-[#df6433] mt-4">
             Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoiningBenifits;

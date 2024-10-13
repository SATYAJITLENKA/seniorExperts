import { oppertunityData } from "@/utils/data/oppertunityData";
import { Logs } from "lucide-react";

const OpportunitySection = () => {
  return (
    <div className="mb-7">
      <div className="text-center">
        <h4 className="text-3xl font-bold my-6 text-[#23299d]">
          Discover a World of Opportunities Tailored to Your Expertise
        </h4>
        <p className="font-medium max-w-2xl m-auto text-center">
          Discover a diverse of projects tailored to your skills and experience.
          Browse through current openings and find the perfect fit for your
          expertise
        </p>
      </div>

      <div className="flex max-w-7xl flex-wrap m-auto gap-5 justify-center mt-14">
        {oppertunityData.map((ele, index) => (
          <div
            key={index}
            className="rounded-xl flex gap-4 p-3 px-4 bg-[#F8ECEB] w-fit"
          >
            <Logs/>
            <p>{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunitySection;

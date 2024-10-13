import BenifitCard from "./BenifitCard";
import { benifitsData } from "@/utils/data/benifitsData";

const BenifitSection = () => {
  return (
    <>
      <div className="bg-[#e3e4e8] p-9">
        <h4 className="max-w-xl text-center m-auto font-medium text-2xl text-[#23299d]">
          Empower Your Next Chapter: Discover the Benifits of Joining Our Senior
          Community
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto py-9">
          {benifitsData.map((ele, index) => (
            <BenifitCard
              key={index}
              Icon={ele.icon}
              title={ele.title}
              description={ele.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BenifitSection;

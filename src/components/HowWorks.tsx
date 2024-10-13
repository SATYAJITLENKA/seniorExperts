import { secureStep, workStepData } from "@/utils/data/WorkStepData";
import BenifitCard from "./BenifitCard";
import { ShieldCheck } from "lucide-react";

const HowWorks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-16">
        <div className="w-full md:w-fit">
          <p className="text-center md:text-left">FOR SENIORS FOR SMES</p>
          <h4 className="text-[#23299d] font-semibold text-2xl mt-4 text-center md:text-left">
            How It Works?
          </h4>
        </div>
        <div className="text-center m-auto md:text-left">
          <p className="text-black font-medium">
            Embark on a fulfilling journey, leveraging <br /> your expertise to
            make a lasting impact
          </p>
          <button className="rounded-xl text-white px-8 py-3 bg-[#df6433] mt-4">
            Get Started
          </button>
        </div>
      </div>

      <div className="rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#F8ECEB] border-2 border-slate-200">
        {workStepData.map((ele) => (
          <BenifitCard
            key={ele.id}
            second={true}
            id={ele.id}
            Icon={ele.icon}
            title={ele.title}
            description={ele.description}
          />
        ))}
      </div>

      <div className="mt-12">
        <hr />
        <div className="mt-8 flex flex-col md:flex-row gap-3">
          {secureStep.map((ele, index) => (
            <div key={index} className="flex items-start gap-2">
              <ShieldCheck className="h-9 w-9" />
              <p className="text-sm text-gray-700 font-medium pt-2">
                {ele.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;

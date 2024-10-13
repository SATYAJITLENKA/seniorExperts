import React from "react";
import { ChartOne } from "./ChatOne";

const SeniorExpert = () => {
  return (
    <div className="m-auto max-w-6xl mt-20">
      <div className="max-w-xl m-auto text-center">
        <h4 className="text-3xl font-bold my-6 text-[#23299d]">
          For Senior Experts and SMEs .
        </h4>
        <p className="font-medium">
          Where Expertise Meets Oppertunity for Mutual Success , Fostering
          Growth and Innovation Through Collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
        <div className="p-7 bg-[#F8ECEB] rounded-xl">
          <div>
            <img
              className="w-full rounded-xl"
              src="https://th.bing.com/th/id/OIP.gBApIuMYNbeHUkt5_eIblgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium mt-3 mb-2">
            Expertise Meets Opportunity
          </h3>
          <p className="font-normal text-gray-600">
            Connect with seasoned professionals across drivers industried ,
            gaining access to specialized skills and insights to drive your
            business forward
          </p>
        </div>
        <div className="p-7  bg-[#F8ECEB] rounded-xl">
          <div>
            <img
              className="w-full rounded-xl"
              src="https://th.bing.com/th/id/OIP.gBApIuMYNbeHUkt5_eIblgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium mt-3 mb-2">Expertise Meets Opportunity</h3>
          <p className="font-normal text-gray-600">
            Connect with seasoned professionals across drivers industried ,
            gaining access to specialized skills and insights to drive your
            business forward
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeniorExpert;

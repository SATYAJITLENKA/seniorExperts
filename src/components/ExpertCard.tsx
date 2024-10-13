import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

interface CompanyDetailsDataType {
  id: number;
  name: string;
  place: string;
  Logo: string;
  title: string;
  description: string;
  details: string[];
}
const ExpertCard = ({
  id,
  name,
  place,
  Logo,
  title,
  description,
  details,
}: CompanyDetailsDataType) => {
  return (
    <>
      <Card className="py-4 bg-gradient-to-br from-[#fef7f7] to-[#dbdbe7] ">
        <div className="flex justify-between px-4">
          <div>
            <h6 className="text-xs font-semibold">{name}</h6>
            <p className="text-gray-500 text-xs">{place}</p>
          </div>
          <div>
            <img className="h-5" src={Logo} alt="" />
          </div>
        </div>
        <hr className="mt-3" />
        <CardHeader className="px-4 pb-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="font-normal">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <div className="flex flex-wrap gap-3">
            {details.map((detail, index) => (
              <div
                key={index}
                className=" rounded-xl bg-slate-100 border-1 border-slate-600 py-1 px-2 text-sm font-semibold text-gray-700"
              >
                {detail}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between px-4 pb-0">
          <button className="bg-[#444788] text-sm text-white px-3 py-2 font-medium rounded-xl shadow-xl">
            Apply Now
          </button>
          <div className="flex gap-1 items-center">
            {" "}
            <BadgeCheck className="h-5 text-blue-600" /> Verified
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ExpertCard;

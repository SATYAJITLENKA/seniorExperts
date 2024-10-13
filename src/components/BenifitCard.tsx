import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ElementType } from "react";
interface BenifitCardProps {
  id?: number;
  Icon: ElementType;
  title: string;
  description: string;
  second?: boolean;
}
const BenifitCard = ({
  id,
  title,
  description,
  Icon,
  second,
}: BenifitCardProps) => {
  return (
    <Card className="border-none p-2 text-black shadow-none">
      {second ? (
        <div className="flex items-center">
      
          <div className="bg-[#23299d] rounded-full h-6 w-6 flex items-center text-sm justify-center text-white">{id}</div>
          <hr className="w-4"/>
          <div className="bg-white w-fit rounded-full p-3 border-2 border-gray-300">
            <Icon className="h-4 w-4 text-black" />
          </div>
        </div>
      ) : (
        <div className="bg-[#df6433] w-fit rounded-full p-3 border-2 border-white shadow-xl">
          <Icon className="h-5 w-5 text-white" />
        </div>
      )}
      <CardHeader className="p-0 py-3">
        <CardTitle className="font-semibold text-xl">{title}</CardTitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default BenifitCard;

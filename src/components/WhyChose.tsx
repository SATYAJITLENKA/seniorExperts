import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpIcon } from "lucide-react";

const whyChoseData = [
  {
    id: 1,
    ques: "Access a Vast Network of Expertise",
    ans: "Tap into a diverse Pool of seasoned professionals with specialized skills and experience across various industried",
  },

  {
    id: 2,
    ques: "Steamlined Collaboration",
    ans: "Tap into a diverse Pool of seasoned professionals with specialized skills and experience across various industried",
  },
  {
    id: 3,
    ques: "Proven Results",
    ans: "Tap into a diverse Pool of seasoned professionals with specialized skills and experience across various industried",
  },
];

const WhyChose = () => {
  return (
    <div className="w-full">
    <h2 className="font-semibold text-xl pb-5">Why SMEs Should Choose Our <br /> Platform?</h2>
    <Accordion type="single" collapsible className="w-full mb-0"> {/* Remove default margin-bottom */}
      {whyChoseData.map((ele, index) => (
        <AccordionItem value={ele.ques} key={index} className="mb-4 border-none">
          <AccordionTrigger className="rounded-xl bg-green-50 text-black p-3">
            {ele.ques}
          </AccordionTrigger>
          <AccordionContent className="p-3">{ele.ans}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
  
  );
};

export default WhyChose;

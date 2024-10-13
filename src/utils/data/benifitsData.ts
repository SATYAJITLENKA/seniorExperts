import { FC, ElementType } from "react";
import { Lightbulb, CalendarDays, LaptopMinimal } from "lucide-react";

interface BenifitsData {
  id: number;
  icon: ElementType;
  title: string;
  description: string;
}

export const benifitsData: BenifitsData[] = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Share Your Expertise",
    description:
      "Continue making a meaningful impact by sharing your knowledge and experience with businesses seeking your guidance",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Flexible Opportunities",
    description:
      "Choose projects that align with your interests and availability. Enjoy the freedom and flexibility of independent work",
  },
  {
    id: 3,
    icon: LaptopMinimal,
    title: "Continued Growth",
    description:
      "Stay engaged and challenged by tackling new projects and expanding your professional network",
  },
];

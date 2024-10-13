import { UserRound, Handshake, BookCheck, Search } from "lucide-react";
import { ElementType } from "react";

interface workStepData {
  id: number;
  icon: ElementType;
  title: string;
  description: string;
}
export const workStepData: workStepData[] = [
  {
    id: 1,
    icon: UserRound,
    title: "Create Your Profile",
    description:
      "Highlight your skills, experience, and areas of expertise to attract potential clients",
  },

  {
    id: 2,
    icon: Handshake,
    title: "Explore Projects",
    description:
      "Discover a wide range of projects aligned with your interests and skillset",
  },
  {
    id: 3,
    icon: BookCheck,
    title: "Apply & Connect",
    description:
      "Aubmit compelling proposals and build relationships with propective clients",
  },
  {
    id: 4,
    icon: Search,
    title: "Get Started",
    description:
      "Embark on stimulating projects and contribute your valuable insights to drive success",
  },
];

interface secureStep{
    id:number,
    description:string
}
export const secureStep:secureStep[]= [
  {
    id: 1,
    description:
      "Efficient Management:Tools that streamline project communication and collaoration",
  },
  {
    id: 2,
    description:
      "Secure & Trusted : We priotize data security and user privacy",
  },
  {
    id: 3,
    description:
      "Dedicated Support : Our team is here to assist with any concerns",
  },
];

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import seniorLogo from "../../assets/seniorLogo.png"
const Navbar = () => {
  return (
    <nav className="bg-transparent p-2 py-4 p-md-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-20">
          <div className="text-white text-lg font-bold flex">
            <Button className="lg:hidden shadow-none">
              <Menu />
            </Button>
            <img src={seniorLogo} alt="logo" className="h-8 mr-2" />
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-gray-300">
              Explore Projects
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Resources
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
        <div className="text-white">
          <Button className="shadow-none">Sign in</Button>
          <Button  className="bg-[#444788] hover:bg-[#444788] rounded-xl px-7 py-4">Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

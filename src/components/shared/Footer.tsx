import { Copyright } from "lucide-react";
import logo from "../../assets/seniorLogo.png";
const Footer = () => {
  return (
    <div className="bg-[#3C549B] text-white py-10 mt-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <img src={logo} alt="" />
          <p className="px-3 p-2 mt-4 bg-white text-black text-sm font-medium w-fit rounded-md">All Systems Operational</p>
          <div className="flex gap-2 my-4">
            <a href="#">X</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
          <p> Made and hosted in India.</p>
          <div className="flex items-center gap-1">Senior Experts <Copyright className="h-5"/> 2024 </div>

          
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Explore Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Register
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <p>Contact Us</p>
          <p>Get Demo</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
             <li>
              <a href="#" className="hover:underline">
                Payment & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Disclaimers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

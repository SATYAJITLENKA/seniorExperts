import BenifitSection from "@/components/BenifitSection";
import HeroSection from "@/components/HeroSection";
import HowWorks from "@/components/HowWorks";
import SeniorExpert from "@/components/SeniorExpert";
import Navbar from "@/components/shared/Navbar";
import WorkBanner from "@/components/WorkBanner";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import WhyChose from "@/components/WhyChose";
import JoiningBenifits from "@/components/JoiningBenifits";
import Footer from "@/components/shared/Footer";
import OpportunitySection from "@/components/OpportunitySection";
import { CompanyDetailsData } from "@/utils/data/companiesData";
import ExpertCard from "@/components/ExpertCard";
const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r h-fit from-[#5b4b98] to-[#d7683d] text-white px-2 px-md-8 py-3 rounded-md">
        <Navbar />
        <HeroSection />
      </div>
      <BenifitSection />
      <HowWorks />
      <SeniorExpert />
      <Banner
        image="https://th.bing.com/th/id/OIP.0yi26fO0azz9oRCE5I59zgHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.4&pid=1.7"
        Component={WorkBanner}
      />

      <OpportunitySection />

      <div className="items-center max-w-6xl m-auto grid md:grid-cols-3 gap-7">
        {CompanyDetailsData.map((ele) => (
          <ExpertCard
            id={ele.id}
            name={ele.name}
            place={ele.place}
            Logo={ele.logo}
            title={ele.title}
            description={ele.description}
            details={ele.details}
          />
        ))}
      </div>
      <JoiningBenifits />
      <Banner
        Component={WhyChose}
        image="https://th.bing.com/th?id=OIP.rcUcrh-rznKZtC1VmEtFsgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.4&pid=3.1&rm=2"
      />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;

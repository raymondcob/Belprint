
import TrustCuesSlider from "../components/common/TrustCueSlider";
import Hero from "../components/layout/Hero";
import OurServices from "../components/layout/OurServices";
const Home = () => {
  return (
    <div className="flex flex-col w-full mx-0">
      <Hero/>
      <TrustCuesSlider/>
      <OurServices/>
      
    </div>
  );
};

export default Home;

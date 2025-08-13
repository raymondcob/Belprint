
import GradientText from '../hero/GradientText';
import DescriptionText from '../hero/DescriptionText';
import CircularImage from '../hero/CircularImage';
import CTAButton from '../hero/CTAButton';
import Banner from "../../assets/Banner (2).jpg";
import Labels from "../../assets/Labels.jpg";
import Signs from "../../assets/Signs.jpg";

export default function Hero() {
  const handleRequestQuote = () => {
    // Handle quote request
    console.log('Request quote clicked');
  };

  return (
    <section className="relative h-[85vh] bg-gray-900 text-white overflow-hidden" style={{ backgroundColor: '#181919' }}>
      <div className="container mx-auto  p-7 flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="flex-1 w-[50%] b-12 lg:mb-0 p-6">
          <GradientText className="mb-8">
            Your Vision,<br />
            Printed. Fast.
          </GradientText>
          
          <DescriptionText className="mb-12">
            We bring your ideas to life with vibrant, professional prints, delivered with speed and precision.
          </DescriptionText>
          
          <CTAButton onClick={handleRequestQuote}>
            Request a Quote
          </CTAButton>
        </div>

        {/* Right Content - Circular Images */}
        <div className="flex-1 flex items-center justify-center ">
          <div className="relative w-full  ">
            {/* Coffee Bottles - Top Right */}
            <CircularImage 
              src={Labels}
              alt="Coffee bottles with different labels"
              className="absolute top-10 right-0 z-10"
              size="w-40 h-40 md:w-96 md:h-96"
            />
            
            {/* Burger Sign - Middle Left */}
            <CircularImage 
              src={Banner}
              alt="Delicious burger restaurant sign"
              className="absolute -top-37 left-0 z-20"
              size="w-40 h-40 md:w-96 md:h-96"
            />
            
            {/* Ice Cream Sign - Bottom Right */}
            <CircularImage 
              src={Signs}
              alt="Magical ice cream shop sign"
              className="absolute bottom-0 right-8 z-10"
              size="w-40 h-40 md:w-96 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
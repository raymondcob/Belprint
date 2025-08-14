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
    <section className="relative min-h-[85vh] bg-black/90 text-white overflow-hidden">
      {/* Subtle Dark Background Pattern */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <GradientText className="mb-6 lg:mb-8">
              Your Vision,<br />
              Printed. Fast.
            </GradientText>
            
            <DescriptionText className="mb-8 lg:mb-12 text-lg lg:text-xl text-gray-600">
              We bring your ideas to life with vibrant, professional prints, delivered with speed and precision.
            </DescriptionText>
            
            <div className="flex justify-center lg:justify-start">
              <CTAButton onClick={handleRequestQuote}>
                Request a Quote
              </CTAButton>
            </div>
          </div>

          {/* Right Content - Creative Image Showcase */}
          <div className="flex-1 max-w-2xl">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Card Stack Effect */}
              <div className="absolute inset-0">
                {/* Main Featured Image - Tilted Card */}
                <div className="absolute top-8 left-8 transform rotate-6 hover:rotate-3 transition-transform duration-500 z-30">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
                      <img 
                        src={Banner} 
                        alt="Professional printing showcase"
                        className="w-64 h-40 sm:w-72 sm:h-48 md:w-80 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                        <p className="text-white text-sm font-semibold">Premium Banners</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Image - Polaroid Style */}
                <div className="absolute top-4 right-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500 z-20">
                  <div className="relative group">
                    <div className="bg-white rounded-lg shadow-xl p-3 border border-gray-200">
                      <img 
                        src={Labels} 
                        alt="Custom labels showcase"
                        className="w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 object-cover rounded group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="mt-2 text-center">
                        <p className="text-gray-700 text-xs font-medium">Custom Labels</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Image - Modern Card */}
                <div className="absolute bottom-8 right-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-25">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                      <img 
                        src={Signs} 
                        alt="Professional signage"
                        className="w-52 h-36 sm:w-60 sm:h-40 md:w-68 md:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <p className="text-gray-800 text-xs font-semibold">Signs & More</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
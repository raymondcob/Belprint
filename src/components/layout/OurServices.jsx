import Shipping from "../../assets/Shipping.png";
import DottedLines from "../../assets/line-shape1.png";

// ServiceCard Component
const ServiceCard = ({ number, title, description, imageSrc }) => {
  return (
    <div className="relative  p-6 flex flex-col items-center text-center h-full">
      <div className="absolute top-4 left-4 text-purple-600 font-bold text-xl">
        {number}
      </div>
      <div className="mt-8 mb-4 w-24 h-24 flex items-center justify-center">
        <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// DottedArrowSVG Component
const DottedArrowSVG = () => {
  return (
    <img src={DottedLines} alt="Dotted Line Shape" className="absolute inset-0  h-full z-0 ml-20" />
  );
};

// Data for the service cards
const services = [
{
    number: '01',
    title: "Country Wide Shipping",
    description: "Seamless Shipping Solutions Across the Entire Country. Fast. Reliable.",
    imgSrc: Shipping,
    }
];

// Main ServicesSection Component
const OurServices = () => {
  return (
    <section className="relative py-16 w-full mt-20 bg-gray-50 overflow-hidden">


      <DottedArrowSVG /> 

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              imageSrc={service.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
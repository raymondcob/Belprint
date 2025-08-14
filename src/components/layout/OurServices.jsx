import React from 'react';
import { FaPrint, FaDesktop, FaShoppingCart, FaTruck, FaUsers, FaAward } from 'react-icons/fa';

// Timeline ServiceCard Component
const TimelineServiceCard = ({ number, title, description, icon: Icon, imageSrc, isEven }) => {
  return (
    <div className={`relative flex items-center ${isEven ? 'flex-row-reverse' : 'flex-row'} group`}>
      {/* Timeline Line Connection */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0"></div>
      
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:border-gray-400 transition-colors duration-300">
        <span className="text-gray-700 font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {number}
        </span>
      </div>
      
      {/* Content Card */}
      <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
          {/* Icon Container */}
          <div className="mb-4 flex justify-start">
            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-gray-100 transition-all duration-300">
              {Icon ? (
                <Icon className="text-3xl text-gray-700 group-hover:text-black transition-colors duration-300" />
              ) : (
                <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Empty space for opposite side */}
      <div className="w-5/12"></div>
    </div>
  );
};

// DottedArrowSVG Component
const DottedArrowSVG = () => {
  return (
    <img 
      src={DottedLines} 
      alt="Dotted Line Shape" 
      className="w-full h-full object-contain" 
    />
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon: Icon, color, bgColor, iconColor, index }) => {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Decorative Corner Element */}
      <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Icon Container */}
      <div className="relative z-10 mb-6">
        <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:rotate-3`}>
          <Icon className={`text-4xl ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className={`w-8 h-8 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-lg`}>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Custom Printing",
    description: "High-quality custom printing services for banners, labels, signs, and promotional materials with premium finishes.",
    icon: FaPrint,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Digital Design",
    description: "Professional graphic design services to create stunning visuals that capture your brand's essence and message.",
    icon: FaDesktop,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "E-Commerce Solutions",
    description: "Complete online store setup and management to help you sell your products and services effectively online.",
    icon: FaShoppingCart,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Fast Delivery",
    description: "Reliable nationwide shipping with real-time tracking to ensure your orders arrive safely and on schedule.",
    icon: FaTruck,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    title: "Customer Support",
    description: "Dedicated customer service team available to assist you throughout your project from start to finish.",
    icon: FaUsers,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with rigorous quality control processes ensuring exceptional results every time.",
    icon: FaAward,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  }
];

// Main ServicesSection Component - Timeline Design
const OurServices = () => {
  return (
    <section className="relative py-24 w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-20">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
        </div>
        <h2 
          className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Services
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto px-4 leading-relaxed">
          Comprehensive printing and digital solutions designed to elevate your brand and exceed your expectations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              bgColor={service.bgColor}
              iconColor={service.iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16 relative z-20">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
          Get Started Today
        </button>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default OurServices;
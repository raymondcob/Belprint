import { FaArrowRightLong } from "react-icons/fa6";

const CTAButton = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-full border border-gray-600 hover:border-gray-400 transition-all duration-300 hover:bg-gray-800 ${className}`}
    >
      <FaArrowRightLong size={24}/>
      <span 
        className="text-lg font-semibold"
        style={{ 
          fontFamily: 'Poppins, sans-serif',
          color: '#c2cfc0'
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default CTAButton;
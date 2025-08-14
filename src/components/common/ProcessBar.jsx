import React, { useState } from 'react';
import { FiCheck, FiTruck, FiCreditCard, FiPackage } from 'react-icons/fi';
import { FcApproval } from "react-icons/fc";
import { FaFileInvoice,FaShippingFast,FaRegCalendarTimes } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaComputer,FaToolbox ,FaListCheck} from "react-icons/fa6";


const ProcessBar = () => {
  // Set the initial currentStep to reflect the desired rendered state.
  // For example, if you want "Processing" to be active on load, set it to 1.
  // If you want "Payment" active, set it to 0.
  const [currentStep, setCurrentStep] = useState(1); // '1' makes "Processing" the active step initially

  const steps = [
    { icon: FiCreditCard, label: 'Quote' },
    { icon: FcApproval, label: 'Customer Approved' },
    { icon: FaFileInvoice, label: 'Invoice' },
    { icon: MdOutlinePointOfSale, label: 'Payment Processed' },
    { icon: FaComputer, label: 'Graphic Department' },
    { icon: FaToolbox, label: 'Production Department' },
    { icon: FaListCheck, label: 'Quality Check' },
    { icon: FaShippingFast, label: 'Shipping' },
    { icon: FaRegCalendarTimes, label: 'End' },
  ];

  return (
    <div className=" flex mt-5 bg-gray-50 font-sans  ">

      
      {/* Process Bar Container at the Bottom */}
      <div className="flex items-center justify-center  px-4 py-8 bg-white rounded-lg shadow-xl">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Icon and Label (Icon on Top) */}
            <div className="flex flex-col items-center z-10">
              <div
                className={`relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 transform
                  ${index <= currentStep 
                    ? 'bg-green-600 text-white scale-110 shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                  }`}
              >
                <step.icon className="w-7 h-7" />
              </div>
              <span
                className={`mt-3 text-sm text-center font-medium transition-colors duration-500
                  ${index <= currentStep 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-500'
                  }`}
              >
                {step.label}
              </span>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300 mx-4 relative top-2">
                <div
                  className={`h-full w-10 transition-all duration-500 ease-in-out
                    ${index < currentStep ? 'bg-green-600' : 'bg-transparent'}`}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessBar;
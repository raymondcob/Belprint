import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SideModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Background overlay that closes modal when clicked */}
      {isOpen && (
        <div 
          onClick={onClose} 
          className="fixed inset-0 z-[9999] bg-black/50 transition-opacity duration-500 ease-in-out" 
        />
      )}
      
      {/* Modal panel with slide animation */}
      <div 
        className={`fixed top-0 right-0 z-[10000] h-screen w-[78%] md:w-[35%] lg:w-[35%] bg-black/90 text-white shadow-lg transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default SideModal;
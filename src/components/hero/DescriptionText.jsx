

const DescriptionText = ({ children, className = "" }) => {
  return (
    <p 
      className={`text-xl md:text-3xl font-medium text-gray-400 max-w-lg  ${className}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {children}
    </p>
  );
};

export default DescriptionText;
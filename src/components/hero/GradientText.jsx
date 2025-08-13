

const GradientText = ({ children, className = "" }) => {
  return (
    <h1 
      className={`text-6xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold leading-tight bg-gradient-to-b from-red-400 via-yellow-400 via-green-400 to-gray-400 bg-clip-text text-transparent ${className}`}
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundImage: 'linear-gradient(180deg, rgba(195,97,97,1) 0%, rgba(199,161,79,1) 41.35%, rgba(103,156,92,1) 71.63%, rgba(134,134,134,1) 100%)'
      }}
    >
      {children}
    </h1>
  );
};

export default GradientText;
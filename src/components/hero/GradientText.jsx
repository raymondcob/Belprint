const GradientText = ({ children, className = "" }) => {
  return (
    <h1 
      className={`text-4xl md:text-9xl lg:text-9xl xl:text-9xl font-bold leading-tight bg-gradient-to-br from-red-400 via-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent ${className}`}
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundImage: 'linear-gradient(135deg, rgba(239,68,68,1) 0%, rgba(251,191,36,1) 25%, rgba(34,197,94,1) 50%, rgba(59,130,246,1) 75%, rgba(147,51,234,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
       
      }}
    >
      {children}
    </h1>
  );
};

export default GradientText;
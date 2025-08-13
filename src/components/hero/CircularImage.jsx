

const CircularImage = ({ src, alt, className = "", size  }) => {
  return (
    <div className={`${size} rounded-full border-4 border-yellow-500 overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CircularImage;
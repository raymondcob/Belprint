

const CompanyLogo = ({ src, alt, company }) => {
  return (
    <div className="flex items-center justify-center h-30 px-8">
      <img 
        src={src}
        alt={alt}
        className="h-full w-full object-contain  hover:opacity-100 transition-opacity duration-300 "
        style={{ 
          maxWidth: '120px',
          height: '100px'
        }}
      />
    </div>
  );
};

export default CompanyLogo;
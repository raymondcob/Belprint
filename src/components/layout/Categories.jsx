import { useState } from 'react';

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containersData = [
    { title: 'Container 1', info: 'Information for container 1' },
    { title: 'Container 2', info: 'Information for container 2' },
    { title: 'Container 3', info: 'Information for container 3' },
    { title: 'Container 4', info: 'Information for container 4' },
    { title: 'Container 5', info: 'Information for container 5' },
  ];

  return (
    <div className="w-full flex mb-10 ">
      {containersData.map((container, index) => (
        <div
          key={index}
          className={`
            relative w-[20%] h-[90vh] bg-gray-200  shadow-lg cursor-pointer
            transform transition-transform duration-300 ease-in-out
            ${hoveredIndex === index ? 'scale-112 z-10' : 'scale-100'}
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="p-4">
            <h3 className="text-xl font-bold">{container.title}</h3>
          </div>
          {hoveredIndex === index && (
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-70 text-white ">
              <p className="text-center">{container.info}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
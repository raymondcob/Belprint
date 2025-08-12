// Carousel.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShirtFront from "../../assets/ShirtBack.jpg";
import ShirtBack from "../../assets/ShirtFront.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

// Custom Arrow Components
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-12 left-0 transform -translate-y-1/2 cursor-pointer z-10 p-1 bg-gray-800 text-white rounded-full opacity-50 hover:opacity-100 transition-opacity"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-12  right-0 transform -translate-y-1/2 cursor-pointer z-10 p-1 bg-gray-800 text-white rounded-full opacity-50 hover:opacity-100 transition-opacity"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  return (
    <div className="relative w-24 h-24 rounded-md overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src={ShirtFront}
            alt="Front-Shirt"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={ShirtBack}
            alt="Back-Shirt"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
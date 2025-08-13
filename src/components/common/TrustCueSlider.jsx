
import Slider from 'react-slick';
import CompanyLogo from './CompanyLogo';

const TrustCuesSlider = () => {
  const companies = [
    {
      name: 'Microsoft',
      src: 'https://www.designenlassen.de/blog/wp-content/uploads/2024/02/Dein-Abschnittstext-41.png',
      alt: 'Microsoft company logo - Pawel Czerwinski on Unsplash'
    },
    {
      name: 'Google',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s',
      alt: 'Google company logo - Alexander Andrews on Unsplash'
    },
    {
      name: 'Apple',
      src: 'https://graphicsprings.com/wp-content/uploads/2023/07/image-58-1024x512.png',
      alt: 'Apple company logo - Alexander Aguero on Unsplash'
    },
    {
      name: 'Amazon',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      alt: 'Amazon company logo - Christian puta on Unsplash'
    },
    {
      name: 'Netflix',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpC0ujKkEOtbhXIOz9c0wzSiBxTya7vAWbg&s',
      alt: 'Netflix company logo - Alexander Andrews on Unsplash'
    },
    {
      name: 'Tesla',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1024px-Tesla_logo.png',
      alt: 'Tesla company logo - Gift Habeshaw on Unsplash'
    },
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <p 
            className="text-blue-500 font-bold text-4xl "
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="trust-cues-slider w-full">
          <Slider {...settings}>
            {companies.map((company, index) => (
              <CompanyLogo
                key={index}
                src={company.src}
                alt={company.alt}
                company={company.name}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrustCuesSlider;
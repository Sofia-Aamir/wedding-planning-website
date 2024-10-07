import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Footer from '../Pages/Footer';

const Home = () => {
  const [bgImage, setBgImage] = useState('/Images/homeimage1.jpg'); // Initial background image

  const images = [
    '/Images/homeimage1.jpg',
    '/Images/homeimage2.jpg',
    '/Images/homeimage3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  // Sample services data
  const services = [
    { name: 'Venue Selection', image: '/Images/venue.jpg' },
    { name: 'Catering Services', image: '/Images/catering.jpeg' },
    { name: 'Photography', image: '/Images/photography.jpeg' },
    { name: 'Floral Arrangements', image: '/Images/floralarrangement.jpg' },
    { name: 'Entertainment', image: '/Images/entertainment.jpg' },
    { name: 'Event Planning', image: '/Images/event-planning.jpg' },
    { name: 'Wedding Coordination', image: '/Images/wedding-coordination.jpg' },
    { name: 'Honeymoon Planning', image: '/Images/honeymoon.jpg' },
  ];

  return (
    <div>
      {/* Main Content */}
      <div
        className="relative h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center transition duration-500 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: 'rgba(203, 96, 64, 0.5)', // Light overlay effect
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Curved Text */}
        <div className="mb-4 top-[120px] sm:top-[100px] relative">
          <svg width="650" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>cool</title>
              <path id="cool" d="M50,120 Q325,-40 600,120" fill="none" stroke="none" />
            </g>
            <text width="500">
              <textPath xlinkHref="#cool" startOffset="50%" textAnchor="middle">
                <tspan
                  dy="-10"
                  className="font-fredoka text-[#F2E5BF] text-2xl md:text-3xl lg:text-4xl font-bold"
                >
                  WE ARE GETTING MARRIED
                </tspan>
              </textPath>
            </text>
          </svg>
        </div>

        {/* Birds Icon */}
        <div className="mb-4" style={{ position: 'relative', top: '-50px' }}>
          <img src="/Images/birds.png" alt="Birds Kissing" className="w-40 md:w-40 lg:w-32" />
        </div>

        {/* Updated Additional Text */}
        <div className="mb-4 sm:top-[-40px]" style={{ position: 'relative', top: '-50px' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-dancing">
            Let Love Sparkle in Every Moment
          </h1>
        </div>

        {/* Additional Description */}
        <div
          className="mb-4 sm:top-[-30px] sm:text-sm sm:max-w-[90%]"
          style={{ position: 'relative', top: '-40px', maxWidth: '900px' }}
        >
          <p className="text-sm md:text-lg font-sans text-center">
            Join us as we celebrate the beginning of our beautiful journey together! Each moment is a cherished memory, and we can’t wait to create new ones surrounded by loved ones. Your presence will make our day even more special as we embrace love and laughter in our lives.
          </p>
        </div>

        {/* Heartline Image */}
        <div
          className="mb-4 sm:top-[-50px] sm:mt-0"
          style={{ position: 'relative', top: '-60px', maxWidth: '900px' }}
        >
          <img
            src="/Images/heartline.png"
            alt="Heart Line"
            className="w-40 sm:w-48 md:w-64 mt-4"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>

      {/* Wedding Planning Services Section */}
      <div className="bg-[#CB6040] py-10">
        <h2 className="text-center text-4xl md:text-4xl font-bold text-[#F2E5BF] mb-6 relative flex justify-center items-center">
          <FaHeart className="absolute left-10 w-6 h-6 md:w-8 md:h-8 text-[#F2E5BF]" /> {/* Left heart */}
          Our Wedding Planning Services
          <FaHeart className="absolute right-10 w-6 h-6 md:w-8 md:h-8 text-[#F2E5BF]" /> {/* Right heart */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F2E5BF] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full h-auto"
            >
              <img src={service.image} alt={service.name} className="h-40 w-60 mb-4" />
              <h3 className="text-lg font-semibold text-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

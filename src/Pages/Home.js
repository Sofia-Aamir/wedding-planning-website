// Home.js
import React, { useEffect, useState } from 'react';

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

  return (
    <div
      className="relative h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center transition duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: 'rgba(203, 96, 64, 0.5)', // Light overlay effect
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Curved Text */}
      <div className="mb-4" style={{ position: 'relative', top: '120px' }}>
        <svg width="650" height="200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>cool</title>
            {/* Adjusted the path to create a more pronounced curve */}
            <path id="cool" d="M50,120 Q325,-40 600,120" fill="none" stroke="none" />
          </g>
          <text width="500">
            <textPath xlinkHref="#cool" startOffset="50%" textAnchor="middle">
              <tspan dy="-10" className="font-fredoka text-[#F2E5BF] text-3xl font-bold md:text-4xl lg:text-3xl">
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
      <div className="mb-4" style={{ position: 'relative', top: '-50px' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-dancing">
          Let Love Sparkle in Every Moment
        </h1>
      </div>

      {/* Additional Description */}
      <div className="mb-4" style={{ position: 'relative', top: '-40px', maxWidth: '900px' }}>
        <p className="text-sm md:text-lg font-sans text-center">
          Join us as we celebrate the beginning of our beautiful journey together! Each moment is a cherished memory, and we can’t wait to create new ones surrounded by loved ones. Your presence will make our day even more special as we embrace love and laughter in our lives.
        </p>
      </div>

      {/* Heartline Image */}
      <div className="mb-4" style={{ position: 'relative', top: '-60px', maxWidth: '900px' }}>
        <img src="/Images/heartline.png" alt="Heart Line" className="w-48 md:w-64 mt-4" />
      </div>
    </div>
  );
};

export default Home;

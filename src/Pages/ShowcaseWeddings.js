import React from 'react';
import Footer from '../Pages/Footer';

const weddings = [
  {
    photo: '/Images/wedding1.jpg',
    couple: 'John & Sarah',
    testimonial: 'Our wedding day was perfect, thanks to the amazing planning team!',
  },
  {
    photo: '/Images/wedding2.jpg',
    couple: 'Michael & Emily',
    testimonial: 'We couldn’t have asked for a better experience – truly unforgettable!',
  },
  {
    photo: '/Images/wedding3.jpeg',
    couple: 'David & Rachel',
    testimonial: 'The team made our dream wedding come true, every detail was flawless!',
  },
  {
    photo: '/Images/wedding4.jpeg',
    couple: 'Mark & Olivia',
    testimonial: 'An extraordinary day, every aspect was well taken care of!',
  },
  {
    photo: '/Images/wedding5.jpg',
    couple: 'James & Laura',
    testimonial: 'The entire experience was incredible, from start to finish.',
  },
  {
    photo: '/Images/wedding6.jpg',
    couple: 'Chris & Megan',
    testimonial: 'They turned our vision into reality, we are forever grateful.',
  },
  {
    photo: '/Images/wedding7.jpg',
    couple: 'Daniel & Anna',
    testimonial: 'We felt so supported throughout the planning process. Highly recommend!',
  },
  {
    photo: '/Images/wedding8.jpg',
    couple: 'Andrew & Sophie',
    testimonial: 'Everything was better than we imagined – stunning decorations!',
  },
  {
    photo: '/Images/wedding9.jpg',
    couple: 'Nick & Jessica',
    testimonial: 'Our guests were in awe, and we couldn’t have been happier!',
  },
];

const ShowcaseWeddings = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-white text-center py-6 relative" style={{ backgroundColor: '#FD8B51' }}>
        <div className="flex justify-center">
          <img src="/Images/birds.png" alt="Birds" className="w-16 h-auto mb-2" />
        </div>
        <h1 className="text-4xl font-bold mt-2">Real Weddings</h1>
        <p className="text-lg mt-2">Take a look at the wonderful weddings we've planned, along with heartfelt testimonials from happy couples.</p>
      </header>

      {/* Showcase Section */}
      <div className="showcase-weddings py-12 bg-[#CB6040]">
        
        {/* Grid Container for 3x3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 ">
          {weddings.map((wedding, index) => (
            <div key={index} className="wedding-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={wedding.photo} alt={`${wedding.couple}'s wedding`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{wedding.couple}</h3>
                <p className="text-sm italic">"{wedding.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ShowcaseWeddings;

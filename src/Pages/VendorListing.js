import React from 'react';
import Footer from '../Pages/Footer';

const VendorListing = () => {
  // Sample vendor data with additional services
  const vendors = [
    {
      name: 'Elegant Venues',
      category: 'Venue',
      contact: '123-456-7890',
      reviews: [
        'Beautiful location and excellent service!',
        'The perfect venue for our wedding!',
        'Highly recommend for a magical wedding experience!',
      ],
      image: '/Images/venue.jpg',
    },
    {
      name: 'Snapshot Photography',
      category: 'Photography',
      contact: '098-765-4321',
      reviews: [
        'Captured our day perfectly!',
        'Amazing photographer and very professional.',
        'The photos were breathtaking!',
      ],
      image: '/Images/photography.jpeg',
    },
    {
      name: 'Gourmet Catering',
      category: 'Catering',
      contact: '234-567-8901',
      reviews: [
        'Delicious food and great service!',
        'Our guests loved the variety offered!',
        'The best catering service we could ask for!',
      ],
      image: '/Images/catering.jpeg',
    },
    {
      name: 'Floral Dreams',
      category: 'Floral Arrangement',
      contact: '345-678-9012',
      reviews: [
        'The floral arrangements were stunning!',
        'Every detail was perfect and beautiful.',
        'Highly recommend for fresh flowers!',
      ],
      image: '/Images/floralarrangement.jpg',
    },
    {
      name: 'Fun Times Entertainment',
      category: 'Entertainment',
      contact: '456-789-0123',
      reviews: [
        'Kept everyone entertained!',
        'Amazing performances, loved every minute!',
        'The highlight of our wedding reception!',
      ],
      image: '/Images/entertainment.jpg',
    },
    {
      name: 'Eventful Moments',
      category: 'Event Planning',
      contact: '567-890-1234',
      reviews: [
        'Great planning and execution!',
        'Made our day stress-free and memorable!',
        'Professional and organized team!',
      ],
      image: '/Images/event-planning.jpg',
    },
    {
      name: 'Wedded Bliss Coordination',
      category: 'Wedding Coordination',
      contact: '678-901-2345',
      reviews: [
        'Perfectly coordinated our entire wedding!',
        'Attention to detail was exceptional!',
        'Made everything seamless!',
      ],
      image: '/Images/wedding-coordination.jpg',
    },
    {
      name: 'Honeymoon Travels',
      category: 'Honeymoon Planning',
      contact: '789-012-3456',
      reviews: [
        'Planned the most romantic getaway!',
        'Everything was taken care of, we just enjoyed!',
        'Highly recommend for honeymoon planning!',
      ],
      image: '/Images/honeymoon.jpg',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="text-white text-center py-6 relative" style={{ backgroundColor: '#FD8B51' }}>
        <div className="flex justify-center">
          <img src="/Images/birds.png" alt="Birds" className="w-16 h-auto mb-2" />
        </div>
        <h1 className="text-4xl font-bold mt-2">Our Wedding Vendors</h1>
      </header>

      {/* Vendor Listing Section */}
      <div className="bg-[#CB6040] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F2E5BF] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full h-auto"
            >
              <img src={vendor.image} alt={vendor.name} className="h-40 w-60 mb-4" />
              <h3 className="text-xl font-semibold text-center font-dancing text-[#CB6040]">{vendor.name}</h3>
              <p className="text-sm text-center font-semibold">Category: {vendor.category}</p>
              <p className="text-sm text-center font-semibold">Contact: {vendor.contact}</p>
              <h4 className="font-semibold mt-4">Reviews:</h4>
              <ul className="text-sm list-disc list-inside">
                {vendor.reviews.map((review, idx) => (
                  <li key={idx}>{review}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorListing;

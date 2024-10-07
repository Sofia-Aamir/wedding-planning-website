import React from 'react';
import Footer from '../Pages/Footer'; // Ensure you have the Footer component in the same directory or update the path accordingly

const AboutUs = () => {
  return (
    <div className="bg-white" style={{ paddingTop: '0px' }}> {/* Adjusted padding for navbar space */}
    <header className="text-white text-center py-6 relative" style={{ backgroundColor: '#FD8B51' }}>
  <div className="flex justify-center">
    <img src="/Images/birds.png" alt="Birds" className="w-16 h-auto mb-2" /> {/* Adjust the width (w-16) as per your image size */}
  </div>
  <h1 className="text-4xl font-bold mt-2">About Us</h1>
</header>
      <section className="text-center py-12 px-4" style={{ backgroundColor: '#F2E5BF' }}>
        <h2 className="text-2xl font-bold">Our Mission and Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to create unforgettable weddings by offering personalized planning services tailored to your unique love story.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">200+</h3>
            <p className="text-gray-700">Weddings Planned</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">15+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="text-white py-12 px-4" style={{ backgroundColor: '#FD8B51' }}>
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          We aim to make dream weddings a reality, ensuring every couple experiences a magical and stress-free journey to their big day.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Wedding Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Venue Selection</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Floral Design</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Catering</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Photography</h3>
          </div>
        </div>
      </section>

      <section className="py-12 px-4" style={{ backgroundColor: '#F2E5BF' }}>
        <h2 className="text-2xl font-bold text-center">Innovative Planning Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Personalized Checklists</h3>
            <p className="text-gray-700 mt-2">Stay on top of your wedding planning with our custom to-do lists.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Budget Planner</h3>
            <p className="text-gray-700 mt-2">Manage your wedding expenses effortlessly with our budget tracking tool.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Seating Arrangement</h3>
            <p className="text-gray-700 mt-2">Easily create seating plans to fit your venue and guest preferences.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Vendor Management</h3>
            <p className="text-gray-700 mt-2">Keep track of all your vendors in one place for a smooth wedding day.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Committed To Creating Your Dream Wedding</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Book Consultation</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Experienced Planners</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Attention to Detail</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <h3 className="text-xl font-bold">Stress-Free Planning</h3>
          </div>
        </div>
      </section>

      <section className="text-white text-center py-12 px-4" style={{ backgroundColor: '#257180' }}>
        <h2 className="text-2xl font-bold">Happy Couples Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <p>"Our wedding was beyond perfect, thanks to their expert planning and attention to detail!"</p>
            <h3 className="mt-4 font-bold">- Couple A</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <p>"We couldn’t have asked for a better experience. They truly made our day unforgettable!"</p>
            <h3 className="mt-4 font-bold">- Couple B</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg" style={{ backgroundColor: '#CB6040', transition: 'background-color 0.3s' }}>
            <p>"From start to finish, they took care of everything with such grace and professionalism."</p>
            <h3 className="mt-4 font-bold">- Couple C</h3>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How do I book a consultation?</h3>
            <p className="mt-2 text-gray-700">You can book a consultation online through our website or by contacting our team directly.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">What wedding planning services do you offer?</h3>
            <p className="mt-2 text-gray-700">We offer full-service wedding planning, day-of coordination, and everything in between.</p>
          </div>
        </div>
      </section>

      <Footer /> {/* Re-using the Footer component */}
    </div>
  );
};

export default AboutUs;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar'; 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import VendorListing from './Pages/VendorListing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vendor-listing" element={<VendorListing />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;

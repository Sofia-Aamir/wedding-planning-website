import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar'; 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import VendorListing from './Pages/VendorListing';
import PlanningTool from './Pages/PlanningTool';
import ShowcaseWeddings from './Pages/ShowcaseWeddings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vendor-listing" element={<VendorListing />} />
        <Route path="/planning-tools" element={<PlanningTool />} />
        <Route path="/testimonial" element={<ShowcaseWeddings />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;

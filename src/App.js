import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar'; 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;

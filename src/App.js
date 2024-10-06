import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar'; 
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;

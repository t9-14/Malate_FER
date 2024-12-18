import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Custom.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  const getBackgroundStyle = (path) => {
    switch (path) {
      case '/':
        return { backgroundImage: "url('../assets/Background.jpg')" };
      case '/about':
        return { backgroundImage: "url('../assets/Picture.png')" };
      case '/education':
        return { backgroundImage: "url('../assets/Schol.jpg')" };
      case '/hobbies':
        return { backgroundImage: "url('../assets/Background.jpg')" };
      case '/contact':
        return { backgroundImage: "url('../assets/Background.jpg')" };
      default:
        return {};
    }
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

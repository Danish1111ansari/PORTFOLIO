import './App.css';
import { BrowserRouter as Router , Route,Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Login from './components/Login/Login';
// import Test from './components/Test/Test';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Account" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

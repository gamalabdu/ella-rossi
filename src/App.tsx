import './App.css';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Epk from './components/Epk/Epk';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={ <Home />} />
            <Route path="about" element={ <About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="epk" element={<Epk />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

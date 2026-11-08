import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageLightbox from './components/ImageLightbox';
import MarqueeBand from './components/MarqueeBand';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Design from './pages/Design';
import Projects from './pages/Projects';
import ProjectsOngoing from './pages/ProjectsOngoing';
import ProjectsCompleted from './pages/ProjectsCompleted';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <ImageLightbox />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <MarqueeBand />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/design" element={<Design />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/ongoing" element={<ProjectsOngoing />} />
            <Route path="/projects/completed" element={<ProjectsCompleted />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}

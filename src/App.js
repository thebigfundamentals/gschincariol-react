import Navbar from './Navbar';
import LangSelector from './LangSelector';
import Footer from './Footer';
import Error404 from './Error404';
import Home from './Home';
import Writing from './Writing';
import Dev from './Dev';
import Contact from './Contact';
import Thanks from './Thanks';
import Newsletter from './Newsletter';
import { LanguageProvider } from './contexts/LanguageContext';
import { SpinnerProvider } from './contexts/SpinnerContext';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <LanguageProvider>
    <SpinnerProvider>
    <div className="App">
      <LangSelector />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/writing" element={<Writing/>} />
        <Route exact path="/dev" element={<Dev/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/thanks" element={<Thanks/>} />
        <Route exact path="/newsletter" element={<Newsletter/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </div>
    </SpinnerProvider>
    </LanguageProvider>
  );
}

export default App;

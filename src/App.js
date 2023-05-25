import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Korpa } from "./stranice/korpa/korpa";
import { Prodavnica } from "./stranice/prodavnica/prodavnica";
import { ProdavnicaKontekstProvajder } from './kontekst/prodavnica-kontekst';
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <ProdavnicaKontekstProvajder>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Prodavnica />} />
            <Route path="/korpa" element={<Korpa />} />
          </Routes>
        </Router>
      </ProdavnicaKontekstProvajder>
      <Footer />
    </div>
  );
} 

export default App;

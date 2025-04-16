import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<Home />} />
          <Route path="servizi" element={<Home />} />
          <Route path="portfolio" element={<Home />} />
          <Route path="contatti" element={<Home />} />
          {/* Altre routes verranno aggiunte in futuro */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import MedicalCamps from './pages/MedicalCamps';
import FloodRelief from './pages/FloodRelief';
import WaterSabeel from './pages/WaterSabeel';
import Education from './pages/Education';
import IslamicPrograms from './pages/IslamicPrograms';
import Donate from './pages/Donate';
import Members from './pages/Members';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="medical" element={<MedicalCamps />} />
          <Route path="flood" element={<FloodRelief />} />
          <Route path="water" element={<WaterSabeel />} />
          <Route path="education" element={<Education />} />
          <Route path="islamic" element={<IslamicPrograms />} />
          <Route path="donate" element={<Donate />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

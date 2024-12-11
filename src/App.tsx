import './App.scss'
import Layout from './tsx/layout.tsx';
import Home from './tsx/home.tsx';
import About from './tsx/about.tsx';
import Ironverse from './tsx/ironverse.tsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './tsx/portfolio/portfolio.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="ironverse" element={<Ironverse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App



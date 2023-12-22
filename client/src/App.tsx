import './App.scss'
import Layout from './tsx/layout.tsx';
import Home from './tsx/home.tsx';
import Portfolio from './tsx/portfolio.tsx';
import About from './tsx/about.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App



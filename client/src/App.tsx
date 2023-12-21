import './App.scss'


import Layout from './tsx/layout.tsx';
import Home from './tsx/home.tsx';
import Portfolio from './tsx/portfolio.tsx';
import About from './tsx/about.tsx';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  // return (
  //   <>
  //     <Header />
  //     <SideBar />
  //     {/* Drawer */}
  //     {/* Banner */}
  //     <img id="banner" src="banner.jpg"/>
  //     {/* Body */}
  //     {/* Footer */}
  //   </>
  // )

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



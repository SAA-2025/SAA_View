import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about_us/AboutUs";
import Courses from "./pages/courses/Courses";
import Services from "./pages/services/Services";
import { NotFound } from "./pages/not_found/NotFound";
import Layout from "./layout/Layout";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";

import './style.css'
import './markdown-theme.css'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import IndustryDetailPage from "./pages/industry/IndustryDetailPage";
import AboutUsDetailPage from "./pages/about_us/AboutUsDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/about-us/:id" element={<AboutUsDetailPage/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/services/:id" element={<ServiceDetailPage/>}/>
            <Route path="/industry/:id" element={<IndustryDetailPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

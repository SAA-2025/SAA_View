import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about_us/AboutUs";
import Courses from "./pages/courses/Courses";
import Services from "./pages/services/Services";
import Accouting from "./pages/services/Accouting";
import Manufacturig from "./pages/industry/Manufacturig";
import { NotFound } from "./pages/not_found/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/accounting" element={<Accouting />} />
        <Route path="/industry/manufacturing" element={<Manufacturig />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

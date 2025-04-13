import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/SAA_View/" element={<HomePage/>}/>
          <Route path="/SAA_View/about" element={<AboutUs/>}/>
          <Route path="/SAA_View/courses" element={<Courses/>}/>
          <Route path="/SAA_View/services" element={<Services/>}/>
          <Route path="/SAA_View/services/accounting" element={<Accouting/>}/>
          <Route path="/SAA_View/industry/manufacturing" element={<Manufacturig/>}/>
          <Route path="*" element={<NotFound/>}/>
          {/* <Route path="/courses" element={<Courses/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

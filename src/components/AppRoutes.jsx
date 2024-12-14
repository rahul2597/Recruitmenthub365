import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import JobOpening from "../pages/JobOpening";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobopening" element={<JobOpening />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

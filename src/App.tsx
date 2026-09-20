import Navbar from "./components/navbar";
import ProjectsPage from "./pages/projects";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

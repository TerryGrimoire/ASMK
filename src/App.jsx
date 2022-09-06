import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

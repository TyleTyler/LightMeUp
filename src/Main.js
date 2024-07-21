import "./main.css";
import Sidebar from "./Sidebar";
import HomeSection from "./HomeSection";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="Home" element={<HomeSection />} />
          <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;

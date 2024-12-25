import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./srceen/home/Home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css';  // นำเข้าไฟล์ CSS ที่มีฟอนต์ Kanit

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <SpeedInsights/>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

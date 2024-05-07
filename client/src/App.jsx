import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<SignIn />} />
        <Route path="/about" element={<SignUp />} />
        <Route path="/about" element={<Dashboard />} />
        <Route path="/about" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

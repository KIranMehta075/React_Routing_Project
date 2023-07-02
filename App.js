import logo from "./logo.svg";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import { Routes, Route, Link } from "react-router-dom";
import VideoAnalysis from "./pages/VideoAnalysis/VideoAnalysis";
import Modal from "./components/Modal/Modal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/video-analytics" element={<VideoAnalysis />} />
      <Route path="/modal" element={<Modal />} />
      {/* <Route path="/selectedOption/:option" component={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;

import './App.scss';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Guest from "./components/Reserve/Guest";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/signup" element={ <Signup />} />
      <Route path="/guest" element={ <Guest />} />
      </Routes>
    </Router>
    
  );
}

export default App;

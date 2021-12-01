import './App.scss';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Guest from "./components/Reserve/Guest";
import RegisteredUserInfo from './components/Reserve/RegisteredUserInfo';
import RegisteredUserReserve from './components/Reserve/RegisteredUserReserve';
import Confirmation from './components/Reserve/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/signup" element={ <Signup />} />
      <Route path="/guest" element={ <Guest />} />
      <Route path="/registereduserinfo" element={<RegisteredUserInfo/>}/>
      <Route path="/registereduserreserve" element={<RegisteredUserReserve/>}/>
      <Route path="/confirmation" element={<Confirmation/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

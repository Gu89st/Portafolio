import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"; 
import './App.css'
import MNavBar from './Components/NavBar'
import NavBarData from './Data/NavBarData'

function App() {
  return (
    <div className="App"> 
    <Router> 
    <MNavBar/> 
    <Routes>
    <Route path="/" element={<Navigate to="/IHomSec" />} />
      {NavBarData.map((route,index)=>( <Route key={index} 
      path={route.path} element={route.element} /> ))} 
    </Routes> 
  </Router> 
  </div>
);
}

export default App

// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
//  import Sidebar from './Components/sidebar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Attendance from './Pages/Attendance';
import Leave from './Pages/Leave';
import Logout from './Pages/Logout';
import Sidebar from './Components/sidebar';
import Listlv from "./Leaves/Listlv";
// import Mainlv from "./Leaves/Mainlv";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Sidebar>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/attendance" element={<Attendance/>}/>
    <Route path="/leave" element={<Leave/>}/>
    <Route path="/logout" element={<Logout/>}/>
   </Routes>
   </Sidebar>
   </BrowserRouter>
 {/* <Mainlv/> */}
    </div>
  );
}

export default App;

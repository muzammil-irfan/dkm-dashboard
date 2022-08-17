import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Customers from "./component/Customers/Customers";
import Dashboard from "./component/Dashboard/Dashboard";
import MainDashboard from "./component/Dashboard/MainDashboard/MainDashboard";
import TallySheet from "./component/Dashboard/TallySheet/TallySheet";
import Location from "./component/Location/Location";
import ChangePassword from "./component/Login/ChangePassword";
import ChangePin from "./component/Login/ChangePin";
import Login from "./component/Login/Login";
import Users from "./component/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/changePass" element={<ChangePassword/>} />
      <Route path="/changePin" element={<ChangePin/>} />
      <Route path="/dashboard" element={<Dashboard/>}>
      <Route index path="mainDB" element={<MainDashboard/>} />
      <Route path="customers" element={<Customers/>} />
      <Route path="users" element={<Users/>} />
      <Route path="location" element={<Location/>} />
      <Route path="tally-sheet" element={<TallySheet/>} />
      </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

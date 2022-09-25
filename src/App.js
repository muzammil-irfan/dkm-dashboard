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
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./component/common/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/changepin" element={<ChangePin />} />
          {/* <Route path="/maindashboard" element={<MainDashboard />} /> */}
          <Route path="customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="location" element={<Location />} />
          <Route path="tally-sheet" element={<TallySheet />} />
          {/* <Route path="" element={<MainDashboard />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

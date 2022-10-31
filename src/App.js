import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Customer from "./components/Customer";
import Dashboard from "./components/Dashboard";
import TallySheet from "./components/TallySheet";
import Location from "./components/Location";
import ChangePassword from "./components/Login/ChangePassword";
import ChangePin from "./components/Login/ChangePin";
import Login from "./components/Login";
import User from "./components/User";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./components/common/Sidebar";
import PdfViewer from "./components/TallySheet/PdfViewer";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/changepin" element={<ChangePin />} />
          <Route path="customer" element={<Customer />} />
          <Route path="/user" element={<User />} />
          <Route path="location" element={<Location />} />
          <Route path="tally-sheet" element={<TallySheet />} /> 
          <Route path="tally-sheet/pdf/:id" element={<PdfViewer />} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

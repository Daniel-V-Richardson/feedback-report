import { Route, Routes } from "react-router-dom";
import "./App.css";
import Report from "./components/Report/Report.jsx";
import CompDept from "./components/Complete/Dept.jsx";
import CSE from "./components/Complete/Reports/CSE";
import Dept from "./components/Report/Dept";
import CSE1 from "./components/Report/Reports/CSE1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Report />} />
        <Route path="/cse" element={<CSE />} />
        <Route path="/cse1" element={<CSE1 />} />
        <Route path="compdept" element={<CompDept />} />
        <Route path="dept" element={<Dept />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Repository from "./component/repository/Repository";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </div>
  );
}

export default App;

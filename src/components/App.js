import "../styles/app.css";
import "../styles/NavBar.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import logo from "../components/logo.png";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/" element={AddProperty} />
      </Routes>
      <img className="nav-bar-logo" src={logo} alt="NavBar" />
      <h2>Surreal Estate</h2>
    </div>
  );
}

export default App;

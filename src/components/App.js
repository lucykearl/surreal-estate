import "../styles/app.css";
import "../styles/NavBar.css";
import NavBar from "./NavBar";
import logo from "../components/logo.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <img className="nav-bar-logo" src={logo} alt="NavBar" />
      <h2>Surreal Estate</h2>
    </div>
  );
}

export default App;

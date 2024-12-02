// App.js
import { NavLink, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet/>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center'}}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contato</NavLink>
      </div>
    </div>
  );
}

export default App;
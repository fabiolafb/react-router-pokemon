import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; //componente que permite saber qué ruta está activa
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <>
      <Container className="contenedor_nav">
        <img src={logo} alt="" className="logo_navbar" />

        <div className="div_links">
          <div className="div_home">
            <NavLink end className={setActiveClass} to="/">
              <b>Home</b>
            </NavLink>
          </div>

          <div className="div_poke">
            <NavLink className={setActiveClass} to="/pokemones">
              <b>Pokemones</b>
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
}

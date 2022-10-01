import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import flechavolver from "../assets/img/flecha-volver.png"

export default function ButtonCard() {
  return (
    <div>
      <Link to="/pokemones">
        <img src={ flechavolver } component={Link} alt='' className='flecha-volver' />
        {/* <Button component={Link} className="button-card">
          Volver
        </Button> */}
      </Link>
    </div>
  );
}

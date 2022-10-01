import { Link } from "react-router-dom";
import flechavolver from "../assets/img/flecha-volver.png"

export default function Flechavolver() {
  return (
    <div>
      <Link to="/pokemones">
        <img src={ flechavolver } component={Link} alt='' className='flecha-volver' data-toggle="tooltip" data-placement="top"
                title="Volver" />
      </Link>
    </div>
  );
}

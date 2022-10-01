import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //hook que permite redireccionamiento programático
import { Button } from "react-bootstrap";

export default function Pokemones() {
  //Estados
  const [pokemones, setPokemones] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState("");

  //Función que llama a la API
  const endpoint = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const getDatosPokemones = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    setPokemones(data.results.sort((a, b) => a.name.localeCompare(b.name)));
    //console.log(data);
  };

  //Función que redirecciona el botón al pokemon seleccionado
  const navigate = useNavigate();
  const irAPokemones = () => {
    if (selectPokemon) navigate(`/pokemones/${selectPokemon}`);
    else alert("Debes seleccionar un pokemon");
  };

  //Usar el hook useEffect para ejecutar los cambios al array
  useEffect(() => {
    getDatosPokemones(); /*callback*/
  }, []);

  return (
    <div className="pokemones_div">
      <h1>Selecciona un pokemón</h1>
      <select
        value={selectPokemon}
        className="selector"
        onChange={(e) => setSelectPokemon(e.target.value)}
      >
        <option value="" disabled>
          Pokemones
        </option>

        {pokemones.map(({name}, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))} 
      </select>
      <Button onClick={irAPokemones} variant="" className="mt-3">
        Ver detalle
      </Button>
    </div>
  );
}


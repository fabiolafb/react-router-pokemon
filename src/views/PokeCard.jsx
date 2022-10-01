import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //estado que recibe el valor capturado (name)
//import PokeCard from "../components/PokeCard";
import { Card } from "react-bootstrap";
import Flechavolver from "../components/Flechavolver";

export default function PokeCard() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getDatoPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`); //trae la API(url) y el nombre del pokemon seleccionado
    const dataArray = await res.json();
    const src = dataArray.sprites.other.dream_world.front_default;
    const stats = dataArray.stats.map((stat) => ({
      base: stat.base_stat,
      name: stat.stat.name,
    }));
    const types = dataArray.types.map((elem) => elem.type.name).join(" "); // .join agrega algo, ej .un espacio entre ambos (string vacio)
    setPokemon({ name, stats, src, types }); // guarda solo lo que se requiere de la API
    //console.log({ name, stats, src, types });
  };
  useEffect(() => {
    getDatoPokemon(name);
  }, [name]);

  return (
    <div className="contenedor-card">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={pokemon.src} className="hover" />
        <Card.Body className="poke-detalles">
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <ul>
            <Card.Text>
              {pokemon.stats?.map((stat, i) => (
                <li key={i}>
                  {stat.name}: {stat.base}
                </li>
              ))}
            </Card.Text>
          </ul>
          <Card.Text className="text-secondary">
            {" "}
            <i>{pokemon.types}</i>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Flechavolver />
    </div>
  );
}

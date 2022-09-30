import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import PokeCard from "../components/PokeCard";

export default function PokeDetalles() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getDatoPokemon = async (name) => {
    //console.log(`${url}/${name}`);
    const res = await fetch(`${url}/${name}`);
    const dataArray = await res.json();
    const src = dataArray.sprites.other.dream_world.front_default;
    const stats = dataArray.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }));
    const types = dataArray.types.map((elem) => elem.type.name).join(" ");
    setPokemon({ name, stats, src, types });
    //console.log({ name, stats, src, types });
  };
  useEffect(() => {
    getDatoPokemon(name);
  }, [name]);

  return (
    <>
      <PokeCard pokemon={pokemon} />
    </>
  );
}

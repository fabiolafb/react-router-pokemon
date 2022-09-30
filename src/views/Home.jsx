import pokeimagen from "../assets/img/poke-imagen.png"

export default function Home() {

  return (
    <div className="home_div">
      <h1>Bienvenido a maestro pokemón</h1>
      <img src={ pokeimagen } alt='' className='pokeimagen' />
      
    </div>
  );
}

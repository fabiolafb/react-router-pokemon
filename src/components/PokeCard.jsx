import { Card } from "react-bootstrap";
import ButtonCard from "./ButtonCard";

export default function PokeCard({ pokemon }) {
  const { name, stats, src, types } = pokemon;

  return (
    <div className="contenedor-card">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={src} className="hover"/>
        <Card.Body className="poke-detalles">
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <ul>
            <Card.Text>
              {stats?.map((stat, i) => (
                <li key={i}>
                  {stat.name}: {stat.base}
                </li>
              ))}
            </Card.Text>
          </ul>
          <Card.Text className="text-secondary">
            {" "}
            <i>{types}</i>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <ButtonCard />
    </div>
  );
}

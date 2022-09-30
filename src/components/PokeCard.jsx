import { Card } from "react-bootstrap";

export default function PokeCard({ pokemon }) {
  const { name, stats, src, types } = pokemon;
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ul >
          <Card.Text>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </Card.Text>
        </ul>
        <Card.Text className="text-secondary">{types}</Card.Text>
      </Card.Body>
    </Card>
  );
}

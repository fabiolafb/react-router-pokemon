import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="error">
      <h2 className="mb-4">⛔ Error, esa ruta no existe ⛔</h2>
    </Container>
  );
};
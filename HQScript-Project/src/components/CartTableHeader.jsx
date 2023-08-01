import { Card, Col, Row } from "react-bootstrap";

export default function CartTableHeader() {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Card.Text className="text-muted">Produtos</Card.Text>
      </Col>
      <Col></Col>
    </Row>
  );
}

import { Badge, Button, Card, ListGroup, Row } from "react-bootstrap";

export default function CartResume(props) {
  return (
    <Card className="cartCardResume">
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <Card.Title className="text-center">Produto final</Card.Title>
            <Card.Text>
              Subtotal: R$ {props.total.toString().replace(".", ",")}
            </Card.Text>
            <Card.Text>
              Frete: <Badge bg="success">Grátis</Badge>{" "}
            </Card.Text>
            <Card.Text>
              Total: R$ {props.total.toString().replace(".", ",")}
            </Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Button variant="success">Finalizar pedido</Button>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

import {
  Container,
  Row,
  Button,
  Card,
  ListGroup,
  Badge,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
export default function Cards({ propsData }) {
  return (
    <Container className="pt-5 pb-5">
      <Row className="gap-1">
        {propsData.map((props) => (
          <Col key={props.id} className="pt-5 pb-5 ">
            <Card className="h-100 cardHome">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img
                  className="p-2"
                  variant="top"
                  src={props.image}
                  style={{ width: "16.3rem", height: "21rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  <strong>{props.title}</strong>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-center">
                    <Badge bg="secondary">{props.categories[0]}</Badge>
                    <Badge bg="secondary">{props.categories[1]}</Badge>
                    <Badge bg="secondary">{props.categories[2]}</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Text>{props.description}</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center">
                    Preço: R$ {props.price.toString().replace(".", ",")}
                  </ListGroup.Item>
                </ListGroup>

                <Link to={`/${props.id}`}>
                  <Button className="btn-outline-dark card-button">Ver</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import {
  Col,
  Container,
  Row,
  Button,
  Card,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import books from "../../database.json";
import useCart from "../hooks/useCart";
import { useState } from "react";
import "../styles/cards.scss";
export default function ShowBook() {
  const { cart, addProduct } = useCart();
  const { id } = useParams();
  const [addCart, setAddCart] = useState("Adicionar ao carrinho");
  const bookToShow = books.find((book) => book.id === +id);
  const handleClick = (ev) => {
    ev.preventDefault();
    addProduct(bookToShow);
    if (cart.indexOf(bookToShow.id)) {
      setAddCart("Adicionar Novamente");
    }
  };

  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col></Col>
        <Col>
          <Card className="showCard">
            <Row>
              <Col xs={4} md={4} lg={4}>
                <Card.Img
                  className="p-4 cardImage"
                  variant="top"
                  src={bookToShow.image}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    <strong>{bookToShow.title}</strong>
                  </Card.Title>
                  <h4>
                    <Badge bg="success">
                      R$ {bookToShow.price.toString().replace(".", ",")}
                    </Badge>
                  </h4>

                  <Card.Text>{bookToShow.fullDescription}</Card.Text>
                  <h1>
                    <Badge bg="secondary">Categorias do produto</Badge>
                  </h1>
                  <ListGroup className="pb-4">
                    <ListGroup.Item>{bookToShow.categories[0]}</ListGroup.Item>
                    <ListGroup.Item>{bookToShow.categories[1]}</ListGroup.Item>
                    <ListGroup.Item>{bookToShow.categories[2]}</ListGroup.Item>
                  </ListGroup>

                  <Button
                    className="btn-outline-dark card-button"
                    onClick={handleClick}
                  >
                    {addCart}
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

import { CloseButton, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useCart from "../hooks/useCart";
import CartResume from "../components/CartResume";
import CartTableHeader from "../components/CartTableHeader";
export default function Cart() {
  let total = 0;
  const { cart, removeProduct } = useCart();
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return (
    <Container className="pb-5">
      <Card style={{ width: "100%" }} className="pb-5">
        <Card.Body>
          <Card.Title className="text-center">
            <h1>Carrinho de compras</h1>
          </Card.Title>
        </Card.Body>
        <Row>
          <CartTableHeader />
          <Col xs={12} md={7}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {cart.length > 0 ? (
                  cart.map((product) => (
                    <Row className="pb-3" key={product.cartId}>
                      <Col xs={1} md={{ span: 3, offset: 1 }}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{ width: "6rem", height: "8rem" }}
                        />
                      </Col>
                      <Col xs={12} md={4}>
                        <strong>{product.title}</strong>
                      </Col>
                      <Col xs={6} md={2}>
                        <strong>
                          R$ {product.price.toString().replace(".", ",")}
                        </strong>
                      </Col>

                      <CloseButton
                        onClick={() => removeProduct(product.cartId)}
                      />
                    </Row>
                  ))
                ) : (
                  <h5 className="text-center pt-2 ">
                    Carrinho vazio... Adicione alguns livros.
                  </h5>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={{ offset: 3 }} md={{ offset: 4 }} xl={{ offset: 1 }}>
            <CartResume total={total} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

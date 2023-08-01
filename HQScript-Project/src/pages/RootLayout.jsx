import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.scss";
import "../styles/footer.scss";
import "../styles/cards.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import HomeImage from "../components/HomeImage";
import CartImage from "../components/CartImage";

export default function RootLayout() {
  return (
    <>
      <header className="header">
        <Container className="headerContainer">
          <Row>
            <Col xs={1} className="pt-2">
              <HomeImage />
            </Col>
            <Col
              xs={{ span: 5, offset: 2 }}
              md={{ span: 7, offset: 1 }}
              lg={{ span: 8, offset: 1 }}
            >
              <SearchBar />
            </Col>
            <Col xs={{ offset: 1 }} className="pt-4">
              <Link to={`/cart`}>
                <CartImage />
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
      <Nav className="nav justify-content-center">
        <Nav.Item>
          <Nav.Link href="/marvel" className="navLink">
            Marvel
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dc" className="navLink">
            DC
          </Nav.Link>
        </Nav.Item>
        <Nav.Link href="/manga" className="navLink">
          Manga
        </Nav.Link>
        <Nav.Item>
          <Nav.Link href="/hq" className="navLink">
            HQ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/shounen" className="navLink">
            Shounen
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/seinen" className="navLink">
            Seinen
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Outlet />
      </div>
      <footer className="footer">
        <Container>
          <Row className="pt-4">
            <Col xs={{ offset: 4 }}>
              <p>
                Projeto pessoal feito por{" "}
                <Link
                  to="https://www.linkedin.com/in/rafaelm0reira/"
                  target="_blank"
                >
                  Rafael Moreira ©
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

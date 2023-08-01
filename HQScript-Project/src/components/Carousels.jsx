import { Carousel, Col, Row } from "react-bootstrap";

export default function Carousels() {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Carousel xs={12}>
          <Carousel.Item>
            <img src="IMG1.png" className="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="IMG2.png" className="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="IMG3.png" className="img" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col></Col>
    </Row>
  );
}

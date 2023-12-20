import { Image, Button, Row, Col } from "react-bootstrap";

const HomeProductCard = (props) => {
  return (
    <div
      className="home-product-card"
      style={{
        backgroundImage: `https://streetwear.com.ua/img/b/1463_3_l2.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row className="d-flex justify-content-center align-items-center w-100">
       
        <Col md className="d-flex justify-content-center align-items-center">
          <Image fluid src={props.image} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default HomeProductCard;

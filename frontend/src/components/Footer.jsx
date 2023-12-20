import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logoWhite from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container fluid="sm">
        <Row>
          <Col className="text-center py-3" md>
            <p className="mt-3" style={{ fontSize: "1vw" }}>
              Developed by
              <span className="footer-developer">Nastia</span>
            </p>
          </Col>
          <Col className="text-center py-3" md>
            <p className="mt-5">
              <Link to="/profile">Help</Link>
              </p>
            <p className="mt-5">
              <Link to="/profile">me</Link>
            </p>
            <p>
              <Link to="/register">please</Link>
            </p>
          </Col>
          <Col className="text-center py-3" md>
            <h6>Contanct Info</h6>
            <p className="mt-5">(800) 8001-8588</p>
            <p>ruzhichanka</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

import React from "react";
import s from "./Header.module.css";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className={s.Header}>
      <Row>
        <Col>
          <div className={s.movie}>Movie List</div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

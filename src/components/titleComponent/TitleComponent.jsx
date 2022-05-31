import React from "react";
import { Row, Col } from "antd";
import "./TitleComponent.css";
const TitleComponent = () => {
  return (
    <>
      <Row justify="space-around" className="titleComponent ">
        <Col xxl={11} xl={11} lg={12} md={24} sm={24}>
          {" "}
          <h4 style={{ color: "#644F9C" }}>
            {" "}
            <b>Here will be a title</b>
          </h4>
          <p>
            <b>Here will be a text</b>
          </p>
        </Col>

        <Col xxl={11} xl={11} lg={12} md={24} sm={24}>
          <div></div>
          <Row justify="center">
            <Col xxl={11} xl={11} lg={12} md={24} sm={24} className="artWork">
              <h5>
                <b>Artwork for title 1</b>
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TitleComponent;

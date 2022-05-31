import React from "react";
import { Divider, Row, Col, Button } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import "./AvailableComponent.css";

const AvailableComponent = () => {
  return (
    <>
      <Divider>
        <h4 style={{ color: "#644F9C" }}>AVAILABLE FOR EVERYONE</h4>
      </Divider>
      <div style={{ textAlign: "center" }}>
        <h6>
          <b>Here will be a text</b>
        </h6>
      </div>
      <Row justify="center" style={{ marginTop: "90px" }}>
        <Col xxl={7} xl={7} lg={24} md={24} sm={24}>
          <Row justify="center">
            <Col xxl={11} xl={11} lg={24} md={24} sm={24}>
              <div className="roundedDiv">
                <NotificationOutlined className="iconStyle" />
              </div>
              <div className="textdiv">
                <h6>
                  <b>text1</b>
                </h6>
                <Button shape="round" className="avaiableBtn">
                  Hello1
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xxl={7}
          xl={7}
          lg={24}
          md={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          <Row justify="center">
            <Col xxl={11} xl={11} lg={24} md={24} sm={24}>
              <div className="roundedDiv">
                <NotificationOutlined className="iconStyle" />
              </div>
              <div className="textdiv">
                <h6>
                  <b>text2</b>
                </h6>
                <Button shape="round" className="avaiableBtn">
                  Hello2
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xxl={7}
          xl={7}
          lg={24}
          md={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          <Row justify="center">
            <Col xxl={11} xl={11} lg={24} md={24} sm={24}>
              <div className="roundedDiv">
                <NotificationOutlined className="iconStyle" />
              </div>
              <div className="textdiv">
                <h6>
                  <b>text3</b>
                </h6>
                <Button shape="round" className="avaiableBtn">
                  Hello3
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AvailableComponent;

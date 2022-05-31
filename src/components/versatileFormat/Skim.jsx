import React from "react";
import { Row, Col } from "antd";
const Skim = () => {
  return (
    <>
      <Row justify="space-evenly">
        <Col
          xxl={11}
          xl={11}
          lg={24}
          md={24}
          sm={24}
          style={{
            backgroundColor: "#644F9C",
            textAlign: "center",
            padding: "70px 0px",
          }}
        >
          <h5 style={{ color: "white" }}>Ad Format</h5>
          <h5 style={{ color: "white" }}>Explanation graphics of ad format</h5>
          <h5 style={{ color: "white" }}>(Image will be changed)</h5>
        </Col>
        <Col xxl={11} xl={11} lg={24} md={24} sm={24}>
          <h5 style={{ color: "#FF6F00" }}>
            <b>Skim</b>
          </h5>
          <h5>
            <b>
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers.
            </b>
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Skim;

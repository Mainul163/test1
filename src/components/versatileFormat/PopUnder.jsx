import React from "react";
import { Row, Col } from "antd";
const PopUnder = () => {
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
            <b>POP-UNDER</b>
          </h5>
          <h5>
            <b>
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </b>
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default PopUnder;

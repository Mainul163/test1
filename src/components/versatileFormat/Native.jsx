import React from "react";
import { Row, Col } from "antd";
const Native = () => {
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
            <b>Native</b>
          </h5>
          <h5>
            <b>
              Ad format with the image and the title, that perfectly fits into
              the content of the site. Native ads are placed in the most visible
              areas of the page and, thus, this format shows good results and
              the level of interaction.
            </b>
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Native;

import React, { useState } from "react";
import { Divider, Row, Col, Button } from "antd";
import Skim from "./Skim";
import BannerAd from "./BannerAd";
import Native from "./Native";
import PopUnder from "./PopUnder";
const VersatileFormat = () => {
  const [popVisible, setPopVisible] = useState(true);
  const [nativeVisible, setNativeVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [skimVisible, setSkimVisible] = useState(false);
  const pop = () => {
    setPopVisible(true);
    setBannerVisible(false);
    setNativeVisible(false);
    setSkimVisible(false);
  };
  const banner = () => {
    setPopVisible(false);
    setBannerVisible(true);
    setNativeVisible(false);
    setSkimVisible(false);
  };
  const native = () => {
    setPopVisible(false);
    setBannerVisible(false);
    setNativeVisible(true);
    setSkimVisible(false);
  };
  const skim = () => {
    setPopVisible(false);
    setBannerVisible(false);
    setNativeVisible(false);
    setSkimVisible(true);
  };
  return (
    <>
      <Divider>
        <h4 style={{ color: "#644F9C" }}>VERSATILE AD FORMATS</h4>
      </Divider>

      <Row justify="space-evenly">
        <Col
          xxl={5}
          xl={5}
          md={24}
          lg={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          <Button
            shape="round"
            style={{ backgroundColor: popVisible && "orange" }}
            onClick={pop}
          >
            POP-UNDER{" "}
          </Button>
        </Col>
        <Col
          xxl={5}
          xl={5}
          md={24}
          lg={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          {" "}
          <Button
            shape="round"
            style={{ backgroundColor: bannerVisible && "orange" }}
            onClick={banner}
          >
            BANNER AD{" "}
          </Button>
        </Col>
        <Col
          xxl={5}
          xl={5}
          md={24}
          lg={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          {" "}
          <Button
            shape="round"
            style={{ backgroundColor: nativeVisible && "orange" }}
            onClick={native}
          >
            NATIVE{" "}
          </Button>
        </Col>
        <Col
          xxl={5}
          xl={5}
          md={24}
          lg={24}
          sm={24}
          style={{ textAlign: "center" }}
        >
          <Button
            shape="round"
            style={{ backgroundColor: skimVisible && "orange" }}
            onClick={skim}
          >
            SKIM{" "}
          </Button>
        </Col>
      </Row>
      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
        {skimVisible && <Skim />}

        {bannerVisible && <BannerAd />}

        {nativeVisible && <Native />}

        {popVisible && <PopUnder />}
      </div>
    </>
  );
};

export default VersatileFormat;

import React from "react";
import { Row, Col, Button } from "antd";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <Row justify="space-around">
        <Col xxl={11} xl={11} lg={11} md={11} sm={12}>
          <h3>
            <b>Logo</b>
          </h3>
        </Col>
        <Col xxl={11} xl={11} lg={11} md={11} sm={12}>
          <Row justify="end">
            <Col
              xxl={11}
              xl={11}
              lg={11}
              md={11}
              sm={12}
              style={{ textAlign: "end" }}
            >
              <span style={{ color: "#00FF00" }}>
                <b>BN /</b>
              </span>

              <span>
                {" "}
                <b>EN</b>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">
          Travasia
        </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto">
                {/* <li class="nav-item me-5">
                  <a class="nav-link active " href="#">
                    HOME
                  </a>
                </li> */}
                <li class="nav-item me-5">
                  <a class="nav-link active" href="#">
                    HOME
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link " href="#">
                    ADVERTISERS
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link " href="#">
                    PUBLISHERS
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link " aria-current="page" href="#">
                    INFLUENCERS
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link " aria-current="page" href="#">
                    AD FORMATS
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link" aria-current="page" href="#">
                    BLOG
                  </a>
                </li>
                <li class="nav-item me-5">
                  <a class="nav-link " aria-current="page" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <Row className="rightDiv" justify="space-evenly">
                <Col xxl={11} xl={11} lg={12} md={24} sm={24}>
                  <Button shape="round" className="loginBtn">
                    LOGIN
                  </Button>
                </Col>
                <Col xxl={11} xl={11} lg={12} md={24} sm={24}>
                  <Button shape="round" className="singupBtn">
                    SIGN UP
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/TopNav"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import Brandonpic from "../images/BrandonPic.jpg"

const jumbo = {
  backgroundColor: "transparent ",
}

const SecondPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />
        <div className="header"></div>
        <Container>
          <Row>
            <Col sm={6}>
              <Jumbotron style={jumbo}>
                {" "}
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col sm={6}>
              {" "}
              <img src={Brandonpic} width={300} />{" "}
            </Col>
          </Row>
          <div className="main">
            <Row>
              <Col sm={6}>
                <div class="row">
                  <div class="col-md-4 ">
                    <div class="view overlay"></div>

                    <img src={Brandonpic} />
                  </div>

                  <div class="col-md-7 text-md-left ml-3 mt-3">
                    <a href="#!" class="green-text">
                      <h6 class="h6 pb-1">
                        <i class="fas fa-desktop pr-1"></i> Work
                      </h6>
                    </a>

                    <h6 class="h6 mb-4">This is title of the news</h6>

                    <h6 class="font-weight-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae
                    </h6>
                  </div>
                </div>{" "}
              </Col>
              <Col sm={6}>
                <div class="row">
                  <div class="col-md-4 ">
                    <div class="view overlay">
                      <img src={Brandonpic} />
                      <a>
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                  </div>

                  <div class="col-md-7 text-md-left ml-3 mt-3">
                    <a href="#!" class="green-text">
                      <h6 class="h6 pb-1">
                        <i class="fas fa-desktop pr-1"></i> Work
                      </h6>
                    </a>

                    <h6 class="h6 mb-4">This is title of the news</h6>

                    <h6 class="font-weight-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae
                    </h6>
                  </div>
                </div>{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <div class="row">
                  <div class="col-md-4 ">
                    <div class="view overlay">
                      <img src={Brandonpic} />
                    </div>
                  </div>

                  <div class="col-md-7 text-md-left ml-3 mt-3">
                    <a href="#!" class="green-text">
                      <h6 class="h6 pb-1">
                        <i class="fas fa-desktop pr-1"></i> Work
                      </h6>
                    </a>

                    <h6 class="h6 mb-4">This is title of the news</h6>

                    <h6 class="font-weight-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae
                    </h6>
                  </div>
                </div>{" "}
              </Col>
              <Col sm={6}>
                <div class="row">
                  <div class="col-md-4 ">
                    <div class="view overlay">
                      <img src={Brandonpic} />
                      <a>
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                  </div>

                  <div class="col-md-7 text-md-left ml-3 mt-3">
                    <a href="#!" class="green-text">
                      <h6 class="h6 pb-1">
                        <i class="fas fa-desktop pr-1"></i> Work
                      </h6>
                    </a>

                    <h6 class="h6 mb-4">This is title of the news</h6>

                    <h6 class="font-weight-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae
                    </h6>
                  </div>
                </div>{" "}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  </Layout>
)

export default SecondPage
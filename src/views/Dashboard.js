
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
} from "variables/charts.js"


const Dashboard = () => {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Medida en metros cubicos</h5>
                    <CardTitle tag="h2">Metros cúbicos consumidos(m3)</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <i style={{marginRight:'10px', marginTop:'6px'}}>Registros filtrados hace: </i>
                      <Button
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Semana 1
                        </span>
                        <span className="d-block d-sm-none">
                          S1
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Semana 2
                        </span>
                        <span className="d-block d-sm-none">
                          S2
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Semana 3
                        </span>
                        <span className="d-block d-sm-none">
                          S3
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-warning">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Nivel de Pozo(metros)</p>
                      <CardTitle tag="h3">5.4</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Caudal(ltrs)</p>
                      <CardTitle tag="h3">3.16</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-success">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tiempo para sincronización</p>
                      <p className="card-category">En desarrollo...</p>
                      <CardTitle tag="h3">00:00:00</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>        
        </Row>
        
      </div>
    </>
  );
};

export default Dashboard;

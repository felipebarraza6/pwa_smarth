/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import {
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10,
} from "variables/charts.js";

const Charts2 = () => {
  return (
    <>
      <div className="content">
        <h2 className="text-center">Analisis de datos</h2>      
        <div style={{marginBottom:'0px'}}>

        </div>
        <Row className="mt-5">
          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Dia maximo de consumo del mes</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                  6332 / 3-JUN
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Cantidad de estanques llenados las ultimas 24 hrs</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                  2
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>                
                <h5 className="card-category">Recuperacion de pozo</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-info" /> 0 Seg (en desarrollo)
                </CardTitle>
              </CardHeader>              
            </Card>
          </Col>
        </Row>        
      </div>
    </>
  );
};

export default Charts2;

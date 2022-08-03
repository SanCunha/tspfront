import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const axios = require("axios").default;

const Params = (props) => {
  const [cities, setCities] = useState(10);
  const [iterations, setIterations] = useState(100);
  const [algorithm, setAlgorithm] = useState(props.algorithm);
  const [ants, setAnts] = useState(10);
  const [alpha, setAlpha] = useState(1.0);
  const [beta, setBeta] = useState(3.0);
  const [rho, setRho] = useState(0.1);
  const [weight, setWeight] = useState(1.0);

  const handleChangeCities = (event) => {
    setCities(event.target.value);
  };

  const handleChangeIterations = (event) => {
    setIterations(event.target.value);
  };

  const handleChangeAlgorithm = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleChangeAnts = (event) => {
    setAnts(event.target.value);
  };

  const handleChangeAlpha = (event) => {
    setAlpha(event.target.value);
  };

  const handleChangeBeta = (event) => {
    setBeta(event.target.value);
  };

  const handleChangeRho = (event) => {
    setRho(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let qs = require("qs");
    let data = qs.stringify({
      cities: cities,
      iterations: iterations,
      algorithm: "TSP",
      _colony_size: ants,
      _alpha: alpha,
      _beta: beta,
      _rho: rho,
      _pheromone_deposit_weight: weight,
      _mode: "Random",
    });

    let config = {
      method: "post",
      url: "http://5859-2804-4518-8b5-3100-6e25-d6c5-8710-4ea6.ngrok.io/api/tsp",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const resp = await axios(config);

      props.setLogs(resp.data.logs);
      props.setSolution(resp.data);
      // return resp.data;
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Table variant={{ width: "none" }}>
        <thead>
          <tr>
            <th colSpan={2}>Parâmetros Gerais</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Cidades:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={cities}
                onChange={handleChangeCities}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Iteraçãoes:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={iterations}
                onChange={handleChangeIterations}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" type="submit">
        {props.algorithm + " => Run!"}
      </Button>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>Parâmetros ACO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Formigas:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={ants}
                onChange={handleChangeAnts}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Alpha:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={alpha}
                onChange={handleChangeAlpha}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Beta:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={beta}
                onChange={handleChangeBeta}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label column sm={8}>
                RHO:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={rho}
                onChange={handleChangeRho}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label column sm={8}>
                Peso:
              </Form.Label>
            </td>
            <td>
              <Form.Control
                type="text"
                value={weight}
                onChange={handleChangeWeight}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};

export default Params;

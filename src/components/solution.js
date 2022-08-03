import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Logs from "./logs";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ZAxis,
} from "recharts";

const Solution = (props) => {
  var { data } = props;
  let data01 = [];
  data.coords[0].map((coord, idx) => {
    let obj = {
      name: data.route[idx],
      x: data.coords[1][idx],
      y: data.coords[0][idx],
      z: 200,
    };
    data01.push(obj);
  });
  data01.push({
    name: data01[0].name,
    x: data01[0].x,
    y: data01[0].y,
    z: 200,
  });

  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        justifyContent: "space-around",
        height: "45%",
        border: "solid 1px white",
      }}
    >
      <Form
        style={{
          width: "20%",
        }}
      >
        <Row>
          <h3> {props.title}</h3>
          <Col>
            <Form.Label>Rota</Form.Label>
          </Col>
          <Col>
            <Form.Control value={data.route} disabled />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Distância</Form.Label>
          </Col>
          <Col>
            <Form.Control value={data.value} disabled />
          </Col>
        </Row>
      </Form>
      <div className="line-chart-wrapper">
        <ScatterChart
          width={450}
          height={250}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            // name="Representação"
            data={data01}
            fill="#82ca9d"
            line
            // shape="diamond"
          >
            <LabelList dataKey="name" />
          </Scatter>
        </ScatterChart>
      </div>
      <div
        style={{
          "max-height": "100%",
          overflow: "auto",
        }}
      >
        <Logs logs={data.logs} />
      </div>
    </div>
  );
};

export default Solution;

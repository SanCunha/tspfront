import React, { useState } from "react";

import "./App.css";

import ButtonGroup from "react-bootstrap/Button";
import { ToggleButton } from "react-bootstrap";
import Params from "./components/params";
// import Logs from "./components/logs";
import Solution from "./components/solution";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [radioValue, setRadioValue] = useState("TSP");
  const [logs, setLogs] = useState([
    {
      iteration: 0,
      route: "-",
      value: 0.0,
    },
  ]);
  // const [solution, setSolution] = useState({
  //   route: "-",
  //   value: "-",
  //   coords: [
  //     [93, 15, 38, 65, 49, 56, 59, 35, 40, 42],
  //     [76, 40, 8, 38, 7, 72, 85, 82, 96, 12],
  //   ],
  // });
  const [solution, setSolution] = useState({
    random: {
      route: "-",
      value: "-",
      coords: [
        [93, 15, 38, 65, 49, 56, 59, 35, 40, 42],
        [76, 40, 8, 38, 7, 72, 85, 82, 96, 12],
      ],
      logs: [
        {
          iteration: 0,
          route: [0],
          value: 0.0,
        },
      ],
    },
    aco: {
      route: "-",
      value: "-",
      coords: [
        [93, 15, 38, 65, 49, 56, 59, 35, 40, 42],
        [76, 40, 8, 38, 7, 72, 85, 82, 96, 12],
      ],
      logs: [
        {
          iteration: 0,
          route: [0],
          value: 0.0,
        },
      ],
    },
  });
  const radios = [
    { name: "TSP", value: "TSP" },
    { name: "VRP", value: "VRP" },
    { name: "VRPTW", value: "VRPTW" },
    { name: "VRPTWAP", value: "VRPTWAP" },
  ];
  return (
    <div className="App">
      <div className="Left-Painel">
        <Params
          algorithm={radioValue}
          setLogs={setLogs}
          setSolution={setSolution}
        />
      </div>
      <div className="Middle-Painel">
        <Solution data={solution.random} title={"Random"} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup variant="none">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <Solution data={solution.aco} title={"ACO"} />
      </div>
      {/* <div className="Right-Painel">
        <Logs logs={logs} />
      </div> */}
    </div>
  );
}

export default App;

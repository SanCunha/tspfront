import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const Logs = (props) => {
  const printLogs = (logs) => {
    return logs.map((log, idx) => {
      console.log("log.route", log.route);
      let route = "";
      log.route.map((idx) => {
        route += `${idx} => `;
      });
      return (
        <tr name={idx}>
          <td>{log.iteration}</td>
          <td>
            <Form.Control value={route} disabled />
          </td>
          <td>
            <Form.Control value={log.value} disabled />
          </td>
        </tr>
      );
    });
  };
  return (
    <Table
      style={{
        width: "95%",
        "align-self": "baseline",
      }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Rota</th>
          <th>Distância</th>
        </tr>
      </thead>
      <tbody>{printLogs(props.logs)}</tbody>
    </Table>
  );
};

export default Logs;

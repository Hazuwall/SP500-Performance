import React from "react";
import BarColumn from "./BarColumn";
import "./BarChartPanel.css";

const BarChartPanel = (props) => {
  const itemList = props.items.map((t) => (
    <tr>
      <BarColumn
        label={t.value + props.unit}
        value={t.value / props.scale}
        positive={false}
      />
      <td>{t.name}</td>
      <BarColumn
        label={t.value + props.unit}
        value={t.value / props.scale}
        positive={true}
      />
    </tr>
  ));
  return (
    <table className="bar-chart-panel">
      <tbody>{itemList}</tbody>
    </table>
  );
};

export default BarChartPanel;

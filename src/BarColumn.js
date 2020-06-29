import React from "react";
import "./BarColumn.css";

const BarColumn = (props) => {
  if (props.positive ^ (props.value > 0)) {
    return <td className="bar-col"></td>;
  }
  if (props.positive) {
    return (
      <td className="bar-col bar-col_pos">
        <div
          className="bar bar_pos"
          style={{
            width: props.value * 60 + "%",
          }}
        ></div>
        <span>{props.label}</span>
      </td>
    );
  } else {
    return (
      <td className="bar-col bar-col_neg">
        <span>{props.label}</span>
        <div
          className="bar bar_neg"
          style={{
            width: -props.value * 60 + "%",
          }}
        ></div>
      </td>
    );
  }
};

export default BarColumn;

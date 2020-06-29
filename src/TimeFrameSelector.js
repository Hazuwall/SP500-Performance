import React from "react";

const TimeFrameSelector = (props) => {
  return (
    <form>
      <select defaultValue="0" onChange={props.onChange}>
        <option value="0">Real-Time</option>
        <option value="1">1 Day</option>
        <option value="2">5 Days</option>
        <option value="3">1 Month</option>
        <option value="4">3 Months</option>
        <option value="5">Year-To-Date</option>
        <option value="6">1 Year</option>
        <option value="7">3 Years</option>
        <option value="8">5 Years</option>
        <option value="9">10 Years</option>
      </select>
    </form>
  );
};

export default TimeFrameSelector;

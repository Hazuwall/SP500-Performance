import React, { useState, useEffect } from "react";
import TimeFrameSelector from "./TimeFrameSelector";
import BarChartPanel from "./BarChartPanel";
import "./App.css";

function App() {
  const [state, setState] = useState({
    timeFrames: [{ items: [], scale: null }],
  });
  const [index, setIndex] = useState(0);
  const [timerID, setTimerID] = useState(null);

  const handleChange = (e) => {
    setIndex(Number(e.target.value));
  };

  function retrieveState(data) {
    const tempData = Object.values(data);
    tempData.shift();

    const timeFrames = [];
    for (const timeFrame of tempData) {
      const items = [];
      let scale = 0.0001;
      for (const [key, val] of Object.entries(timeFrame)) {
        const change = parseFloat(val);
        if (Math.abs(change) > scale) {
          scale = Math.abs(change);
        }

        items.push({
          name: key,
          value: change,
        });
      }
      timeFrames.push({ items, scale });
    }
    return { timeFrames };
  }

  function startUpdateStateTimer() {
    fetch("https://www.alphavantage.co/query?function=SECTOR&apikey=demo")
      .then((response) => response.json())
      .then((data) => {
        setState(retrieveState(data));
        setTimerID(setTimeout(startUpdateStateTimer, 10000));
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    startUpdateStateTimer();
    return () => clearTimeout(timerID);
  }, []);

  return (
    <div className="app">
      <h1>S&amp;P 500 Sector Performance</h1>
      <TimeFrameSelector onChange={handleChange} />
      <BarChartPanel
        scale={state.timeFrames[index].scale}
        items={state.timeFrames[index].items}
        unit="%"
      />
      <p className="copyright">Data are provided by Alpha Vantage Inc.</p>
    </div>
  );
}

export default App;

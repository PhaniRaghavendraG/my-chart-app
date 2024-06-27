import React from "react";
import "./index.css";

const TimeFrameSelector = ({ onSelectTimeFrame }) => (
  <div className="timeframe-selector">
    <button onClick={() => onSelectTimeFrame("daily")}>Daily</button>
    <button onClick={() => onSelectTimeFrame("weekly")}>Weekly</button>
    <button onClick={() => onSelectTimeFrame("monthly")}>Monthly</button>
  </div>
);

export default TimeFrameSelector;

import React, { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import data from "../../data/data.json";
import TimeFrameSelector from "../TimeFrameSelector";
import "./index.css";

const BarChartComponent = () => {
  const [timeFrame, setTimeFrame] = useState("daily");
  const [filteredData, setFilteredData] = useState(data);
  const [tooltipData, setTooltipData] = useState(null);

  const updatedData = useCallback((data, timeFrame) => {
    if (timeFrame === "weekly") {
      return data.reduce((acc, curr) => {
        const week = getWeek(new Date(curr.timestamp));
        const alreadyPresent = acc.find((item) => item.timestamp === week);
        if (alreadyPresent) {
          alreadyPresent.value += curr.value;
        } else {
          acc.push({ timestamp: week, value: curr.value });
        }
        return acc;
      }, []);
    }

    if (timeFrame === "monthly") {
      return data.reduce((acc, curr) => {
        const month = new Date(curr.timestamp).toISOString().slice(0, 7);
        const alreadyPresent = acc.find((item) => item.timestamp === month);
        if (alreadyPresent) {
          alreadyPresent.value += curr.value;
        } else {
          acc.push({ timestamp: month, value: curr.value });
        }
        return acc;
      }, []);
    }
    return data;
  }, []);

  useEffect(() => {
    const filterData = () => {
      switch (timeFrame) {
        case "daily":
          return data;
        case "weekly":
          return updatedData(data, "weekly");
        case "monthly":
          return updatedData(data, "monthly");
        default:
          return data;
      }
    };
    setFilteredData(filterData());
  }, [timeFrame, updatedData]);

  const getWeek = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    const resultWeek = Math.ceil(
      (pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7
    );
    return resultWeek;
  };

  const handleBarClick = (data) => {
    setTooltipData(data);
  };

  const handleCloseTooltip = () => {
    setTooltipData(null);
  };

  return (
    <div className="chart-container">
      <TimeFrameSelector onSelectTimeFrame={setTimeFrame} />
      <ResponsiveContainer className="chart" width="100%" height={450}>
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.1)" }}
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
            isAnimationActive={false}
          />
          <Bar dataKey="value" fill="#8884d8" onClick={handleBarClick} />
        </BarChart>
      </ResponsiveContainer>
      {tooltipData && (
        <div className="tooltip-container">
          <p>TimeStamp: {tooltipData.timestamp}</p>
          <p>Value: {tooltipData.value}</p>
          <button type="button" onClick={handleCloseTooltip}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BarChartComponent;

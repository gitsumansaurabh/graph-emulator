import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

function App() {
  const [chartData, setChartData] = useState({});
  const [newData, setNewData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/graph/fetch");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setNewData(event.target.value);
  };

  const handleUpload = async (e) => {
    try {
      const response = await fetch("/api/v1/graph/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newData,
      });

      const data = await response.json();
      setChartData(data);
      setNewData("");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  const renderChart = (chartData) => {
    switch (chartData.graphType) {
      case "pie":
        return <PieChart data={chartData} />;
      case "line":
        return <LineChart data={chartData} />;
      default:
        return <BarChart data={chartData} />;
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <List>
        <div>
          {chartData.data ? renderChart(chartData) : <h1>No Data Available</h1>}

          <h2>Upload Data</h2>
          <input
            className="w-1/2  box-border p-2 "
            type="text"
            value={newData}
            onChange={handleInputChange}
          />
          <button className="ml-20" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </List>
    </div>
  );
}

export default App;

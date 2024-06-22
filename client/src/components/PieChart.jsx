import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function PieChart(props) {
  const value = Object.keys(props.data.data);
  let freq = Object.values(props.data.data);
  freq = freq.map((x) => x.goals);

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Doughnut
        data={{
          labels: value,
          datasets: [
            {
              label: `${props.data.graphTitle} Frequency`,
              data: freq,
              backgroundColor: [
                "#FF5733",
                "#33FF57",
                "#3357FF",
                "#FF33A1",
                "#A133FF",
                "#33FFF1",
                "#F1FF33",
                "#FF3333",
                "#33FF33",
                "#3333FF",
                "#FF9933",
                "#33FF99",
                "#9933FF",
                "#FF3399",
                "#3399FF",
                "#FF66CC",
                "#66FF33",
                "#6633FF",
                "#33CCFF",
                "#CC33FF",
                "#FF6600",
                "#66FF00",
                "#0066FF",
                "#6600FF",
                "#00FF66",
                "#FF0066",
                "#FF00CC",
                "#CC00FF",
                "#00FFCC",
                "#FFCC00",
              ],
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: `${props.data.graphTitle}`,
            },
          },
        }}
      />
    </div>
  );
}

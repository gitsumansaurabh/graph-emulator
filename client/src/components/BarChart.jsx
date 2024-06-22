import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  const value = Object.keys(props.data.data);
  let freq = Object.values(props.data.data);
  freq = freq.map((x) => x.goals);

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Bar
        data={{
          labels: value,
          datasets: [
            {
              label: `${props.data.graphTitle} Frequency`,
              data: freq,
              backgroundColor: [`${props.data.graphColor}`],
              borderRadius: 5,
            },
          ],
        }}
        options={{
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

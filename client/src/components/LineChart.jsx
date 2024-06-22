import { Line } from "react-chartjs-2";

export default function LineChart(props) {
  const value = Object.keys(props.data.data);
  let freq = Object.values(props.data.data);
  freq = freq.map((x) => x.goals);

  return (
    <div className="w-full h-80 px-4 py-4 my-2 grid place-items-center bg-white border border-solid border-gray-300 rounded-md">
      <Line
        data={{
          labels: value,
          datasets: [
            {
              label: `${props.data.graphTitle} Frequency`,
              data: freq,
              backgroundColor: [`${props.data.graphColor}`],
              borderRadius: 5,
              borderColor: `${props.data.graphColor}`,
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

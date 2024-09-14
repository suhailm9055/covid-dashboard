import React from "react";
import Plot from "react-plotly.js";

interface LineChartProps {
  data: {
    state: string;
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const { state, totalCases, activeCases, recovered, deaths } = data;

  const categories = ["Total Cases", "Active Cases", "Recovered", "Deaths"];
  const values = [totalCases, activeCases, recovered, deaths];
console.log(data,"data");

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-full">
        <Plot
          data={[
            {
              x: categories,
              y: values,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#76b6e1" },
              line: { shape: "spline", smoothing: 1.3 },
            },
          ]}
          layout={{
            title: `COVID-19 Statistics for ${state}`,
            xaxis: { title: "Categories" },
            yaxis: { title: "Count" },
            // height: 400, 
            font: { family: "sans-serif" },
          }}
          config={{ responsive: true }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default LineChart;

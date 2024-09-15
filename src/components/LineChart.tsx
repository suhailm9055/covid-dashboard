import React from "react";
import Plot from "react-plotly.js";

interface LineChartProps {
  data: {
    state: string;
    totalCases: number[];
    activeCases: number[];
    recovered: number[];
    deaths: number[];
    dates: string[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const { state, totalCases, activeCases, recovered, deaths, dates } = data;

  const createTrace = (
    name: string,
    values: number[],
    color: string
  ): Plotly.Data => ({
    x: dates,
    y: values,
    type: "scatter",
    mode: "lines+markers",
    name: name,
    line: { color: color },
  });

  const traces: Plotly.Data[] = [
    createTrace("Total Cases", totalCases, "#FF9800"),
    createTrace("Active Cases", activeCases, "#2196F3"),
    createTrace("Recovered", recovered, "#4CAF50"),
    createTrace("Deaths", deaths, "#F44336"),
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-full">
        <Plot
          data={traces}
          layout={{
            title: state,
            yaxis: { title: "Cases" },
            height: 450,
            font: { family: "sans-serif" },
            legend: { orientation: "h", y: -0.2 },
          }}
          config={{ responsive: true }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default LineChart;

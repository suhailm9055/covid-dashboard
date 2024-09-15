import React from "react";
import PlotlyComponent from "react-plotly.js";
import { PlotData, Layout } from "plotly.js";

interface StateDataProps {
  stateData: {
    state: string;
    totalCases: number[];
    activeCases: number[];
    recovered: number[];
    deaths: number[];
  };
}

const PieChart: React.FC<StateDataProps> = ({ stateData }) => {
  const pieChartData: Partial<PlotData>[] = [
    {
      labels: ["Active Cases", "Recovered", "Deaths"],
      values: [
        stateData.activeCases[0],
        stateData.recovered[0],
        stateData.deaths[0],
      ],
      type: "pie",
      marker: {
        colors: ["#228779", "#E7EFED", "#E17678"],
      },
      textinfo: "label+percent",
      hoverinfo: "label+percent+value" as any,
      textfont: { size: 14, color: "#111" },
      hole: 0,
    },
  ];

  const layout: Partial<Layout> = {
    showlegend: true,
    legend: {
      orientation: "h",
      x: 0.5,
      y: -0.1,
      xanchor: "center",
      font: { size: 14, color: "#666666" },
    },
    height: 450,
    margin: { t: 72, b: 70, l: 70, r: 70 },
    plot_bgcolor: "#ffffff",
    font: { family: "Arial, sans-serif", size: 14, color: "#333333" },
    hoverlabel: {
      bgcolor: "#333333",
      font: { color: "#ffffff" },
    },
  };

  const config = { responsive: true };

  return (
    <div className="flex justify-center items-center w-full bg-gray-50">
      <div className="w-full ">
        <PlotlyComponent
          data={pieChartData}
          layout={layout}
          config={config}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default PieChart;

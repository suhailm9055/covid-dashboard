import React, { useState } from "react";
import data from "./utils/mockData.json";
import Dropdown from "./components/Dropdown";
import PieChart from "./components/PieChart";
import CasesMap from "./components/Map";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import ChartWrapper from "./components/ChartWrapper";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState(data.states[0].state);

  const totalStates = Object.keys(
    Object.groupBy(data.states, ({ state }) => state)
  );
  const stateData = data?.states.filter(
    (state) => state.state == selectedState
  );
  console.log(stateData[0]);
  const casesData = [{ latitude: 10.02, longitude: 76.14 }];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <Dropdown totalStates={totalStates} setSelectedState={setSelectedState} />

      <ChartWrapper stateData={stateData[0]}/>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/6">
          {/* <MapContainer center={[21.7679, 78.6569]} zoom={5} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {/* Add markers or other map elements */}
          {/* </MapContainer> */}
          {/* <CasesMap cases={casesData}/> */}
        </div>
      </div>
    </div>
  );
};

export default App;

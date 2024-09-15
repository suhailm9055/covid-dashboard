import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { StateCovidData } from "../slices/covidDataSlice";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Map from "./Map";

const ContentContainer: React.FC = () => {
  const covidData = useSelector((state: RootState) => state.covidData.data);

  const selectedState = useSelector(
    (state: RootState) => state.covidData?.selectedState
  );
  const stateData: StateCovidData[] = covidData?.filter(
    (state) => state?.state === selectedState
  ) as StateCovidData[];

  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-4 text-[#021E1A] ">{` ${stateData[0]?.state} COVID-19 Stats`}</h2>
      <div className="flex flex-col tab:flex-row gap-6 ">
        <div className="flex flex-col  gap-6  tab:flex-row justify-between flex-1">
          <div className="w-full  flex-2">
            <div className="bg-white overflow-hidden shadow-md rounded-xl">
              <PieChart stateData={stateData[0]} />
            </div>
          </div>

          <div className="w-full  flex-2">
            <div className="bg-white overflow-hidden shadow-md rounded-xl">
              <LineChart data={stateData[0]} />
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl shadow-md overflow-hidden flex-1">
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContentContainer;

import React, { useState, ChangeEvent,  useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedState } from "../slices/covidDataSlice";
import { RootState } from "../store";

const Header: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const covidData = useSelector((state: RootState) => state.covidData.data);

  const dispatch = useDispatch();
  const totalStates = useMemo(
    () => Object.keys(Object.groupBy(covidData, ({ state }) => state)),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    dispatch(setSelectedState(e.target.value));
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col  items-center gap-5 mb-4 w-full bg-[#1E796C] p-6 rounded-xl items-center tab:flex-row">
        <span className="flex-1">
          <h1 className="text-2xl  w-full text-[#E7EFED] ">
            COVID-19 Statewise Updates
          </h1>
        </span>

        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded  flex-1 w-[80%]"
        >
          {totalStates?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Header;

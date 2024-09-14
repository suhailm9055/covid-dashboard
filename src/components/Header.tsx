import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setSelectedState } from "../slices/covidDataSlice";
import { RootState } from "../store";

const Header: React.FC = () => {
    
    const covidData = useSelector((state: RootState) => state.covidData.data);
    console.log(covidData);
    
    const selectedState = useSelector((state: RootState) => state.covidData?.selectedState);
    const dispatch = useDispatch();
    const totalStates = Object.keys(
        Object.groupBy(covidData , ({ state }) => state)
    );
    const [selectedOption, setSelectedOption] = useState<string>(totalStates[0]);
    const options: string[] = totalStates;
    
    const stateData = covidData?.filter(
        (state) => state.state == selectedState
      );   const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setSelectedOption(e.target.value);
        dispatch(setSelectedState(e.target.value));
    };
 
 

  return (
    <>
      <div className="flex flex-col  items-center gap-5 mb-4 w-full bg-[#1E796C] p-6 rounded-xl items-center">
       <span className="flex-1">
        
        <h1 className="text-2xl  w-full text-white ">
          COVID-19 Live Updates
        </h1>
        </span> 

       
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded h-[40px] flex-1"
        >
          {options.map((option, index) => (
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

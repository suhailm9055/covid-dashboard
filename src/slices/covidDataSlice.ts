import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockData from "../utils/mockData.json";


export interface StateCovidData {
    state: string;
    totalCases: number[];
    activeCases: number[];
    recovered: number[];
    deaths: number[];
    dates:string[];
  }

export interface CovidState {
  data: StateCovidData[];
  selectedState: string;
}

const initialState: CovidState = {
  data: mockData,
  selectedState: "Andaman and Nicobar Islands",
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setSelectedState: (state, action: PayloadAction<string>) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState } = covidSlice.actions;

export default covidSlice.reducer;

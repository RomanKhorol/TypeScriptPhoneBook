import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state: string, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

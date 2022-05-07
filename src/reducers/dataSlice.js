import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
  menuItem: "dashboard",
  requestServiceVisible: false,
  userId: "6202405e8a1c088923f97930",
  predictUsageVisible: false,
};
const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setMenuItem: (state, action) => {
      state.menuItem = action.payload;
    },
    setReqServiceVisible: (state, action) => {
      state.requestServiceVisible = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setPredictUsageVisible: (state, action) => {
      state.predictUsageVisible = action.payload;
    },
  },
});
export const {
  setUserRole,
  setMenuItem,
  setReqServiceVisible,
  setUserId,
  setPredictUsageVisible,
} = dataSlice.actions;
export default dataSlice.reducer;

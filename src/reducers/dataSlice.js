import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
  menuItem: "dashboard",
  requestServiceVisible: false,
  userId: "61ac8f41c6ac32b388289b4a",
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

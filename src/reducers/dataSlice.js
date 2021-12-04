import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
  menuItem: "dashboard",
  requestServiceVisible: false,
};
const dataSlice = createSlice({
  name: "auth",
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
  },
});
export const { setUserRole, setMenuItem, setReqServiceVisible } =
  dataSlice.actions;
export default dataSlice.reducer;

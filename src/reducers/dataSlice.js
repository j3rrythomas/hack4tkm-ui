import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
  menuItem: "dashboard",
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
  },
});
export const { setUserRole, setMenuItem } = dataSlice.actions;
export default dataSlice.reducer;

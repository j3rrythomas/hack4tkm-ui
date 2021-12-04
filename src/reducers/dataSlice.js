import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
};
const dataSlice = createSlice({
  name: "auth",
  initialState: initialDataState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});
export const { setUserRole } = dataSlice.actions;
export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  userRole: "USER",
  menuItem: "dashboard",
  requestServiceVisible: false,
  userId: "61ab84cab5c4a84d673da561",
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
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const { setUserRole, setMenuItem, setReqServiceVisible, setUserId } =
  dataSlice.actions;
export default dataSlice.reducer;

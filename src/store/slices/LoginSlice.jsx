import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginUser",
  initialState: [],
  reducers: {
    addLoginUser: (state, actions) => {
      state.push(actions.payload);
    },
    logoutUser: (state, actions) => {
      state.splice(actions.payload);
    },
  },
});

export const { addLoginUser, logoutUser } = LoginSlice.actions;

export default LoginSlice.reducer;

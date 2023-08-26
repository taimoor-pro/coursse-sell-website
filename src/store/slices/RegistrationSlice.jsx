import { createSlice } from "@reduxjs/toolkit";

export const RegistrationSlice = createSlice({
  name: "registerUser",
  initialState: [],
  reducers: {
    addRegisterUser: (state, actions) => {
      // state.push(action.payload); // jo send kiya tha ye  dispatch(add(item)) Product waly state se wo ye action.payload kai zariya access kiya
      state.push(actions.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRegisterUser } = RegistrationSlice.actions;

export default RegistrationSlice.reducer;

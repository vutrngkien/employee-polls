import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthId(state, action) {
      state.authId = action.payload;
    },
    removeAuthId(state, action) {
      state.authId = "";
    },
  },
});

export const { setAuthId, removeAuthId } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "../thunk/question.thunk";

const initialState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionSlice.reducer;

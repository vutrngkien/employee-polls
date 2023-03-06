import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions } from "../../_DATA";

const fetchQuestions = createAsyncThunk("question/getAllQuestion", async () => {
  const res = await _getQuestions();
  return res;
});

export { fetchQuestions };

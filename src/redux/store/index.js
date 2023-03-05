import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/userReducer";
import questionReducer from "../reducer/questionReducer";

const reducer = { user: userReducer, question: questionReducer };

const store = configureStore({
  reducer,
});

export default store;

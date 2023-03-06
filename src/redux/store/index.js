import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/userReducer";
import questionReducer from "../reducer/questionReducer";
import authReducer from "../reducer/authReducer";

const reducer = {
  user: userReducer,
  question: questionReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
});

export default store;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../../_DATA";

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await _getUsers();
  return res;
});

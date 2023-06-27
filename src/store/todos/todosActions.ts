import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { Todo } from "./types";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await axios(API);
  return data as Todo[];
})
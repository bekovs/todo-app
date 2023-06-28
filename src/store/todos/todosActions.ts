import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { Todo } from "./types";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await axios.get(API);
  return data as Todo[];
})

export const createTodo = createAsyncThunk("todos/createTodo", async (newTodo: Todo, { dispatch }) => {
  await axios.post(API, newTodo);
  dispatch(fetchTodos());
})
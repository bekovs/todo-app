import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "./types";
import { RootState } from "../store";
import { fetchTodos } from "./todosActions";

const initialState: TodoState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload
    })
  }
})

export const selectTodos = (state: RootState) => state.todos.todos;

export const todosReducer = todosSlice.reducer;
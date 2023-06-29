import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { Todo } from "./types";
import { AppDispatch } from "../store";

export const fetchTodos = createAsyncThunk<Todo[], undefined>(
    "todos/fetchTodos",
    async () => {
        const { data } = await axios.get(API);
        return data as Todo[];
    }
);

export const createTodo = createAsyncThunk<
    void,
    Todo,
    { dispatch: AppDispatch }
>("todos/createTodo", async (newTodo: Todo, { dispatch }) => {
    await axios.post(API, newTodo);
    dispatch(fetchTodos());
});

export const updateTodo = createAsyncThunk<
    void,
    Todo,
    { dispatch: AppDispatch }
>("todos/updateTodo", async (updatedData: Todo, { dispatch }) => {
    await axios.patch(`${API}/${updatedData.id}`, updatedData);
    dispatch(fetchTodos());
});

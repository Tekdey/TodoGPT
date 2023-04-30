import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../utils/routes/api.routes";
import axios from "axios";

const INITIAL_STATE = {
  value: 0,
  todos: {
    all: [
      // {
      //   _id: 1,
      //   status: "stable",
      //   title: "Faire les courses",
      //   priority: "stable",
      //   deadLine: "12/12/2021",
      // },
    ],
    stable: [],
    progress: [],
    finished: [],
    archive: [],
  },
  isLoading: false,
};

export const fetchAllTodos = createAsyncThunk(
  "todo/fetchTodoByStatus",
  async (status, thunkAPI) => {
    try {
      const { data } = await api.getAllTodo();

      return data;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
);

export const deleteTodoSlice = createAsyncThunk(
  "todo/deleteTodoById",
  async (props, thunkAPI) => {
    try {
      // const data = await api.deleteTodoById(id);

      await api.deleteTodoById(props._id);

      return props;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
);

export const changeTodoStatusSlice = createAsyncThunk(
  "todo/changeTodoStatusSlice",
  async (props, thunkAPI) => {
    try {
      // const data = await api.deleteTodoById(id);

      const changeTodo = await api.changeStatus(props);

      return props;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    getTodoByStatus: (state, action) => {
      console.log(action.payload);
      state.todos[action.payload.status] = state.todos.all.filter(
        (todo) => todo.status === action.payload.status
      );
      console.log(state);
    },
  },
  extraReducers: {
    /**
     * Fetch all messages from an event
     */

    [fetchAllTodos.pending]: (state) => {
      console.log("pending");
      state.isLoading = true;
    },
    [fetchAllTodos.fulfilled]: (state, { payload }) => {
      // state.todos.all = [...payload.task];
      payload.task.forEach((todo) => {
        state.todos[todo.status] = [...state.todos[todo.status], todo];
      });

      state.isLoading = false;
      console.log("fulfilled");
    },
    [fetchAllTodos.rejected]: (state, action) => {
      console.log("rejected");
      state.todos.all = [];
      console.log(action);
    },
    /**
     * Delete todo by id
     */

    [deleteTodoSlice.pending]: (state) => {
      console.log("pending");
    },
    [deleteTodoSlice.fulfilled]: (state, { payload }) => {
      state.todos[payload.currentStatus] = state.todos[
        payload.currentStatus
      ].filter((todo) => todo._id !== payload._id);
      console.log("fulfilled");
    },
    [deleteTodoSlice.rejected]: (state, action) => {
      console.log("rejected");
      console.log(action);
    },
    /**
     * Change todo status
     */

    [changeTodoStatusSlice.pending]: (state) => {
      console.log("pending");
    },
    [changeTodoStatusSlice.fulfilled]: (state, { payload }) => {
      state.todos[payload.newStatus] = [
        ...state.todos[payload.newStatus],
        state.todos[payload.currentStatus].find(
          (todo) => todo._id === payload._id
        ),
      ];

      state.todos[payload.currentStatus] = state.todos[
        payload.currentStatus
      ].filter((todo) => todo._id !== payload._id);

      console.log("fulfilled");
    },
    [changeTodoStatusSlice.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodoByStatus } = todoSlice.actions;

export default todoSlice.reducer;

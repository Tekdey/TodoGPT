import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/todo/TodoSlice";
import { pokemonApi } from "./features/todo/TodoSlice";

export default configureStore({
  reducer: {
    todo: TodoReducer,
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(pokemonApi.middleware),
});

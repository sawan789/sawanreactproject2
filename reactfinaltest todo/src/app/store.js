import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import TodoReducer from "../features/components/todo/Todoslice";
import UserReducer from "../features/components/User/Userslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: TodoReducer,
    users: UserReducer,
  },
});

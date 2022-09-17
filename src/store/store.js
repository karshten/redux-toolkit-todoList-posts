import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/Todo/todoSlice";
import userSlice from "../features/User/userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice
    },
})
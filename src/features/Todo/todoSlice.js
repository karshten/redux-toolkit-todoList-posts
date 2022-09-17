import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        handleCompletedTodo: (state, action) => {
            const idx = state.todos.map(todo => todo.id).indexOf(action.payload.id)
            state.todos[idx].completed = !action.payload.completed
        }
    }
})

export const { addTodo, deleteTodo, handleCompletedTodo } = todoSlice.actions
export default todoSlice.reducer
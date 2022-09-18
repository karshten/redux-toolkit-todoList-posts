import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (payload, { rejectWithValue, dispatch }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        dispatch(setPosts(data))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: {
        [getPosts.fulfilled] : () => console.log('fullfield'),
        [getPosts.pending] : () => console.log('pending'),
        [getPosts.rejected] : () => console.log('rejected')
    }
})

export const { setPosts } = postSlice.actions
export default postSlice.reducer
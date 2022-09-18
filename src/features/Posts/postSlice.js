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

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost : (state, action) => {
            state.posts = state.posts.filter( post => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('get posts: fullfield'),
        [getPosts.pending]: () => console.log('get posts: pending'),
        [getPosts.rejected]: () => console.log('get posts :rejected'),
        
        [deletePostById.fulfilled]: () => console.log('delete post: fullfield'),
        [deletePostById.pending]: () => console.log('delete post: pending'),
        [deletePostById.rejected]: () => console.log('delete post: rejected')
    }
})

export const { setPosts, deletePost } = postSlice.actions
export default postSlice.reducer
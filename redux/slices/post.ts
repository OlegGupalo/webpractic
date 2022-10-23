import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "utils/api"

export const fetchCurrentPost = createAsyncThunk(
    'currentPost',
    async function(index, {rejectWithValue}) {
        try {
            return await Api().post.getPostById(index)
        } catch (error) {
            return rejectWithValue(error.response.body)
        }
    }
)

const initialState = {
    post: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost(state, action) {
            state.post = action.payload
        }
    },
    extraReducers: {
        [fetchCurrentPost.pending]: (state) => {
            post: null
        },
        [fetchCurrentPost.fulfilled]: (state, action) => {
            state.post = action.payload
        },
        [fetchCurrentPost.rejected]: (state, action) => {
            state.post = null
		}
    }
    
})

export const { setPost } = postSlice.actions


export default postSlice.reducer
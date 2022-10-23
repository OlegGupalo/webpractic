import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "utils/api"

export const fetchCurrentUser = createAsyncThunk(
    'user/current',
    async function(token, {rejectWithValue}) {
        try {
            return await Api().user.profile(token)
        }
        catch(error) {
            return rejectWithValue(error.response.body)
        }
    }
)

const initialState = {
    status: null,
    error: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {

        }
    },
    extraReducers: {
        [fetchCurrentUser.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.error = null
            state.user = action.payload.data
        },
        [fetchCurrentUser.rejected]: (state, action) => {
			state.status = 'rejected'
            state.user = null
			state.error = action.payload
		}
    }
    
})

export const { logout } = authSlice.actions

export default authSlice.reducer
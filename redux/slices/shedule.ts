import { Shedule } from './../../components/profile/Shedule';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "utils/api"

export const fetchShedule = createAsyncThunk(
    'shedule-get',
    async function(_, {rejectWithValue}) {
        try {
            return await Api().post.getFaculty()
        } catch (error) {
            return rejectWithValue(error.response.body)
        }
    }
)

export const fetchOriginalShedule = createAsyncThunk(
    'shedule-original',
    async function(id, {rejectWithValue}) {
        try {
            return await Api().post.getSchhedule(id)
        } catch (error) {
            return rejectWithValue(error.response.body)
        }
    }
)

const initialState = {
    status: null,
    error: null,
    shedule: null
}

const sheduleSlice = createSlice({
    name: 'shedule',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchOriginalShedule.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchOriginalShedule.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.error = null
            state.shedule = action.payload.data
        },
        [fetchOriginalShedule.rejected]: (state, action) => {
			state.status = 'rejected'
            state.shedule = null
			state.error = action.payload
		}
    }
    
})


export default sheduleSlice.reducer
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchCountAPI} from '../../api'

export const fetchCount = createAsyncThunk(
	'counter/fetchCount',async (number)=>{
		const res = await fetchCountAPI(number)
		return res.data.value
	}
)


export const counterSlice = createSlice({
	name: 'counter',
	initialState:{
		value: 0
	},
	reducers: {
		increment: state => {
			state.value++
		},
		decrement: state => {
			state.value--
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
	},
	extraReducers: builder=>{
		builder.addCase(fetchCount.fulfilled,(state,action)=>{
			state.value = action.payload
		})
	}
})
// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
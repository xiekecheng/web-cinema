import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
export const stateSlice = createSlice({
	name: 'state',
	initialState:{
		isShowTabbar: true
	},
	reducers: {
		setShowTabbar: (state, action) => {
			state.isShowTabbar = action.payload
		}
	},
})
// Action creators are generated for each case reducer function
export const {setShowTabbar} = stateSlice.actions
export default stateSlice.reducer
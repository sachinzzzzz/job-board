import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user:null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser:(state,action)=>{
      state.user=action.payload;
    }
  },
});
export const { setLoading } = slice.actions;
export const { setUser } = slice.actions;
export default slice.reducer;

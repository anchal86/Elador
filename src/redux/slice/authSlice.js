import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
    email: null,
    username: null,
    userID: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state,action)=>{
        state.isLoggedIn = true
        state.email = action.payload.email
        state.userID = action.payload.userID
        state.username = action.payload.username
    },
    REMOVE_ACTIVE_USER:(state,action)=>{
        state.isLoggedIn = false
        state.email = null
        state.userID = null
        state.username = null
    }
  }
});

export const {SET_ACTIVE_USER,REMOVE_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.email
export const selectUsername = (state) => state.auth.username
export const selectUserID = (state) => state.auth.userID

export default authSlice.reducer
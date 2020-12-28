import {createSlice} from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState: {
        users: [],
        isLogged: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        logged: (state, action) => {
            state.isLogged = action.payload;
        },
    },
});

export const {addUser, logged} = authorizationSlice.actions;

export const selectUser = (state) => state.user.users;
export const selectIsLogged = (state) => state.user.isLogged;

export default authorizationSlice.reducer;
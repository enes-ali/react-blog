import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: "MainSlice",
    initialState: {
        user: "Anonymus",
    },
    reducers: {
        login: (state, action) => { 
            if(!state.user.equals("Anonymus"))
                return;
            state.user = action.user;
        },

        logout: (state) => {
            if(!state.user.equals("Anonymus"))
                state.user = "Anonymus";
        }
    },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
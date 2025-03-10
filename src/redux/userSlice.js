import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "Hari",
    },reducers: {
        login: (state, action) => {
            state.username = action.payload;
        },
        logout: (state) => {
            state.username = null;
        },
    },
});

export default userSlice
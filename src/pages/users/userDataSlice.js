import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersData: [],
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.usersData = action.payload;
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isOpenLogOutModal: false,
    currentUserData: null,
    loading: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        getUser(state, action) {
            state.user = action.payload;
        },
        setIsOpenLogOutModal(state, action) {
            state.isOpenLogOutModal = action.payload;
        },
    },
});

export const { getUser, setIsOpenLogOutModal } = loginSlice.actions;

export default loginSlice.reducer;

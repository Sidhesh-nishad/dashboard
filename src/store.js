import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});
export default store;

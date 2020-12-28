import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice/sportBuildSlice";
import userReducer from "./slice/authorizationSlice";

export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
    },
});

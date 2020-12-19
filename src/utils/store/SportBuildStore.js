import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice/SportBuildSlice";

export default configureStore({
    reducer:{
        cart: cartReducer,
    },
});

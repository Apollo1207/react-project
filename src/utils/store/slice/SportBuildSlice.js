import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "sportBuild",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                foundItem.number_of_seats += action.payload.number_of_seats;
            } else {
                state.cart = [...state.cart, action.payload];
            }
        },
        incrementCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                foundItem.number_of_seats += 500;
            }
        },
        decrementCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                if (foundItem.number_of_seats > 1) {
                    foundItem.number_of_seats -= 500;
                } else {
                    let index = state.cart.indexOf(foundItem);
                    state.cart.splice(index, 1)
                }
            }
        },
    },
});

export const {incrementCart, decrementCart, addCart} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../../utils/store/slice/SportBuildSlice";
import CartItem from "../../components/CartItem/CartItem"
import {CartTitle} from "./Cart.styled"

function Cart() {
    const cart = useSelector(selectCart);

    return (
        <div>
            <CartTitle>SportBuilds Cart</CartTitle>
            {cart.map((item) => (
              <CartItem item={item}/>

            ))}
        </div>
    );

}


export default Cart;
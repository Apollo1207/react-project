import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../../utils/store/slice/SportBuildSlice";
import CartItem from "../../components/CartItem/CartItem"
import {CartTitle} from "./Cart.styled"
import Loader from "../../components/Loader/Loader";

function Cart() {
    const cart = useSelector(selectCart);

    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoad(false), 2000)
    }, []);
    if (load === true) {
        return <Loader/>
    }
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
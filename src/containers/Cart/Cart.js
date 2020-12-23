import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../../utils/store/slice/SportBuildSlice";
import CartItem from "../../components/CartItem/CartItem"
import {CartTitle,CartButtonWrapper} from "./Cart.styled"
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

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
        <div>
            <CartTitle>SportBuilds Cart</CartTitle>
            {cart.map((item) => (
                <CartItem item={item}/>

            ))}

        </div>
    <CartButtonWrapper>
        <Link exact to="/catalog">
            <Button buttonText="Back to Catalog" backgroundColor="#fff" color="#000000" fontSize="15px"
                    padding="13px 20px"
                    border="1px solid"/>
        </Link>
        <Link exact to="/cart/checkout">
            <Button buttonText="Continue" backgroundColor="#454545" color="#fff" fontSize="15px"
                    padding="13px 25px" />
        </Link>
    </CartButtonWrapper>
        </div>
);


}


export default Cart;
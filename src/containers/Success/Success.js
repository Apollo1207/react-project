import React from "react";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {SuccessWrapper, SuccessTitle, SuccessDescription,SuccessPhoto} from "./Success.styled";
import SuccessLogo from "../../images/successLogo.png"


function Success() {
    return (
        <SuccessWrapper>
            <SuccessPhoto src={SuccessLogo} alt="Success"/>
            <SuccessTitle>Success!</SuccessTitle>
            <SuccessDescription>Your order was sent to processing!<br/>Check your email box for further
                information.</SuccessDescription>
            <Link exact to="/catalog">
                <Button buttonText="Go back to Catalog" backgroundColor="#454545" color="#fff" fontSize="15px"
                        padding="13px 25px"/>
            </Link>
        </SuccessWrapper>);
}

export default Success;
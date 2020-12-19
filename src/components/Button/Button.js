import React from "react";
import {LandingButton} from "./Button.styled";


function Button(props) {

    return (
        <LandingButton backgroundColor={props.backgroundColor} color={props.color} fontSize={props.fontSize}
                       padding={props.padding} border={props.border} height={props.height}
                       onClick={props.onClick}>{props.buttonText}</LandingButton>
    );

}

export default Button;
import React from "react";
import {InputField} from "./Input.styled";
import {ErrorMessage} from "formik";

function Input(props) {
    return (<React.Fragment>
        <InputField type={props.type} name={props.name} placeholder={props.placeholder}   />
        <ErrorMessage name={props.name} render={props.render}/>
    </React.Fragment>);
}

export default Input;
import React from "react";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";
import {CheckoutTitle, ErrorText, InputFieldWrapper} from "../Checkout/Checkout.styled";
import {Form, Formik} from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {addUser, logged} from "../../utils/store/slice/authorizationSlice";

const initialValues = {
    username: "",
    email: "",
    password: "",
    repassword: "",
};

const validationSchema = Yup.object({
    username: Yup.string()
        .required("This field is required")
        .min(5, "Should have at least 5 characters")
        .max(100, "Should not be longer than 100 characters"),
    email: Yup.string()
        .required("This field is required")
        .email("Email is not valid"),
    password: Yup.string()
        .required("This field is required")
        .min(10, "Should have at least 5 characters")
        .max(100, "Should not be longer than 100 characters"),
    repassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('This field is required'),
});

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const signUp = (values) => {
        // dispatch(addUser(values))
        localStorage.setItem(values.email, values.password);
        dispatch(logged(true))
        history.push('/');
    };
    return (<div>
        <CheckoutTitle>Sign Up</CheckoutTitle>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={signUp}>
            <Form>
                <InputFieldWrapper>
                    <Input type="text" name="username" placeholder="Username"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Input type="email" name="email" placeholder="Email"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Input type="text" name="password" placeholder="Password"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Input type="text" name="repassword" placeholder="Retype password"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Button type="submit" buttonText="Submit" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 80px"
                            border="1px solid"/>
                </InputFieldWrapper>
            </Form>
        </Formik>
    </div>);
}

export default Register;
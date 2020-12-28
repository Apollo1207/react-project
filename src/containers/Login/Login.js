import React from "react";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";
import {CheckoutTitle, ErrorText, InputFieldWrapper} from "../Checkout/Checkout.styled";
import {Form, Formik} from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {logged, selectUser} from "../../utils/store/slice/authorizationSlice";
import {useDispatch, useSelector} from "react-redux";


const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("This field is required")
        .email("Email is not valid"),
    password: Yup.string()
        .required("This field is required")
});

function Login() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const signIn = (values) => {
        let foundEmail = user.find((item) => item.email === values.email);
        let foundPassword = user.find((item) => item.password === values.password);
        if (foundEmail && foundPassword) {
            dispatch(logged(true))
            history.push('/');
        } else {
            alert("Your data is incorrect");
        }

    };
    return (<div>
        <CheckoutTitle>Sign In</CheckoutTitle>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={signIn}>
            <Form>
                <InputFieldWrapper>
                    <Input type="email" name="email" placeholder="Email"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Input type="text" name="password" placeholder="Password"
                           render={error => <ErrorText>* {error}</ErrorText>}/>
                    <Button type="submit" buttonText="Submit" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 80px"
                            border="1px solid"/>
                </InputFieldWrapper>
            </Form>
        </Formik>
    </div>);
}

export default Login;
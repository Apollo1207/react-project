import React, {useState} from "react";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";
import {CheckoutTitle, ErrorText, InputFieldWrapper} from "../Checkout/Checkout.styled";
import {ErrorMessage, Form, Formik} from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {logged, selectUser} from "../../utils/store/slice/authorizationSlice";
import {useDispatch, useSelector} from "react-redux";
import {Field} from "formik";
import {TextField} from "./Login.styled";


// const initialValues = {
//     email: "",
//     password: "",
// };
//
// const validationSchema = Yup.object({
//     email: Yup.string()
//         .required("This field is required")
//         .email("Email is not valid"),
//
//     password: Yup.string()
//         .oneOf(["01234567890"], 'Your email or password is incorrect')
//         .required("This field is required")
// });

function Login() {
    const user = useSelector(selectUser);
    const [correctPassword, setCorrectPassword] = useState('');
    // console.log(correctPassword)
    const dispatch = useDispatch();
    const history = useHistory();

    const signIn = () => {
        dispatch(logged(true))
        history.push('/');
        //     let foundEmail = user.find((item) => item.email === values.email);
        //     let foundPassword = user.find((item) => item.password === values.password);
        //     if (foundEmail && foundPassword) {
        //         dispatch(logged(true))
        //         history.push('/');
        //     } else {
        //         alert("Your data is incorrect")
        //     }
        //
    };

    return (<div>
        <CheckoutTitle>Sign In</CheckoutTitle>
        <Formik
            initialValues={{
                password: ''
            }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .oneOf([correctPassword], 'Your email or password is incorrect')
                    .required("is required")
            })}
            onSubmit={signIn}>
            <Form>
                <InputFieldWrapper>

                    <TextField type="email" name="email" placeholder="Email" onChange={
                        e => setCorrectPassword(localStorage.getItem(e.target.value))}
                    />
                    <ErrorMessage name="email" render={error => <ErrorText>email {error}</ErrorText>}/>
                    <Input type="text" name="password" placeholder="Password"
                           render={error => <ErrorText>* {error}</ErrorText>}/>

                    {/*<Field type="email" name="email" placeholder="Email" onChange={*/}
                    {/*    e => setCorrectPassword(localStorage.getItem(e.target.value))}*/}
                    {/*/>*/}

                    {/*<ErrorMessage name="email" render={error => <ErrorText>email {error}</ErrorText>}/>*/}

                    {/*<Field type="text" name="password" placeholder="Password"*/}
                    {/*/>*/}
                    {/*<ErrorMessage name="password" render={error => <ErrorText>password {error}</ErrorText>}/>*/}
                    <Button type="submit" buttonText="Submit" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 80px"
                            border="1px solid"/>

                </InputFieldWrapper>
            </Form>
        </Formik>
    </div>);
}

export default Login;
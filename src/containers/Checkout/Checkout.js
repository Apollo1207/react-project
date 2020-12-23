import React from "react";
import {Form, Formik, ErrorMessage, Field} from "formik";
import {Link, useHistory} from "react-router-dom";
import * as Yup from "yup";
import {CheckoutTitle, InputFieldWrapper, CheckoutButtonWrapper} from "./Checkout.styled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";


const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
};

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("This field is required")
        .min(5, "Should have at least 5 characters")
        .max(100, "Should not be longer than 100 characters"),
    lastName: Yup.string()
        .required("This field is required")
        .min(5, "Should have at least 5 characters")
        .max(100, "Should not be longer than 100 characters"),
    address: Yup.string()
        .required("This field is required")
        .min(5, "Should have at least 5 characters")
        .max(100, "Should not be longer than 100 characters"),
    email: Yup.string()
        .required("This field is required")
        .email("Email is not valid"),
    phoneNumber: Yup.string()
        .required("This field is required")
        .matches(/\+[0-9]{12}/, {
            message: "Phone number is not valid",
            excludeEmptyString: true,
        }),
});

function Checkout() {
    const history = useHistory();
    const handleSubmit = (values) => {
        history.push('/cart/checkout/success');
    };
    return (
        <div>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                <Form>
                    <InputFieldWrapper>
                        <Input type="text" name="firstName" placeholder="First Name"
                               render={error => <h1>why{error}</h1>}/>
                        <Input type="text" name="lastName" placeholder="Last Name"
                               render={error => <h1>why{error}</h1>}/>
                        <Input type="text" name="address" placeholder="Address"
                               render={error => <h1>why{error}</h1>}/>
                        <Input type="email" name="email" placeholder="Email"
                               render={error => <h1>why{error}</h1>}/>
                        <Input type="text" name="phoneNumber" placeholder="Phone Number"
                               render={error => <h1>why{error}</h1>}/>
                        {/*<div>*/}
                        {/*    <InputField type="text" name="firstName" placeholder="First Name"/>*/}
                        {/*    <ErrorMessage name="firstName" render={error => <h1>why{error}</h1>}/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <InputField type="text" name="lastName" placeholder="Last Name"/>*/}
                        {/*    <ErrorMessage name="lastName"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <InputField type="text" name="address" placeholder="Address"/>*/}
                        {/*    <ErrorMessage name="address"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <InputField type="email" name="email" placeholder="Email"/>*/}
                        {/*    <ErrorMessage name="email"/>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <InputField type="text" name="phoneNumber" placeholder="Phone Number"/>*/}
                        {/*    <ErrorMessage name="phoneNumber"/>*/}
                        {/*</div>*/}
                        <Button type="submit" buttonText="Submit" backgroundColor="#454545" color="#fff" fontSize="15px"
                                padding="13px 80px"
                                border="1px solid"/>
                    </InputFieldWrapper>
                    <CheckoutButtonWrapper>
                        <Link exact to="/catalog">
                            <Button buttonText="Back to Catalog" backgroundColor="#fff" color="#000000" fontSize="15px"
                                    padding="13px 20px"
                                    border="1px solid"/>
                        </Link>

                        <Button buttonText="Continue" backgroundColor="#454545" color="#fff" fontSize="15px"
                                padding="13px 25px"/>

                    </CheckoutButtonWrapper>
                </Form>
            </Formik>
        </div>
    );
}

export default Checkout;
import styled from "styled-components";

export const CheckoutTitle = styled.h1`
  text-align: center;
  padding-top: 25px;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(5) {
    margin-bottom: 35px;
  }
`;

export const CheckoutButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 200px 0 200px;

`;

export const ErrorText = styled.span`
  color: red;


`;
import styled from "styled-components";
import {Field} from "formik";


export const InputField = styled(Field)`
  width: 25%;
  padding: 10px;
  border-radius: 10px;
  //margin-bottom: 25px;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 25px;


  &:nth-child(1) {
    margin-top: 25px;
  }
`;
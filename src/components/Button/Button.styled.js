import styled from "styled-components";

export const LandingButton = styled.button`
  ${(props) => `
    background-color: ${props.backgroundColor};
    color: ${props.color};
    padding: ${props.padding};
    font-size: ${props.fontSize};
    border: ${props.border};
    border-radius:10px;
    cursor:pointer;
   
`}
`;
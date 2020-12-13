import styled from 'styled-components';
import {FaGoogle, FaLinkedin, FaTwitter} from "react-icons/all";

export const FooterWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:100px;
    border-top:1px solid;
    padding:20px 0;
`;

export const FooterTitle = styled.h5`
    font-weight:700;
    font-size:16px;
    margin:0;
`;

export const FooterLogo = styled.img`
    width:230px;
    height:65px;
    margin-right:100px;
`;

export const FooterDescription = styled.p`
    font-size:12px;
`;

export const HorizontalLine = styled.hr`
    width:75%;
    height:1px;
    background:#000000;
`;

export const Copyright = styled.p`
    text-align:center;
    font-family:Roboto;
    padding-bottom:5px;
`;



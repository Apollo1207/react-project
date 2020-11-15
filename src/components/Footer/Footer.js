import React from "react";
import {
    FooterWrapper,
    FooterWrapperText,
    FooterTitle,
    FooterDescription,
    IconBase,
    HorizontalLine,
    Copyright
} from './Footer.styled';
import Landie from "../images/navbar_logo.png";
import {NavbarLogo} from "../Header/Header.styled";
import {FaFacebook, FaTwitter, FaLinkedin, FaGoogle} from "react-icons/fa"
import {Container} from "../main/Global.styled";

function Footer() {
    return (
        <Container>
            <FooterWrapper>
                <FooterWrapperText>
                    <FooterTitle>
                        Sport Build
                    </FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Dicta laboriosam
                        nihil
                        quasi repudiandae<br/> totam velit veritatis? </FooterDescription>
                </FooterWrapperText>
                <NavbarLogo src={Landie} alt="Landie"/>
                <IconBase>
                    <FaFacebook style={{paddingLeft: "20px",}} size={42}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={42}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={42}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={42}/>

                </IconBase>

            </FooterWrapper>
            <HorizontalLine/>
            <Copyright> All rights reserved © Fedyniak Illya IOT 2020 </Copyright>
        </Container>


    );
}


export default Footer;
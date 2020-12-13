import React from 'react';
import {
    FooterWrapper, FooterTitle, FooterLogo, FooterDescription, HorizontalLine, Copyright
} from './Footer.styled';
import Landie from '../../../images/navbarLogo.png';
import {FaFacebook, FaTwitter, FaLinkedin, FaGoogle} from 'react-icons/fa';
import {Container} from '../../../components/Global.styled';

function Footer() {

    return (
        <Container>
            <FooterWrapper>
                <div>
                    <FooterTitle>
                        Sport Build
                    </FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Dicta laboriosam
                        nihil
                        quasi repudiandae<br/> totam velit veritatis? </FooterDescription>
                </div>
                <FooterLogo src={Landie} alt="Landie"/>
                <div>
                    <FaFacebook style={{paddingLeft: "20px",}} size={42}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={42}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={42}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={42}/>
                </div>
            </FooterWrapper>
            <HorizontalLine/>
            <Copyright> All rights reserved © Fedyniak Illya IOT 2020 </Copyright>
        </Container>
    );

}

export default Footer;
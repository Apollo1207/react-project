import React from "react";
import {Container} from "../../components/Global.styled";
import {
    IntroWrapper,
    IntroLogo,
    IntroText,
    IntroTextTitle,
    IntroTextDescription,
    CardWrapper,
    Card,
    CardPhoto,
    CardTitle,
    CardButtonWrapper
} from "./Home.styled";
import Olympic from '../../icons/intro_logo.png';
import Sport from '../../icons/card_photo.jpg';
import Button from "../../components/Button/Button";

function Home() {
    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src={Olympic} alt="Olympic"/>
                <IntroText>
                    <IntroTextTitle>Header</IntroTextTitle>
                    <IntroTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.<br/> Dignissimos
                        et expedita iure minus
                        temporibus. Asperiores blanditiis<br/> corporis dolore earum fugit laudantium nam perspiciatis,
                        reiciendis<br/> repellendus unde. Atque delectus exercitationem
                        ratione.</IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                <Card>
                    <CardPhoto src={Sport} alt="Sport"/>
                    <CardTitle>
                        Title
                    </CardTitle>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. A ad aliquam<br/> esse facere
                        incidunt nam quibusdam repellendus <br/> Animi cum deleniti dignissimos iure iusto,
                        minus <br/> optio quasi voluptatum.</p>
                </Card>
                <Card>
                    <CardPhoto src={Sport} alt="Sport"/>
                    <CardTitle>
                        Title
                    </CardTitle>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. A ad
                        aliquam<br/> esse facere incidunt nam quibusdam repellendus <br/> Animi cum deleniti dignissimos
                        iure iusto, minus <br/> optio quasi voluptatum.</p>
                </Card>
                <Card>
                    <CardPhoto src={Sport} alt="Sport"/>
                    <CardTitle>
                        Title
                    </CardTitle>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. A ad
                        aliquam<br/> esse facere incidunt nam quibusdam repellendus <br/> Animi cum deleniti dignissimos
                        iure iusto, minus <br/> optio quasi voluptatum.</p>
                </Card>
            </CardWrapper>
            <CardButtonWrapper>
                <Button buttonText="View more" backgroundColor="#454545" color="#fff" fontSize="16" padding="20px 50px" border="none" />
            </CardButtonWrapper>
        </Container>
    );
}

export default Home;
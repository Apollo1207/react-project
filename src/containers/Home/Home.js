import React from "react";
import {Container,CardWrapper} from "../../components/Global.styled";
import {
    IntroWrapper,
    IntroLogo,
    IntroText,
    IntroTextTitle,
    IntroTextDescription,
    CardButtonWrapper
} from "./Home.styled";
import Olympic from '../../icons/intro_logo.png';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import {data} from "../../components/data";

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
                {data.map(({name,location,car},idx) => (
                    <Card
                        name={name}
                        location={location}
                        car={car}
                    />
                ))}
            </CardWrapper>
            <CardButtonWrapper>
                <Button buttonText="View more" backgroundColor="#454545" color="#fff" fontSize="16" padding="20px 50px" border="none" />
            </CardButtonWrapper>
        </Container>
    );
}

export default Home;
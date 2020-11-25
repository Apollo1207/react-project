import React from 'react';
import {Container, CardWrapper} from "../../components/Global.styled";
import Dropdown from "../../components/Filter/Dropdown";
import {DropdowingWrapper, DropdownBar} from "./Catalog.styled";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import {data} from "../../components/data";

function Catalog() {
    return (
        <Container>
            <DropdownBar>
                <DropdowingWrapper>
                    <Dropdown options={data}/>
                    <Dropdown options={data}/>
                    <Dropdown options={data}/>
                </DropdowingWrapper>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="10px 45px"
                            border="1px solid"/>
                </div>
            </DropdownBar>
            <CardWrapper>
                {data.map(({name, location, car}, idx) => (
                    <Card
                        name={name}
                        location={location}
                        car={car}
                    />
                ))}
            </CardWrapper>
        </Container>
    );
}


export default Catalog;
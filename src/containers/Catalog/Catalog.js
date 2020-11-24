import React from 'react';
import {Container} from "../../components/Global.styled";
import Dropdown from "../../components/Filter/Dropdown";
import {DropdowingWrapper,DropdownBar} from "./Catalog.styled";
import Button from "../../components/Button/Button";

function Catalog() {
    const options = [
        {
            name: "😃 William",
            location: "🏘️ Lagos",
            car: "🚘 Honda"
        },
        {
            name: "😃 Chris",
            location: "🏘️ Moon",
            car: "🚘 Tesla"
        },
        {
            name: " 😃 Rose",
            location: "🏘️ Venice",
            car: "🚘 Pagani"
        },
        {
            name: "😃 Mike",
            location: "🏘️ Milan",
            car: "🚘 Rolls Royce"
        },
        {
            name: "😃 Liz",
            location: "🏘️ Beirut",
            car: "🚘 Mercedes"
        }
    ]
    return (
        <Container>
            <DropdownBar>
            <DropdowingWrapper>
                <Dropdown options={options}/>
                <Dropdown options={options}/>
                <Dropdown options={options}/>
            </DropdowingWrapper>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px" padding="10px 45px"
                            border="1px solid"/>
                </div>
           </DropdownBar>
        </Container>

    );
}


export default Catalog;
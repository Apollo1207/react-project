import React from "react"
import {CardItem} from "./Card.styled"
import Sport from "../../icons/card_photo.jpg";
import Button from "../Button/Button";

function Card(props) {
    return (
        <CardItem>
            <img src={Sport} alt="Sport"/>
            <h3>
                {props.name}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi excepturi perspiciatis
                placeat veritatis. {props.location}</p>
            <h5>Price: <span> {props.car}</span></h5>
            <Button buttonText="View more" backgroundColor="#454545" color="#fff" fontSize="13px"
                    padding="10px 45px"
                    border="none"/>
        </CardItem>
    );
}

export default Card;
import React from "react"
import {CardItem} from "./Card.styled"
import Button from "../Button/Button";
import {Link} from "react-router-dom";


function Card(props) {

    return (
        <CardItem>
            <img src={props.sportBuild.img} alt="Sport"/>
            <h3>
                {props.sportBuild.sportBuildName}
            </h3>
            <h4> {props.sportBuild.numberOfSeats}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi excepturi perspiciatis
                placeat veritatis.{props.sportBuild.location}, {props.sportBuild.yearOfFoundation}.</p>
            <h5>Scale of field: <span>{props.sportBuild.scaleOfField}</span></h5>
            <Link exact to={`/catalog/item/${props.sportBuild.id}`}>
                <Button buttonText="View more" backgroundColor="#454545" color="#fff" fontSize="13px"
                        padding="10px 45px"/>
            </Link>
        </CardItem>
    );

}

export default Card;
import React, {useContext} from "react";
import {ItemWrapper, ItemData} from "./Item.styled"
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import SportBuildContext from "../../components/SportBuildContext";

function Item() {

    const sportBuildsList = useContext(SportBuildContext)
    const {id} = useParams();
    const sportBuildItems = sportBuildsList.find(sportBuildItem => (sportBuildItem.id === parseInt(id)));

    return (
        <ItemWrapper>
            <img src={sportBuildItems.img} alt="Sport"/>
            <ItemData>
                <h1>{sportBuildItems.sportBuildName}</h1>
                <h3>Location: {sportBuildItems.location}</h3>
                <h3>Number of seats: {sportBuildItems.numberOfSeats}</h3>
                <h3>Year of foundation: {sportBuildItems.yearOfFoundation}</h3>
                <h3>Scale of field: {sportBuildItems.scaleOfField}</h3>
                <div>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="13px 20px"
                                border="1px solid"/>
                    </Link>
                    <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 25px"/>
                </div>
            </ItemData>

        </ItemWrapper>
    );

}

export default Item;
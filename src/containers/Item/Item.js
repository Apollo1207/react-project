import React, {useEffect, useState} from "react";
import {ItemWrapper, ItemData} from "./Item.styled"
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import SportBuildPhoto from '../../images/sportBuildPhoto.jpg';
import Loader from "../../components/Loader/Loader";
import {useDispatch} from "react-redux";
import {addCart} from "../../utils/store/slice/sportBuildSlice";

function Item() {
    const dispatch = useDispatch();

    const {id} = useParams();

    const [sportBuild, setSportBuild] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/sportBuilds/${id}`)
            .then(response => setSportBuild(response.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!sportBuild) {
        return <Loader/>
    }
    return (
        <ItemWrapper>
            <img src={SportBuildPhoto} alt="Sport"/>
            <ItemData>
                <h1>{sportBuild.name_of_sport}</h1>
                <h3>Location: {sportBuild.location}</h3>
                <h3>Number of seats: {sportBuild.number_of_seats}</h3>
                <h3>Year of foundation: {sportBuild.year_of_foundation}</h3>
                <h3>Scale of field: {sportBuild.scale_of_field}</h3>
                <div>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="13px 20px"
                                border="1px solid"/>
                    </Link>
                    <Link exact to="/cart">
                        <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                                padding="13px 25px" onClick={() => dispatch(addCart(sportBuild))}/>
                    </Link>
                </div>
            </ItemData>

        </ItemWrapper>
    );

}

export default Item;
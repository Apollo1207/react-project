import React, {useEffect, useState} from 'react';
import {Container, CardWrapper} from "../../components/Global.styled";
import {MenuBar, DropdownBar} from "./Catalog.styled";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import {getFilteredName} from "../../api";
import Loader from "../../components/Loader/Loader";

function Catalog() {

    const [filterSportBuildName, setFilterSportBuildName] = useState('None');
    useEffect(() => {
        if (filterSportBuildName !== "None")
            (async function () {
                setTotalSportBuilds(await getFilteredName(filterSportBuildName));
            })()
    }, [filterSportBuildName]);


    const [searchSportBuildName, setSearchSportBuildName] = useState('')
    const [showedItems, setShowedItems] = useState([]);


    const [totalSportBuilds, setTotalSportBuilds] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/sportBuilds')
            .then(response => setTotalSportBuilds(response.data));

    }, []);


    useEffect(() => {

        const pattern = new RegExp(searchSportBuildName, 'i');
        let filteredItems = totalSportBuilds;

        if (searchSportBuildName !== '') {
            filteredItems = totalSportBuilds.filter(item => (pattern.test(item.name_of_sport)));
        }


        setShowedItems(filteredItems.slice(0));
    }, [searchSportBuildName, totalSportBuilds]);
    if (showedItems.length === 0) {
        return <Loader/>
    }
    return (
        <Container>
            <MenuBar>
                <Search searchState={[searchSportBuildName, setSearchSportBuildName]}/>
                <DropdownBar>
                    <Filter name='Sport Build' options={['Sport Build', 'Athletics', 'Swimming', 'Football']}
                            filterState={[filterSportBuildName, setFilterSportBuildName]}/>
                </DropdownBar>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="10px 45px"
                            border="1px solid"/>
                </div>
            </MenuBar>
            <CardWrapper>
                {showedItems.map((sportBuild) => (
                    <Card sportBuild={sportBuild}/>
                ))}
            </CardWrapper>
        </Container>
    );

}


export default Catalog;
import React, {useContext, useEffect, useState} from 'react';
import {Container, CardWrapper, CatalogSelect} from "../../components/Global.styled";
import {MenuBar, DropdownBar} from "./Catalog.styled";
import {data} from "../../components/data";
import SportBuildContext from "../../components/SportBuildContext";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";

function Catalog() {

    const sportBuilds = useContext(SportBuildContext)

    const [items, setItems] = useState(sportBuilds.slice(0));
    const [searchSportBuildName, setSearchSportBuildName] = useState('')
    const [filterSportBuildName, setFilterSportBuildName] = useState('None');
    const [filterLocation, setFilterLocation] = useState('None');

    useEffect(() => {
        const pattern = new RegExp(searchSportBuildName, 'i');
        let filteredItems = sportBuilds;

        if (searchSportBuildName !== '') {
            filteredItems = filteredItems.filter(item => (pattern.test(item.sportBuildName)));
        }

        if (filterSportBuildName !== 'None') {
            filteredItems = filteredItems.filter(item => (item.sportBuildName === filterSportBuildName));
        }

        if (filterLocation !== 'None') {
            filteredItems = filteredItems.filter(item => (item.location === filterLocation));
        }

        setItems(filteredItems.slice(0));
    }, [filterSportBuildName, filterLocation, searchSportBuildName, sportBuilds]);
    return (
        <Container>
            <MenuBar>
                <Search searchState={[searchSportBuildName, setSearchSportBuildName]}/>
                <DropdownBar>
                    <Filter name='Sport Build Name' options={['Athletics', 'Swimming']}
                            filterState={[filterSportBuildName, setFilterSportBuildName]}/>
                    <Filter name='Location' options={['Bulgaria', 'Germany', 'France']}
                            filterState={[filterLocation, setFilterLocation]}/>
                    <CatalogSelect>
                        {data.map(dataItem =>
                            <option>
                                {dataItem.optionName}</option>)
                        }
                    </CatalogSelect>
                </DropdownBar>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="10px 45px"
                            border="1px solid"/>
                </div>
            </MenuBar>
            <CardWrapper>
                {items.map((sportBuild) => (
                    <Card sportBuild={sportBuild}/>
                ))}
            </CardWrapper>
        </Container>
    );

}


export default Catalog;
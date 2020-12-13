import React, {useState} from "react";
import {NavInput} from "./Search.styled";
import Button from "../Button/Button";
import {SearchWrapper} from "./Search.styled"

function Search({searchState: [searchSportBuildName, setSearchSportBuildName]}) {

    const [text, setText] = useState('');

    return (
        <SearchWrapper>
            <NavInput value={text} icon="search" onChange={e => (setText(e.target.value))}/>
            <Button buttonText="Search" backgroundColor="#fff" color="#000000" fontSize="16" padding="5px 15px"
                    border="1px solid" onClick={e => (setSearchSportBuildName(text))}/>
        </SearchWrapper>

    );
}

export default Search;
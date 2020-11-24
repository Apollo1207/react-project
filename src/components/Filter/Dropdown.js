import React from "react";

import {CatalogSelect} from "./Dropdown.styled.";

function Dropdown(props) {
    return (
        <CatalogSelect>
            {props.options.map(option =>
                <option key={option.car} value={option.location}>
                    {option.name}</option>)
            }
        </CatalogSelect>
    );
}

export default Dropdown;
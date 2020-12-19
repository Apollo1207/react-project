import React from "react";
import {CatalogSelect} from "../../utils/Global.styled";


function Filter({name, options, filterState: [value, setValue]}) {

    return (
        <div>
            <CatalogSelect name={name} value={value} onChange={e => setValue(e.target.value)}>
                {options.map((option) =>
                    <option key={option} value={option}>{option}</option>
                )}
            </CatalogSelect>
        </div>
    );

}

export default Filter;
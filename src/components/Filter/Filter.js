import React from "react";
import {CatalogSelect} from "../Global.styled";


function Filter({name, options, filterState: [value, setValue]}) {

    return (
        <div>
            <CatalogSelect name='filter' value={value} onChange={e => setValue(e.target.value)}>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
            </CatalogSelect>
        </div>
    );

}

export default Filter;
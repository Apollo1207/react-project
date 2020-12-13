import React from "react";
import {Spinner} from "./Loader.styled"

function Loader() {
    return (
        <div
            style={{height: '257px', display: 'flex', justifyContent: 'center'}}>
            <Spinner>Loading...</Spinner>
        </div>
    );
}

export default Loader;
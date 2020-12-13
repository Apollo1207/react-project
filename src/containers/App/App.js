import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import SportBuildContext from "../../components/SportBuildContext";
// import {sportBuild} from "../../components/data";


function App() {

    return (
        <div>
            {/*<SportBuildContext.Provider value={sportBuild}>*/}
                <Header/>
                <Footer/>
            {/*</SportBuildContext.Provider>*/}
        </div>
    );

}

export default App;

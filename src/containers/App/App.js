import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../../utils/store/slice/authorizationSlice";


function App() {
    const isLogged = useSelector(selectIsLogged);
    return (
        <Router>
            {isLogged ? <Header/> : <Switch>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
            </Switch>}

            {isLogged ? <Footer/> : null}
        </Router>

    );

}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {Container} from '../../../utils/Global.styled';
import {LinkingWrapper, LinkItem, Navbar, NavbarLogo} from './Header.styled';
import 'semantic-ui-css/semantic.min.css';
import NavLink from './Header.styled';
import Landie from '../../../images/navbarLogo.png';
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog";
import Cart from "../../Cart/Cart";
import Item from "../../Item/Item";
import Checkout from "../../Checkout/Checkout";
import Success from "../../Success/Success";
import {logged} from "../../../utils/store/slice/authorizationSlice";
import {useDispatch} from "react-redux";
import Button from "../../../components/Button/Button";


function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const signOut = () => {
        dispatch(logged(false))
        history.push('/login');
    };
    return (
        <Container>
            <Router>
                <Navbar>
                    <NavbarLogo src={Landie} alt="Landie"/>
                    <LinkingWrapper>
                        <li>
                            <NavLink exact to="/">
                                <LinkItem>Home</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog">
                                <LinkItem>Catalog</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/cart">
                                <LinkItem>Cart</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog/item">
                            </NavLink>
                        </li>

                    </LinkingWrapper>
                    <Button buttonText="Sign Out" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="13px 20px"
                            border="1px solid" onClick={signOut}/>
                </Navbar>

                <Switch>
                    <Route path="/cart/checkout/success">
                        <Success/>
                    </Route>
                    <Route path="/cart/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/catalog/item/:id">
                        <Item/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );

}

export default Header;
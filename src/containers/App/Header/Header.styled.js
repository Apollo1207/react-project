import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LinkingWrapper = styled.ul`
  display: flex;
  list-style: none;
`;

export default styled(NavLink)`
  text-decoration: none;
`;

export const LinkItem = styled.li`
  padding: 10px 40px;
  margin: 0 15px;
  text-decoration: none;
  font-size: 16px;
  background: #dfdfdf;
  color: #000000;
  font-weight: 400;
  border-radius: 30px;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

export const NavbarLogo = styled.img`
  width: 230px;
  height: 65px;
`;




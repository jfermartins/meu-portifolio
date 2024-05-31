import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #ddd;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Header;

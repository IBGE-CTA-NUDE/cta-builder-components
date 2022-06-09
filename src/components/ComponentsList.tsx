import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 16px;
  
  a {
    display: block;
    text-decoration: none;
    padding: 3px 0;
    border-bottom: 1px solid currentcolor;
    width: 100%;
  }
`;

const ComponentsList = () => {
  return (
    <Nav>
      <NavLink
        style={({isActive}) => isActive ? {fontWeight: 'bolder'} : {}}
        to={`/accordion`}
      >
        Accordion
      </NavLink>
      <NavLink
        style={({isActive}) => isActive ? {fontWeight: 'bolder'} : {}}
        to={`/tooltip`}
      >
        Tooltip
      </NavLink>
    </Nav>
  );
};

export {ComponentsList};

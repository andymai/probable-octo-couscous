/**
 *
 * Header.js
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Logo to="/">DITTO</Logo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled(Link)`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: #000;
`;

Header.propTypes = {};

export default Header;

/**
 *
 * LargeButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LargeButton(props) {
  return <Button onClick={props.onClick}>{props.label}</Button>;
}

LargeButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const Button = styled.button`
  display: block;
  width: 100%;
  background: #000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  padding: 24px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 2px #74ccf9;
  }
  &:focus {
    box-shadow: 0 0 10px #74ccf9;
  }
`;

export default LargeButton;

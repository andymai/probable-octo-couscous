/**
 *
 * H1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function H1(props) {
  return <Title>{props.label}</Title>;
}

const anim = keyframes`${fadeIn}`;

const Title = styled.div`
  animation: 1.2s ${anim};
  font-size: 7.4vw;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  @media (min-width: 1280px) {
    font-size: 92px;
  }
  @media (max-width: 680px) {
    font-size: 36px;
  }
`;

H1.propTypes = {
  label: PropTypes.string.isRequired,
};

export default H1;

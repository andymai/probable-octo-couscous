/**
 *
 * H2
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

function H2(props) {
  return <Title>{props.label}</Title>;
}

const anim = keyframes`${fadeIn}`;

const Title = styled.div`
  animation: 1.2s ${anim};
  font-size: 24px;
  text-align: center;
  font-weight: 700;
`;

H2.propTypes = {
  label: PropTypes.string.isRequired,
};

export default H2;

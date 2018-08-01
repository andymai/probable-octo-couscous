/**
 *
 * Price
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Price(props) {
  return <Label>{props.msrp}</Label>;
}

Price.propTypes = {
  msrp: PropTypes.string,
};

const Label = styled.div`
  font-weight: bold;
`;

export default Price;

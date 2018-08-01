/**
 *
 * Col
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Col(props) {
  return <Container>{props.children}</Container>;
}

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const Container = styled.div`

`;

export default Col;

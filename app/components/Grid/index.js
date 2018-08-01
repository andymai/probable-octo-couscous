/**
 *
 * Grid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Grid(props) {
  return <Container>{props.children}</Container>;
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const Container = styled.section`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10%;
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Grid;

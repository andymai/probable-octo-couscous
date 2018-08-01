/**
 *
 * Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Container.propTypes = {
  children: PropTypes.object,
};

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 58px;
  @media (max-width: 680px) {
    padding: 0 20px;
  }
`;

export default Container;

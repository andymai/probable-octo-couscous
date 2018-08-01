/**
 *
 * P
 *
 * A common paragraph
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function P(props) {
  return <Paragraph>{props.text.replace(/<(?:.|\n)*?>/gm, '')}</Paragraph>;
}

P.propTypes = {
  text: PropTypes.string.isRequired,
  bold: PropTypes.bool,
};

const Paragraph = styled.div`
  color: #4c4c4c,
  font-size: 18px !important;
  font-weight: 300;
  line-height: 24px;
  margin: 5px 0 8px;
`;

export default P;

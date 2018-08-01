/**
 *
 * RadioList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactRadioButtonGroup from 'react-radio-button-group';

function RadioList(props) {
  return (
    <Container>
      <Heading>{props.formLabel}</Heading>
      <ReactRadioButtonGroup
        name="size"
        options={props.items}
        value={props.selectedValue}
        onChange={props.onChange}
        isStateful={props.isStateful}
      />
    </Container>
  );
}

RadioList.propTypes = {
  formLabel: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
  isStateful: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const Container = styled.div`
  display: block;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export default RadioList;

/**
 *
 * ProductHero
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProductHero(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.frontal} alt="Front View" />
      </ImageContainer>
      <ImageContainer>
        <Image src={props.side} alt="Side View" />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  display: inline-grid;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 0;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px 0;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

ProductHero.propTypes = {
  frontal: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  side: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default ProductHero;

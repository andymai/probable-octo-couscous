/**
 *
 * ProductGridItem.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';

function ProductGridItem(props) {
  return (
    <Container to={props.link}>
      <ImageContainer>
        <Image src={props.src} alt={props.alt} />
      </ImageContainer>
      <InfoContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </InfoContainer>
    </Container>
  );
}

const fadeInAnim = keyframes`${fadeIn}`;

const Container = styled(Link)`
  animation: 1.8s ${fadeInAnim};
  display: block;
  background: #fff;
  padding: 40px 20px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #ebebeb;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 38px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #222;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #666;
`;

ProductGridItem.propTypes = {
  link: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ProductGridItem;

/**
 *
 * ProductGrid.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import slugify from 'slugify';
import ProductGridItem from '../ProductGridItem';

function ProductGrid(props) {
  let content = <div />;

  if (props.items) {
    content = props.items.map((item, index) => (
      <ProductGridItem
        key={item.id}
        link={`/eyeglasses/${index}/${slugify(item.brand+'-'+item.name)}`}
        title={item.brand}
        subTitle={item.name}
        src={item.images.frontal}
        alt={item.name}
      />
    ));
  }

  return <Grid>{content}</Grid>;
}

const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

ProductGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductGrid;

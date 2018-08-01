/**
 *
 * DesignListView
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import products from '../../eyewear.json';

import H1 from '../../components/H1';
import ProductGrid from '../../components/ProductGrid';
import Section from '../../components/Section';

/* eslint-disable react/prefer-stateless-function */
export class DesignListView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Browse Eyewear | Ditto</title>
          <meta name="description" content="Browse our selection of eyewear" />
        </Helmet>
        <H1 label="Select Your Eyewear" />
        <ProductGrid items={products.eyewear} />
      </div>
    );
  }
}

export default DesignListView;

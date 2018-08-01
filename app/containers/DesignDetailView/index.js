/**
 *
 * DesignDetailView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import products from '../../eyewear.json';

import H1 from '../../components/H1';
import H2 from '../../components/H2';
import P from '../../components/P';
import ProductHero from '../../components/ProductHero';
import ProductGrid from '../../components/ProductGrid';
import Grid from '../../components/Grid';
import Col from '../../components/Col';
import RadioList from '../../components/RadioList';
import CenteredSection from '../../components/CenteredSection';
import Section from '../../components/Section';
import LargeButton from '../../components/LargeButton';
import Price from '../../components/Price';

import priceToCents from '../../utils/priceToCents';

/* eslint-disable react/prefer-stateless-function */
export class DesignDetailView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  handleSizeChange = selectedSize => {
    this.setState({
      selectedSize,
    });
  };

  handleBuyButton = () => {
    const payload = {
      'purchase-sku-id': this.state.sku,
      'purchase-price': priceToCents(this.state.price),
      'purchase-sku-size': this.state.selectedSize,
      'purchase-datatime': new Date().toISOString(),
    }
    console.log(payload);
    alert(JSON.stringify(payload, null, 2));
  };

  fetchData(props) {
    // Get params from route
    const index = parseInt(props.match.params.id, 10);
    // Return item from product payload
    const item = products.eyewear[index];

    this.setState({
      sizes: item.sizes,
      selectedSize: item.sizes[0],
      sku: item['sku-id'],
      name: item.name,
      brand: item.brand,
      price: item.price,
      description: item.description,
      frontal: item.images.frontal,
      side: item.images.side,
      loading: false,
    });
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  componentWillMount() {
    this.fetchData(this.props);
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div>
        <Helmet>
          <title>
            {this.state.brand} {this.state.name} | Ditto
          </title>
          <meta name="description" content={this.state.description} />
        </Helmet>
        <ProductHero frontal={this.state.frontal} side={this.state.side} />
        <CenteredSection>
          <H1 label={this.state.brand} />
          <P text={this.state.name} />
          <Price msrp={`$${this.state.price}`} />
        </CenteredSection>
        <Section>
          <Grid>
            <Col>
              <P text={this.state.description} />
            </Col>
            <Col>
              <RadioList
                formLabel="Select Size"
                items={this.state.sizes}
                buttonLabel="Buy"
                selectedValue={this.state.selectedSize}
                onChange={this.handleSizeChange}
              />
              <LargeButton label="Buy" onClick={() => this.handleBuyButton()}s />
            </Col>
          </Grid>
        </Section>
        <H2 label="Select Your Eyewear" />
        <ProductGrid items={products.eyewear} />
      </div>
    );
  }
}

export default DesignDetailView;

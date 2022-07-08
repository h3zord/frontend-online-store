import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductListCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt="imagem ilustrativa do produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductListCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductListCard;

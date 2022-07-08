import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductListCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt="imagem ilustrativa do produto" />
        <p>{ price }</p>
        <Link
          to={ `/moreInfo/${id}` }
          data-testid="product-detail-link"
        >
          Mais Informações
        </Link>
      </div>
    );
  }
}

ProductListCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductListCard;

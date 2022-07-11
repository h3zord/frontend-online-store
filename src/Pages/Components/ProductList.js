import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProductInCart } from '../../services/cartList';

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
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProductInCart(thumbnail, title, price, id) }
        >
          Adicionar ao Carrinho
        </button>
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

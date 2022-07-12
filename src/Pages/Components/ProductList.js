import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { addProductInCart } from '../../services/cartList';

class ProductListCard extends Component {
  adjustPrice = (price) => {
    if (price) return price.toFixed(2);
  }

  render() {
    const { productData } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{ productData.title }</p>
        <img src={ productData.thumbnail } alt="imagem ilustrativa do produto" />
        <p>{ `R$ ${this.adjustPrice(productData.price)}` }</p>
        {
          productData.shipping.free_shipping && (
            <div data-testid="free-shipping">
              <FaShippingFast />
              <p>Frete Grátis</p>
            </div>
          )
        }
        <Link
          to={ `/moreInfo/${productData.id}` }
          data-testid="product-detail-link"
        >
          Mais Informações
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProductInCart(productData) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductListCard.propTypes = {
  productData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductListCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import styles from '../../styles/ProductList.module.css';

class ProductListCard extends Component {
  adjustPrice = (price) => {
    if (price) return price.toFixed(2);
  }

  render() {
    const { productData,
      updateCartAndQuantityItems,
    } = this.props;
    return (
      <div data-testid="product" className={ styles.productCard }>
        <img
          src={ productData.thumbnail }
          alt="imagem ilustrativa do produto"
          className={ styles.productImage }
        />
        <p>{ productData.title }</p>
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
          className={ styles.link }
        >
          Mais Informações
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => updateCartAndQuantityItems(productData) }
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
  updateCartAndQuantityItems: PropTypes.func.isRequired,
};

export default ProductListCard;

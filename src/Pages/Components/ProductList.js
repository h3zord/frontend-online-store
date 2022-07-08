import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addItem, editItemQuantity, getCartitems } from '../../services/cartList';

class ProductListCard extends Component {
  addProductIncart = (title, price, productId) => {
    const productsInCart = getCartitems();
    const alreadyInCart = productsInCart.find(({ id }) => id === productId);
    if (!alreadyInCart) {
      const productToAdd = {
        title,
        price,
        id: productId,
        quantity: 1,
      };
      addItem(productToAdd);
    } else {
      const newQuantity = alreadyInCart.quantity + 1;
      editItemQuantity(productId, newQuantity);
    }
  }

  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt="imagem ilustrativa do produto" />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addProductIncart(title, price, id) }
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

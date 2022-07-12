import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  redirectToCart = () => {
    const { history } = this.props;
    history.push('/cart');
  }

  render() {
    const { quantityProducts } = this.props;
    return (
      <div>
        <button
          data-testid="shopping-cart-button"
          type="button"
          id=""
          onClick={ this.redirectToCart }
        >
          Carrinho de Compras
          <p data-testid="shopping-cart-size">{ quantityProducts }</p>
        </button>
      </div>
    );
  }
}

CartButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  quantityProducts: PropTypes.number.isRequired,
};

export default CartButton;

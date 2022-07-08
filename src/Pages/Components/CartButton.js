import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  redirectCart = () => {
    const { history } = this.props;
    history.push('/cart');
  }

  render() {
    return (
      <button
        data-testid="shopping-cart-button"
        type="button"
        id=""
        onClick={ this.redirectCart }
      >
        Carrinho de Compras
      </button>
    );
  }
}

CartButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CartButton;

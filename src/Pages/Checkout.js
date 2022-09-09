import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCartitems } from '../services/cartList';
import Header from './Components/Header';

class Checkout extends Component {
  redirectToPurchase = () => {
    const { history } = this.props;
    history.push('/purchase');
  }

  calculateTotalPrice = () => {
    const productList = getCartitems();
    return productList.reduce((acc, curr) => {
      acc += (curr.price * curr.quantity);
      return acc;
    }, 0);
  }

  render() {
    const productList = getCartitems();
    const totalPrice = this.calculateTotalPrice();
    return (
      <div className="checkout-page">
        <Header />
        <div className="products-checkout">
          {
            productList.map(({ id, image, price, quantity, title }) => (
              <div key={ id } className="product-checkout">
                <img
                  src={ image }
                  alt="imagem ilustrativa do produto"
                  className="product-image"
                />
                <h3>{ title }</h3>
                <p>{ `R$ ${(price * quantity).toFixed(2)}` }</p>
                <p>{`Quantidade: ${quantity}`}</p>
              </div>
            ))
          }
        </div>
        <br />
        <br />
        <h4>{`Total da Compra: R$ ${totalPrice.toFixed(2)}`}</h4>
        <br />
        <br />
        <h3>Informações do Comprador</h3>
        <form className="form-checkout">
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
          />
          <input
            data-testid="checkout-phone"
            type="tel"
            placeholder="Telefone"
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
          <button
            type="button"
            onClick={ this.redirectToPurchase }
          >
            COMPRAR
          </button>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;

import PropTypes from 'prop-types';
import React from 'react';
import { getProductFromProductId } from '../services/api';
import { addProductInCart } from '../services/cartList';
import '../Styles/homeStyle.css';
import CartButton from './Components/CartButton';

class MoreInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
      emailInput: '',
      textAreaInput: '',
      rateButton: 0,
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  handleRateChange = (rate) => {
    this.setState({ rateButton: rate });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  getProductInfo = async () => {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductFromProductId(id);
    this.setState({ productInfo: productData });
    // console.log(this.state.productInfo); LOG DO RETORNO DO OBJETO COM AS INFORMAÇÕES
  }

  render() {
    const {
      productInfo: { thumbnail, price, title, warranty, id }, emailInput, textAreaInput,
    } = this.state;
    const { history } = this.props;
    const rateButtons = [];
    const maxRate = 5;
    for (let i = 1; i <= maxRate; i += 1) {
      rateButtons.push(
        <button
          onClick={ () => this.handleRateChange(i) }
          data-testid={ `${i}-rating` }
          type="button"
        >
          {i}
        </button>,
      );
    }
    return (
      <div className="info-container">
        <CartButton history={ history } />
        <div>
          <img src={ thumbnail } alt="imagem ilustrativa do produto" />
        </div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <p>{id}</p>
          <p>{price}</p>
          <p>{warranty}</p>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addProductInCart(thumbnail, title, price, id) }
        >
          Adicionar ao Carrinho
        </button>
        <form>
          <h1>Avaliação</h1>
          <input
            onChange={ this.handleChange }
            type="email"
            name="emailInput"
            value={ emailInput }
            data-testid="product-detail-email"
            placeholder="Digite seu e-mail"
          />
          <div>
            {rateButtons}
          </div>
          <textarea
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
            name="textAreaInput"
            value={ textAreaInput }
            placeholder="Adicione seus comentários sobre o produto (opcional)"
          />
          <button
            type="submit"
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

MoreInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

MoreInfo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default MoreInfo;

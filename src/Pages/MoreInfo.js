import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromProductId } from '../services/api';
import CartButton from './Components/CartButton';
import '../Styles/homeStyle.css';

class MoreInfo extends Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo = async () => {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductFromProductId(id);
    this.setState({ productInfo: productData });
    // console.log(this.state.productInfo); LOG DO RETORNO DO OBJETO COM AS INFORMAÇÕES
  }

  render() {
    const {
      productInfo: { thumbnail, price, title, warranty, id } } = this.state;
    const { history } = this.props;
    return (
      <div className="info-container">
        <CartButton history={ history } />
        <div>
          <img src={ thumbnail } alt="imagem ilustrativa do produto" />
        </div>
        <div>
          <p data-testid="product-detail-name">{ title }</p>
          <p>{ id }</p>
          <p>{ price }</p>
          <p>{ warranty }</p>
        </div>
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

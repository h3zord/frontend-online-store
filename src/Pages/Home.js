import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './Components/CartButton';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productSearch: false,
      searchInput: '',
      productList: [],
    };
  }

  handleState = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getProductsList = async () => {
    const { searchInput } = this.state;
    const productData = await getProductsFromCategoryAndQuery('categoryId', searchInput);
    const productList = productData.results;
    this.setState({ productList });
    // console.log(productList);
  }

  render() {
    const { productSearch, searchInput, productList } = this.state;
    const { history } = this.props;

    const messageAlert = (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );

    return (
      <>
        {
          !productSearch
          && messageAlert
        }
        <div className="search-container">
          <input
            data-testid="query-input"
            type="search"
            placeholder="Digite aqui o que você procura"
            name="searchInput"
            value={ searchInput }
            onChange={ this.handleState }
            id="search-input"
          />

          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProductsList }
          >
            Buscar
          </button>
        </div>

        <CartButton history={ history } />

        <div className="product-container">
          {
            productList.map(({ title, thumbnail, price, id }) => (
              <div key={ id } data-testid="product" className="product-card">
                <p>{ title }</p>
                <img src={ thumbnail } alt="imagem ilustrativa do produto" />
                <p>{ price }</p>
              </div>
            ))
          }
        </div>

      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

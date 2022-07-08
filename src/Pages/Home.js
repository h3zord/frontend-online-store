import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './Components/CartButton';
import { getCategories } from '../services/api';
import Loading from './Components/Loading';
import '../Styles/homeStyle.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productSearch: false,
      productCategories: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getProductCategories();
  }

  getProductCategories = () => {
    this.setState({
      isLoading: true,
    }, async () => {
      const categoryList = await getCategories();
      this.setState({
        productCategories: categoryList,
        isLoading: false,
      });
    });
  }

  getCategoryBtns = (productCategories) => {
    const categoryBtns = productCategories.map(({ id, name }) => (
      <button
        key={ id }
        type="button"
        data-testid="category"
        onClick={ () => {} }
      >
        {name}
      </button>
    ));

    return categoryBtns;
  }

  render() {
    const { productSearch, isLoading, productCategories } = this.state;
    const { history } = this.props;

    return (
      <div className="home-page">
        <aside className="category-list">
          {
            isLoading ? <Loading /> : this.getCategoryBtns(productCategories)
          }
        </aside>
        <main>
          <div className="search-and-cart">
            <CartButton history={ history } />
          </div>
          <section className="searched-products">
            {
              !productSearch && (
                <h1 data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </h1>
              )
            }
          </section>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

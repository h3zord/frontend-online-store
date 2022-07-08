import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './Components/CartButton';

class Home extends React.Component {
  constructor() {
    super();

    this.state = { productSearch: false };
  }

  render() {
    const { productSearch } = this.state;
    const { history } = this.props;

    if (!productSearch) {
      return (
        <>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <CartButton history={ history } />
        </>
      );
    }
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import voltar from '../../images/voltar.svg';
import styles from '../../styles/BackButton.module.css';

export default class BackButton extends Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.goBack }
        className={ styles.backButton }
      >
        <img src={ voltar } alt="back button img" />
        Voltar
      </button>
    );
  }
}

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

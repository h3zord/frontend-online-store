import React, { Component } from 'react';
import Header from './Header';
import styles from '../../styles/Purchase.module.css';

class Purchase extends Component {
  render() {
    return (
      <div className={ styles.purchaseContainer }>
        <Header />
        <div className={ styles.purchaseText }>
          <p>Obrigado pela compra!</p>
        </div>
      </div>
    );
  }
}

export default Purchase;

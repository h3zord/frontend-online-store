import React from 'react';
import styles from '../../styles/Header.module.css';
import logo from '../../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className={ styles.headerContainer }>
        <img src={ logo } alt="logo img" />
      </header>
    );
  }
}

export default Header;

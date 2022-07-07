import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  render(){
    getCategories()
  return (
    <>
      <h1>Group 24</h1>
      
    </>
  );
  }
}

export default App;

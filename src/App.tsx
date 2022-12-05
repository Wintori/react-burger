import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/app-header'
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';

function App() {
  return (
    <div className="App">
      
        <AppHeader />
        <body style={{ width: "100%", maxWidth: "1239px", padding: '0', margin: '0 auto 40px', display: 'flex', justifyContent: 'space-between' }}>

          <BurgerIngredients />
          <BurgerConstructor />

        </body>
    </div>
  );
}

export default App;

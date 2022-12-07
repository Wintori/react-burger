import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <AppHeader />
      </header>
        
      <main className='content'>

        <BurgerIngredients />
        <BurgerConstructor />

      </main>
    </div>
  );
}

export default App;
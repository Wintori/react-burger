import React from 'react';
import AppStyles from './App.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const App = () => {
  
  return (
    <div className={AppStyles.app}>
      <header>
        <AppHeader />
      </header>
      <DndProvider backend={HTML5Backend}>
        <main className={AppStyles.content}>

          <BurgerIngredients />
          <BurgerConstructor />

        </main>
      </DndProvider>
    </div>
  );
}

export default App;
import React from 'react';
import { useEffect, useState } from 'react';
import AppStyles from './App.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getData } from '../../utils/api';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData(setData)
  }, [])


  return (
    <div className={AppStyles.app}>
      <header>
        <AppHeader />
      </header>

      <main className={AppStyles.content}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import { useEffect, useState } from 'react';
import AppStyles from './App.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api';

const App = (props) => {
  const url = 'https://norma.nomoreparties.space/api/ingredients'
  const [data, setData] = useState([''])

  useEffect(() => {
    const getData = () => {
      return fetch(url)
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch((res) => api.checkResult(res))
    }
    getData()
  }, [setData])


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
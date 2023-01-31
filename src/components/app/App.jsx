import React from 'react';
import { useEffect, useState } from 'react';
import AppStyles from './App.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getData } from '../../utils/api';
import { BurgerContext, IngredientsContext } from '../../services/burgerContext';

const App = () => {
  const [data, setData] = useState([])
  const [ingredList, setIngredList] = useState([])
  const [price, setPrice] = useState(0)
  const [order, setOrder] = useState()

  useEffect(() => {
    getData()
    .then(result => setData(result.data))
    .catch((error) => { console.log(error) })
  }, [])

  return (
    <div className={AppStyles.app}>
      <header>
        <AppHeader />
      </header>
      <main className={AppStyles.content}>
        <IngredientsContext.Provider value={{ data, ingredList, setIngredList}}>
          <BurgerIngredients />
        </IngredientsContext.Provider>

        <BurgerContext.Provider value={{data, price, order, setPrice, setOrder}}>
            <BurgerConstructor/>
        </BurgerContext.Provider>
      </main>
    </div>
  );
}

export default App;
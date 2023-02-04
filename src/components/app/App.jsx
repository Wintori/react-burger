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
      .then(result => { setData(result.data); return result })
      .then((res) => {
        const temp = []
        temp.push(res.data[0])
        temp.push(res.data[2])
        temp.push(res.data[7])
        temp.push(res.data[9])
        temp.push(res.data[12])
        setIngredList(temp)
      })
      .catch((error) => { console.log(error) })


  }, [])

  return (
    <div className={AppStyles.app}>
      <header>
        <AppHeader />
      </header>
      <main className={AppStyles.content}>
        <IngredientsContext.Provider value={{ data, ingredList, setIngredList }}>
          <BurgerIngredients />
        </IngredientsContext.Provider>

        <BurgerContext.Provider value={{ data, ingredList, price, order, setPrice, setOrder, setIngredList }}>
          <BurgerConstructor />
        </BurgerContext.Provider>
      </main>
    </div>
  );
}

export default App;
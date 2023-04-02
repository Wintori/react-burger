import React from 'react';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import Styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={Styles.content}>
            <BurgerIngredients />
            <BurgerConstructor />
        </div>
    );
};

export default Home;
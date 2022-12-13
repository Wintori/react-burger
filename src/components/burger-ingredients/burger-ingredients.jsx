import React from 'react';
import IngredientsButtons from '../ingredients-buttons/ingredients-buttons';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import IngredientItem from '../ingredient-item/ingredient-item';



const BurgerIngredients = (props) => {
    return (
        <section className='mr-10'>

            <p className="text text_type_main-large mt-10">
                Соберите бургер
            </p>
            <IngredientsButtons />
            <div className={`${BurgerIngredientsStyles.content} mt-10`}>
                <p className="text text_type_main-medium mb-6">
                    Булки
                </p>
                <ul className={BurgerIngredientsStyles.list} id='bun'>
                    {
                        props.data.map((item) => {
                            return (
                                item.type === 'bun' && <IngredientItem data={item} key={item._id} />
                            );
                        })

                    }

                </ul>

                <p className="text text_type_main-medium mt-10 mb-6">
                    Соусы
                </p>
                <ul className={BurgerIngredientsStyles.list} id='sauce'>
                    {
                        props.data.map((item) => {
                            return (
                                item.type === 'sauce' && <IngredientItem data={item} key={item._id} />
                            );
                        })

                    }
                </ul>

                <p className="text text_type_main-medium mt-10 mb-6">
                    Начинки
                </p>
                <ul className={BurgerIngredientsStyles.list} id='main'>
                    {
                        props.data.map((item) => {
                            return (
                                item.type === 'main' && <IngredientItem data={item} key={item._id} />
                            );
                        })

                    }
                </ul>
            </div>
        </section>
    );
}

export default BurgerIngredients;
import React, { useContext, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IngredientsButtons from '../ingredients-buttons/ingredients-buttons';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import IngredientItem from '../ingredient-item/ingredient-item';
import { getItemsRequest } from '../../services/actions/ingredients'


const BurgerIngredients = () => {

    const dispatch = useDispatch()
    const data = useSelector(store => store.ingredientsReducer.items)

    const refBun = useRef(null);
    const refMain = useRef(null);
    const refSauce = useRef(null);

    const [current, setCurrent] = React.useState('one')

    useEffect(() => {
        switch (current) {
            case 'one': {
                refBun.current.scrollIntoView({ behavior: "smooth" })
                return;
            }
            case 'two': {
                refSauce.current.scrollIntoView({ behavior: "smooth" })
                return;
            }
            case 'three': {
                refMain.current.scrollIntoView({ behavior: "smooth" })
                return;
            }
        }
    }, [current])

    useEffect(() => {
        dispatch(getItemsRequest())
    }, [])



    return (
        <section className='mr-10'>

            <p className="text text_type_main-large mt-10">
                Соберите бургер
            </p>
            <IngredientsButtons current={current} setCurrent={setCurrent} />
            <div className={`${BurgerIngredientsStyles.content} mt-10`}>
                <p className="text text_type_main-medium mb-6" ref={refBun}>
                    Булки
                </p>
                <ul className={BurgerIngredientsStyles.list} id='bun' >
                    {
                        data ? data.map((item) => {
                            return (
                                item.type === 'bun' && <IngredientItem data={item} key={item._id} />
                            );
                        }) : ''

                    }

                </ul>

                <p className="text text_type_main-medium mt-10 mb-6" ref={refSauce}>
                    Соусы
                </p>
                <ul className={BurgerIngredientsStyles.list} id='sauce' >
                    {
                        data ? data.map((item) => {
                            return (
                                item.type === 'sauce' && <IngredientItem data={item} key={item._id} />
                            );
                        }) : ''

                    }
                </ul>

                <p className="text text_type_main-medium mt-10 mb-6" ref={refMain}>
                    Начинки
                </p>
                <ul className={BurgerIngredientsStyles.list} id='main' >
                    {
                        data ? data.map((item) => {
                            return (
                                item.type === 'main' && <IngredientItem data={item} key={item._id} />
                            );
                        }) : ''

                    }
                </ul>
            </div>
        </section>
    );
}

export default BurgerIngredients;
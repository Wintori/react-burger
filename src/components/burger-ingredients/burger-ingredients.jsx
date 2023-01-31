import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import IngredientsButtons from '../ingredients-buttons/ingredients-buttons';
import BurgerIngredientsStyles from './burger-ingredients.module.scss';
import IngredientItem from '../ingredient-item/ingredient-item';
import { dataPropTypes, dataItemPropTypes } from '../../utils/constants';
import { IngredientsContext } from '../../services/burgerContext';


const BurgerIngredients = () => {
    const {data, ingredList, setIngredList } = useContext(IngredientsContext)

    // const addToList = (ingred) => {
    //     const tempList = ingredList
    //     tempList.push(ingred)
    //     setIngredList(tempList)
    // }
    

    // useEffect(() => {

    //     console.log(ingredList)
    //     addToList(data[0])
    //     console.log(ingredList)
    //     addToList(data[3])
    //     console.log(ingredList)

    //   }, [data])

    

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
                        data.map((item) => {
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
                        data.map((item) => {
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
                        data.map((item) => {
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

BurgerIngredients.propTypes = {
    data: dataPropTypes
}

export default BurgerIngredients;
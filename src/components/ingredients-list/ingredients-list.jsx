import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss';
import ConstructorItem from '../constructor-item/constructor-item';
import { dataPropTypes } from '../../utils/constants';
import { BurgerContext } from '../../services/burgerContext';

const IngredientsList = () => {

    const { ingredList } = useContext(BurgerContext)

    return (
        <ul className={ingredientsListStyles.list}>
            {
                ingredList.map((item) => {
                    return (
                        item === ingredList[0] && <ConstructorItem data={item} key={item._id} type={'top'} isLocked={true} />
                    );
                })
            }
            {
                ingredList.map((item) => {
                    return (
                        item.type === 'sauce' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                ingredList.map((item) => {
                    return (
                        item.type === 'main' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                ingredList.map((item) => {
                    return (
                        item === ingredList[0] && <ConstructorItem data={item} key={item._id} type={'bottom'} isLocked={true} />
                    );
                })
            }
        </ul>
    );
}

IngredientsList.propTypes = {
    data: dataPropTypes
}

export default IngredientsList;
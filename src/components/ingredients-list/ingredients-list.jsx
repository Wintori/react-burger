import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss';
import ConstructorItem from '../constructor-item/constructor-item';
import { dataPropTypes } from '../../utils/constants';
import { BurgerContext } from '../../services/burgerContext';

const IngredientsList = () => {

    const {data} = useContext(BurgerContext)

    return (
        <ul className={ingredientsListStyles.list}>
            {
                data.map((item) => {
                    return (
                        item === data[0] && <ConstructorItem data={item} key={item._id} type={'top'} isLocked={true} />
                    );
                })
            }
            {
                data.map((item) => {
                    return (
                        item.type === 'sauce' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                data.map((item) => {
                    return (
                        item.type === 'main' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                data.map((item) => {
                    return (
                        item === data[0] && <ConstructorItem data={item} key={item._id} type={'bottom'} isLocked={true} />
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
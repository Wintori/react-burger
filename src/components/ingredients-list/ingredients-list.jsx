import React from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss';
import ConstructorItem from '../constructor-item/constructor-item';
import { dataItemPropTypes, dataPropTypes } from '../../utils/constants';

const IngredientsList = (props) => {

    return (
        <ul className={ingredientsListStyles.list}>
            {
                props.bun && <ConstructorItem data={props.bun} key={props.bun._id} type={'top'} isLocked={true} />
            }
            {
                props.ingredients.map((item) => {
                    return (
                        item && <ConstructorItem data={item} key={item._id} />
                    );
                })
            }
            {
                props.bun && <ConstructorItem data={props.bun} key={props.bun._id} type={'bottom'} isLocked={true} />
            }
        </ul>
    );
}

IngredientsList.propTypes = {
    bun: dataItemPropTypes,
    ingredients: dataPropTypes
}

export default IngredientsList;
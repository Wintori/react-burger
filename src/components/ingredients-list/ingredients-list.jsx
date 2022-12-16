import React from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss';
import ConstructorItem from '../constructor-item/constructor-item';
import { dataPropTypes } from '../../utils/constants';


const IngredientsList = (props) => {
    return (
        <ul className={ingredientsListStyles.list}>
            {
                props.data.map((item) => {
                    return (
                        item === props.data[0] && <ConstructorItem data={item} key={item._id} type={'top'} isLocked={true} />
                    );
                })
            }
            {
                props.data.map((item) => {
                    return (
                        item.type === 'sauce' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                props.data.map((item) => {
                    return (
                        item.type === 'main' && <ConstructorItem data={item} key={item._id} />
                    );
                })

            }
            {
                props.data.map((item) => {
                    return (
                        item === props.data[0] && <ConstructorItem data={item} key={item._id} type={'bottom'} isLocked={true} />
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
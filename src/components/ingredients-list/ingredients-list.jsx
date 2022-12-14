import React from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss'
import ConstructorItem from '../constructor-item/constructor-item';

const IngredientsList = (props) => {
    return (
        <ul className={ingredientsListStyles.list}>
            {
                props.data.map((item) => {
                    return (
                        item.type === 'bun' && <ConstructorItem data={item} key={item._id} type={'top'} isLocked={true} />
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
                        item.type === 'bun' && <ConstructorItem data={item} key={item._id} type={'bottom'} isLocked={true} />
                    );
                })
            }
        </ul>
    );
}

IngredientsList.propTypes = {
    data: PropTypes.array.isRequired
}

export default IngredientsList;
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
    data: PropTypes.arrayOf(
        PropTypes.shape({
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            image: PropTypes.string,
            image_large: PropTypes.string,
            image_mobile: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            proteins: PropTypes.number,
            type: PropTypes.string,
            __v: PropTypes.number,
            _id: PropTypes.string
        })
    ).isRequired
}

export default IngredientsList;
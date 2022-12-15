import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IngredientItemStyle from './ingredient-item.module.scss'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../ingredient-details/ingredient-details';

const IngredientItem = (props) => {
    const { image, price, name } = props.data
    const [isVisible, setVisible] = useState(false)

    function handleModal() {
        setVisible(() => !isVisible)
    }

    return (
        <>
            <li className={IngredientItemStyle.item} onClick={handleModal}>
                <Counter count={1} size="default" extraClass="m-1" />
                <img className={IngredientItemStyle.image} src={image} alt={name}></img>
                <div className={`${IngredientItemStyle.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${IngredientItemStyle.name}`}>
                    {name}
                </p>
            </li>
            {isVisible && <IngredientDetails onClose={handleModal} data={props.data} overlayHandler={handleModal} />}
        </>
    );
};

IngredientItem.propTypes = {
    data: PropTypes.shape({
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
    }).isRequired
}


export default IngredientItem;
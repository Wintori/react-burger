import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientItemStyle from './ingredient-item.module.scss'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../ingredient-details/ingredient-details';
import { dataItemPropTypes } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { setCurrentItem, DELETE_CURRENT_ITEM } from '../../services/actions/ingredients'

const IngredientItem = (props) => {
    const { image, price, name, __v } = props.data
    const dispatch = useDispatch();
    const currentItem = useSelector(store => store.ingredientsReducer.currentItem)

    function handleModal() {
        if (currentItem) {
            dispatch({ type: DELETE_CURRENT_ITEM })
        } else {
            dispatch(setCurrentItem(props.data))
        }
    }

    const [{ isDragging }, drag] = useDrag({
        type: "ingredElement",
        item: props.data,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? .0 : 1

    return (
        <>
            <li style={{ opacity }} ref={drag} className={IngredientItemStyle.item} onClick={handleModal}>
                {__v ? <Counter count={__v} size="default" extraClass="m-1" /> : ''}
                <img className={IngredientItemStyle.image} src={image} alt={name}></img>
                <div className={`${IngredientItemStyle.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${IngredientItemStyle.name}`}>
                    {name}
                </p>
            </li>
            {currentItem && currentItem?._id === props.data._id && <IngredientDetails data={props.data} overlayHandler={handleModal} />}
        </>
    );
};

IngredientItem.propTypes = {
    data: dataItemPropTypes
}


export default IngredientItem;
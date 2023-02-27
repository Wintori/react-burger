import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientItemStyle from './ingredient-item.module.scss'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../ingredient-details/ingredient-details';
import { dataItemPropTypes } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import { setCurrentItem, DELETE_CURRENT_ITEM } from '../../services/actions/ingredients'

const IngredientItem = (props) => {
    const { image, price, name } = props.data
    const dispatch = useDispatch();

    const [isVisible, setVisible] = useState(false)

    function handleModal() {

        if (isVisible) {
            dispatch({ type: DELETE_CURRENT_ITEM })
            console.log('CLOSE')
        } else {
            dispatch(setCurrentItem(props.data))
            console.log('OPEN')
        }

        setVisible(() => {
            return !isVisible
        })
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
            {isVisible && <IngredientDetails data={props.data} overlayHandler={handleModal} />}
        </>
    );
};

IngredientItem.propTypes = {
    data: dataItemPropTypes
}


export default IngredientItem;
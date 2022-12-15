import React from 'react';
import PropTypes from 'prop-types';
import ConstructorItemStyle from './constructor-item.module.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorItem = (props) => {
    const { type, isLocked } = props
    const { image, price, name } = props.data
    const isMargin = (type !== 'top' && type !== 'bottom')
    return (
        <li className={`${ConstructorItemStyle.item} ${!isMargin ? 'ml-8' : ''}`}>
            {
                (isMargin ? <DragIcon type="primary" /> : '')
            }
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                text={name}
                price={price}
                thumbnail={image}
            />
        </li>
    );
};

ConstructorItem.propTypes = {
    type: PropTypes.string,
    isLocked: PropTypes.bool,
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

export default ConstructorItem;
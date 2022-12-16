import React from 'react';
import PropTypes from 'prop-types';
import ConstructorItemStyle from './constructor-item.module.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataItemPropTypes } from '../../utils/constants';

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
    data: dataItemPropTypes
}

export default ConstructorItem;
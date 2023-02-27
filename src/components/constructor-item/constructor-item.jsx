import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ConstructorItemStyle from './constructor-item.module.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataItemPropTypes } from '../../utils/constants';
import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { DELETE_ITEM } from '../../services/actions/ingredients'

const ConstructorItem = (props) => {
    const { type, isLocked, swapIngred } = props
    const { image, price } = props.data
    let { name } = props.data
    const isMargin = (type !== 'top' && type !== 'bottom')

    if (type === 'top') {
        name = name + ' (верх)'
    } else if (type === 'bottom') {
        name = name + ' (низ)'
    }

    const dispatch = useDispatch()
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "ingredListElement",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        drop(item, monitor) {
            if (!ref.current) {
                return
            }
            if(item.type === 'bun' || props.data.type === 'bun') {
                return
            }
            const dragIndex = item.id
            const hoverIndex = props.data.id
            if (dragIndex === hoverIndex) {
                return
            }
            
            // const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // console.log(hoverBoundingRect)
            // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // console.log(hoverMiddleY)
            // const clientOffset = monitor.getClientOffset()
            // console.log(clientOffset)
            // const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // console.log(hoverClientY)
            // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            //     return
            // }

            // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            //     return
            // }
            swapIngred(item, props.data)
            // console.log('SWAP')
            console.log(dragIndex)
            console.log(hoverIndex)
            // item.id = hoverIndex
            // console.log(ref.current)
            // console.log(item)
            // console.log(props.data)
            // console.log(monitor)
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: "ingredListElement",
        item: () => {
            return  props.data
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    const handleDelete = () => {
        dispatch({
            type: DELETE_ITEM,
            id: props.data.id
        })
    }

    return (
        <li ref={ref} className={`${ConstructorItemStyle.item} ${!isMargin ? 'ml-8' : ''}`} style={{ opacity }}>
            {
                (isMargin ? <DragIcon type="primary"/> : '')
            }
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                text={name}
                price={price}
                thumbnail={image}
                handleClose={handleDelete}
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
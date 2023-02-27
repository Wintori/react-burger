import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ingredientsListStyles from './ingredients-list.module.scss';
import ConstructorItem from '../constructor-item/constructor-item';
import { dataItemPropTypes, dataPropTypes } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { swapIngredients } from '../../services/actions/ingredients'



const IngredientsList = (props) => {
    const dispatch = useDispatch()

    const ingredList = useSelector(store => store.ingredientsReducer.ingredList)

    const moveIngredient = useCallback((dragItem, hoverItem) => {
        const dragIndex = ingredList.indexOf(dragItem)
        const hoverIndex = ingredList.indexOf(hoverItem)
        if (dragItem.id && dragItem.type !== 'bun') {
            const newArray = [...ingredList]
            newArray.splice(dragIndex, 1)
            newArray.splice(hoverIndex, 0, dragItem)
            console.log(newArray)
            dispatch(swapIngredients(newArray))
            
        } else {
            console.log('Что-то пошло не так...')
        }
    }, [props.ingredients, dispatch])

    return (
        <ul className={ingredientsListStyles.list}>
            {
                props.bun && <ConstructorItem data={props.bun} key={props.bun.id} type={'top'} isLocked={true} swapIngred={moveIngredient} />
            }
            {
                props.ingredients.map((item) => {
                    return (
                        item && <ConstructorItem data={item} key={item.id} swapIngred={moveIngredient} />
                    );
                })
            }
            {
                props.bun && <ConstructorItem data={props.bun} key={0} type={'bottom'} isLocked={true} swapIngred={moveIngredient} />
            }
        </ul>
    );
}

// IngredientsList.propTypes = {
//     bun: dataItemPropTypes,
//     ingredients: dataPropTypes
// }

export default IngredientsList;
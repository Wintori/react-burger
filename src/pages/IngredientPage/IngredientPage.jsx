import React, { useEffect } from 'react';
import Styles from './IngredientPage.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getItemsRequest } from '../../services/actions/ingredients';


const IngredientPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const data = useSelector(store => store.ingredientsReducer.items);
    const currentIngregient = data?.find(elem => elem._id === id);

    useEffect(() => {
        dispatch(getItemsRequest())
    }, [])



    return (
        <div className={Styles.content}>
            <img className='mb-4' src={currentIngregient.image_large} alt={currentIngregient.name}></img>

            <p className="text text_type_main-medium mb-8">{currentIngregient.name}</p>
            <div className={`${Styles.footer} pb-15`}>
                <div className={Styles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{currentIngregient.calories}</p>
                </div>
                <div className={Styles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{currentIngregient.proteins}</p>
                </div>
                <div className={Styles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{currentIngregient.fat}</p>
                </div>
                <div className={Styles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{currentIngregient.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
};

export default IngredientPage;
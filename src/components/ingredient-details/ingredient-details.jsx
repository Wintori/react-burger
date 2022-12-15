import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetailsStyles from './ingredient-details.module.scss';

const IngredientDetails = (props) => {


    const { onClose } = props
    const { image_large, name, calories, proteins, fat, carbohydrates } = props.data;

    return (

        <Modal overlayHandler={props.overlayHandler}>
            <div className={`${IngredientDetailsStyles.header} pl-10 pr-10 pt-10`}>
                <p className="text text_type_main-large">Детали ингредиента</p>
                <button className={`${IngredientDetailsStyles.button}`} type='button' onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
            </div>
            <img className='mb-4' src={image_large} alt={name}></img>

            <p className="text text_type_main-medium mb-8">{name}</p>
            <div className={`${IngredientDetailsStyles.footer} pb-15`}>
                <div className={IngredientDetailsStyles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{calories}</p>
                </div>
                <div className={IngredientDetailsStyles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
                </div>
                <div className={IngredientDetailsStyles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{fat}</p>
                </div>
                <div className={IngredientDetailsStyles.item}>
                    <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </div>
            </div>

        </Modal>
    );
}

IngredientDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
    overlayHandler: PropTypes.func.isRequired,
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

export default IngredientDetails;
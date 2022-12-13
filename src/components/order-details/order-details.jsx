import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetailsStyles from './order-details.module.scss';
import Done from '../../images/done.svg'


const modalRoot = document.getElementById("react-modals");
const OrderDetails = (props) => {
    const { onClose } = props

    return ReactDOM.createPortal(
        (
            <Modal overlayHandler={props.overlayHandler}>
                <button className={`${OrderDetailsStyles.button} mt-15 mr-10`} type='button' onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>

                <p className={`text text_type_digits-large mb-8 pt-30 ${OrderDetailsStyles.number}`}>034536</p>
                <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                <img className='mb-15' src={Done} alt='Ready'></img>
                <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive pb-30">Дождитесь готовности на орбитальной станции</p>
            </Modal>
        ),
        modalRoot
    );
}

export default OrderDetails;
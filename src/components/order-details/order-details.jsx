import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import OrderDetailsStyles from './order-details.module.scss';
import Done from '../../images/done.svg'
import { BurgerContext } from '../../services/index';

const OrderDetails = (props) => {
    const { onClose } = props
    const { order } = useContext(BurgerContext)



    return (
        <Modal overlayHandler={onClose}>
            <p className={`text text_type_digits-large mb-8 pt-4 ${OrderDetailsStyles.number}`}>{order}</p>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img className='mb-15' src={Done} alt='Ready'></img>
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive pb-30">Дождитесь готовности на орбитальной станции</p>
        </Modal>
    );
}

OrderDetails.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default OrderDetails;
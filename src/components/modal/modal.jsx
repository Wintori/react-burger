import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ModalStyles from './modal.module.scss'


const Modal = (props) =>
(
    <ModalOverlay overlayHandler={props.overlayHandler}>
        <div className={`${ModalStyles.popup}`}>
            {props.children}
        </div>
    </ModalOverlay>
);

Modal.propTypes = {
    overlayHandler: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
}

export default Modal
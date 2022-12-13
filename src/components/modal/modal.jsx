import React from 'react';
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


export default Modal
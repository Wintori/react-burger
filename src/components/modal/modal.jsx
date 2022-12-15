import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ModalStyles from './modal.module.scss'

const modalRoot = document.getElementById("react-modals");
const Modal = (props) => {
    return ReactDOM.createPortal(
        (
            <ModalOverlay overlayHandler={props.overlayHandler}>
                <div className={`${ModalStyles.popup}`}>
                    {props.children}
                </div>
            </ModalOverlay>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    overlayHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Modal
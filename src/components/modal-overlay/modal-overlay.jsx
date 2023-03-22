import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlayStyles from './modal-overlay.module.scss'

const ModalOverlay = (props) => {
    return (
        <section className={ModalOverlayStyles.overlay} onClick={evt => (evt.currentTarget === evt.target) && props.overlayHandler()}>
            {props.children}
        </section>
    );
}

ModalOverlay.propTypes = {
    overlayHandler: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default ModalOverlay
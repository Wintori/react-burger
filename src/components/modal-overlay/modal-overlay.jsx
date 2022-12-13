import React from 'react';
import ModalOverlayStyles from './modal-overlay.module.scss'

const ModalOverlay = (props) => {
    return (
        <section className={ModalOverlayStyles.overlay} style={{ visibility: 'visible', opacity: '1' }} onClick={evt => (evt.currentTarget === evt.target) && props.overlayHandler()}>
            {props.children}
        </section>
    );
}

export default ModalOverlay
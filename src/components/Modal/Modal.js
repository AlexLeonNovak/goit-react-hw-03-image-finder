import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from "prop-types";

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className={styles.Modal__backdrop} onClick={this.handleBackdropClick}>
                <div className={styles.Modal__content}>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

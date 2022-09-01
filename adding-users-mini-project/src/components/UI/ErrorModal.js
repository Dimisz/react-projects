import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';
import React from 'react';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onAcknowledgeError}></div>;
};

const ModalOverlay = props => {
    return (<Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onAcknowledgeError}>Okay</Button>
        </footer>
    </Card>);
}


const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onAcknowledgeError={props.onAcknowledgeError}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onAcknowledgeError={props.onAcknowledgeError}
                                                title={props.title}
                                                message={props.message}/>, 
                document.getElementById('overlay-root')
                )
            }

        </React.Fragment>
    );
}

export default ErrorModal;
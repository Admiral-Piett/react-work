import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={ props.handleClearSelectedOptions }
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal-content'
    >
        <h3 className='modal-header'>Selected Option</h3>
        {props.selectedOption && <p className='modal-option'>{ props.selectedOption }</p>}
        <button className='button' onClick={ props.handleClearSelectedOptions }>Okay</button>
    </Modal>
);

export default OptionModal;
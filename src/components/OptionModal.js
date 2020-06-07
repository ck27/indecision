import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => {
    return (
        <ReactModal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={400}
            className="modal"
        >
            <div className="container">
                <h3 className="modal__title">
                    SELECTED OPTION
                </h3>
                {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
                <button className="button" onClick={props.handleClearSelectedOption}>Okay!</button>
            </div>
        </ReactModal>
    );
};

export default OptionModal;
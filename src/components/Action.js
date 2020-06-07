import React from "react";

/* Explicit Return */
const Action = (props) => {

    return (
        <div>
            <p>{props.hasOptions}</p>
            <button 
                className="big-button"
                onClick={props.handleQuery}
                disabled={!props.hasOptions} 
            >
                What should I do? 
            </button>
        </div>
    );
}

export default Action;
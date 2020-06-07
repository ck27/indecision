import React from "react";

const Option = (props) => {
    return (
        <div className="option">
            <div className="option--text">
                {props.optionId}.{props.name}
            </div>
            <div>
                <button className="button button--link" onClick={props.deleteOption}>REMOVE</button>
            </div>
        </div>
    );
}

export default Option;
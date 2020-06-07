import React from "react";
import Option from "./Option";

const Options = (props) => {
    let i = 0;
    console.log(props);
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header-title">
                    { props.options.length > 0 ? `You have ${props.options.length} options` : `No options`}
                </h3>
                { props.options.length > 0 ? <button className="button button--link" onClick={props.handleDeleteOptions} >REMOVE ALL</button> : ``}
                
            </div>
            { props.options.length > 0 ? "" : <div className="widget-header-message"><p>Please add an option to get started</p></div> }

            <ul>
            {
                props.options.map( (option, index) => {
                    return (
                        <Option 
                            key={index+1} 
                            optionId={index+1}
                            name={option}
                            count={index+1}
                            deleteOption={ (e) => props.deleteOption(option) }
                                
                        />);
                })
            }
            </ul>
        </div>
    );
    
}

export default Options;
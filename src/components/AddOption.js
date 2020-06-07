import React from "react";
export default class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.addHandler = this.addHandler.bind(this);

        this.state = {
            error : undefined
        };
    }

    addHandler(e) {
        e.preventDefault();
        let form = e.target.elements;
        let newEntry = form.option.value.trim();
        console.log(newEntry);

        const error = this.props.handleAddOption(newEntry);

        this.setState(() => ({ error }));

        if(!error) {
            form.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-err">{this.state.error}</p> }
                <form className="add-option" onSubmit={this.addHandler}>
                    <input className="add-option-input" type="text" name="option"/>
                    <button type="submit">ADD</button>
                </form>
            </div>
        );
    }
}
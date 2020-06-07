import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props);
    //     // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     // this.handleQuery = this.handleQuery.bind(this);
    //     // this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.deleteOption = this.deleteOption.bind(this);

    //     this.state = {
    //         options : props.options
    //     };
    // }

    handleDeleteOptions = () => {
        console.log("handleDeleteOptions()");
        this.setState( () => ({ options : [] }));
        
    };

    handleAddOption = (entry) => {
        if(!entry) {
            return "Please enter a valid option.";
        } else if(this.state.options.indexOf(entry) > -1) {
            return "This option already exists.";
        }
        this.setState( (prevState) => {
            return {
                options : prevState.options.concat([entry])
            };
        });
    };

    handleQuery = () => {
        let choice = Math.floor(Math.random() * this.state.options.length);
        // alert(this.state.options[choice]);
        this.setState( () => {
            return {
                selectedOption : this.state.options[choice]
            };
        }); 
    };

    handleClearSelectedOption = () => {
        this.deleteOption(this.state.selectedOption);
        this.setState( () => {
            return {
                selectedOption : undefined
            };
        });
    };

    deleteOption = (optionToRemove) => {
        this.setState( (prevState) => ({ options : prevState.options.filter( (option) => option !== optionToRemove)}));
    };

    render() {
        const subtitle = "Put your life in the hands of a computer.";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={ this.state.options.length > 0 } 
                        handleQuery={this.handleQuery}
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        deleteOption={this.deleteOption} 
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        );
    }

    /**
     * Lifecycle methods
     */
    componentDidMount() {
        try {
            const optionsString = localStorage.getItem("options");
            const options = JSON.parse(optionsString);
            
            if(options) {
                this.setState(() => ({options}));
            }
        } catch(err) {
            console.log("Noting stored yet");
        }
    }

    componentDidUpdate(prevState, prevProps) {
        if(prevState.options.length != this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options))
        }
    }

    componentWillUnmount() {
        console.log("Destroying");
    }
}

export default IndecisionApp;
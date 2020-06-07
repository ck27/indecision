class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);

        this.state = {
            options : props.options
        };
    }

    handleDeleteOptions () {
        console.log("handleDeleteOptions()");
        this.setState( () => ({ options : [] }));
        
    }

    handleAddOption(entry) {
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
    }

    handleQuery() {
        let choice = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[choice]);   
    }

    deleteOption(optionToRemove) {
        this.setState( (prevState) => ({ options : prevState.options.filter( (option) => option !== optionToRemove)}));
    }

    render() {
        const subtitle = "Put your life in the hands of a computer.";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={ this.state.options.length > 0 } 
                    handleQuery={this.handleQuery}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    deleteOption={this.deleteOption} 
                />
                <AddOption handleAddOption={this.handleAddOption}/>
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


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title : "INDECISION"
}

const Action = (props) => {

    return (
        <div>
            <p>{props.hasOptions}</p>
            <button 
                onClick={props.handleQuery}
                disabled={!props.hasOptions} 
            >
                What should I do? 
            </button>
        </div>
    );
}

const Options = (props) => {
    let i = 0;
    console.log(props);
    return (
        <div>
            <p>
                { props.options.length > 0 ? `You have ${props.options.length} options` : `No options`}
            </p>
            <p>
                { props.options.length > 0 ? <button onClick={props.handleDeleteOptions} >REMOVE ALL</button> : ``}
            </p>
            <ul>
            {
                props.options.map( (option) => {
                    i = i+1;
                    return (
                        <Option 
                            key={i} 
                            optionId={i}
                            name={option}
                            deleteOption={ (e) => props.deleteOption(option) }
                                
                        />);
                })
            }
            </ul>
        </div>
    );
    
}

const Option = (props) => {
    return (
        <li>
            <div>
                <div>
                    {props.optionId + " -> " + props.name}
                </div>
                <div>
                    <button onClick={props.deleteOption}>DONE</button>
                </div>
            </div>
        </li>
    );
}

class AddOption extends React.Component {

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
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.addHandler}>
                    <input type="text" name="option"/>
                    <button type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options : ["Java" , "Unit Testing", "AWS" , "React"]
// }

ReactDOM.render(<IndecisionApp options={["GoT","Friends","Money Heist"]}/>, document.getElementById("app"));
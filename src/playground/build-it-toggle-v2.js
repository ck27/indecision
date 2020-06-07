class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDetails = this.toggleDetails.bind(this);

        this.state = {
            "show" : false,
            "buttonText" : "Show"
        };
    }
    
    toggleDetails() {
        console.log("toggle");

        this.setState((prevState) => {
            let visibility = !prevState.show;
            return {
                "show": visibility,
                "buttonText" : visibility ? "Hide" : "Show"
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility</h1>
            <button onClick={this.toggleDetails}>{this.state.buttonText}</button>
            {
                this.state.show ? <p>here goes some content for which you can toggle the Visibility!</p> : ""
            }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

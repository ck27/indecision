class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count : 0
        };
    }

    handleIncrement() {
        console.log("handleIncrement");
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        });
    }

    handleDecrement() {
        console.log("handleDecrement");
        this.setState((prevState) => {
            return {
                count : prevState.count -1
            }
        });
    }

    handleReset() {
        console.log("handleReset");
        this.setState(() => {
            return {
                count : 0
            }
        });
    }
    render() {
        console.log("Counter App");
        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>
                <div>
                    <button onClick={this.handleDecrement}>-1</button>
                    <button onClick={this.handleReset}>RESET</button>
                    <button onClick={this.handleIncrement}>+1</button>
                </div>
            </div>
        );

    }

    componentDidMount() {
        console.log("componentDidMount");
        // try{
        //     console.log(!isNaN(parseInt(localStorage.getItem('count'),10)) + " " + localStorage.getItem('count'));
        //     if( !isNaN(parseInt(localStorage.getItem('count'),10)) ) {
        //         console.log("setting : " + count);
        //         this.setState((prevState) =>  {
        //             prevState.count = count;
        //             return prevState;
        //         });
        //     } else {
        //         console.log('HERE!!!!!!!');
        //     }
        // } catch(err) {
        //     // Nothing saved
        // }

        const countStr = localStorage.getItem('count');
        const count = parseInt(countStr,10);
        if(!isNaN(count)) {
            this.setState(() => ({ count }) );
        }
    }

    componentDidUpdate(prevState,prevProps) {
        console.log("componentDidUpdate");
        if(prevState.count !== this.state.count) {
            console.log(prevState);
            console.log(prevState.count + " ->   " +this.state.count);
            localStorage.setItem("count", this.state.count);
        }

    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
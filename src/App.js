import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("I am  the constructor and  I will be the first to run.");
        this.state = {
            day: 1,
            congratulate: "",
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log(nextState.day);
        if (nextState.day > 5) {
            return false;
        } else {
            return true;
        }
    }

    doChallenge = () => {
        this.setState({
            day: this.state.day + 1,
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.day === 4) {
            this.setState({
                congratulate: "Congratulations,Challenge has been completed",
            });
        }
        console.log(prevState, prevProps);
    }

    render() {
        return (
            <div className="App">
                <h1>React Component Life Cycle</h1>
                <h1>Calling API</h1>
                <button onClick={this.doChallenge}>Do Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
            </div>
        );
    }
}
export default App;

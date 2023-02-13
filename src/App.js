import React from "react";
const stylesP = {
    display: "block",
    position: "absolute",
    width: "250px",
    padding: "20px",
    backgroundColor: "blue",
    fontWeight: "900",
    fontSize: "20px",
};
const stylesDiv = {
    display: "block",
    position: "relative",
    width: "1000px",
    height: "1000px",
    border: "1px solid black",
    backgroundColor: "lightgray",
    margin: "auto",
};

class App extends React.Component {
    state = {
        count: 0,
        firstName: "",
        message: "",
        key: "",
    };
    style = {
        left: 385,
        top: 475,
    };
    handleClick = (e) => {
        // e gives an event object
        // check the value of e using console.log(e)
        this.setState({
            message: "Welcome to the world of events",
        });
    };
    // triggered whenever the mouse moves
    handleMouseMove = (e) => {
        this.setState({ message: "mouse is moving" });
    };
    // to get value when an input field changes a value
    handleChange = (e) => {
        this.setState({
            firstName: e.target.value,
            message: e.target.value,
        });
    };

    // to get keyboard key code when an input field is pressed
    // it works with input and textarea
    handleKeyPress = (e) => {
        this.setState({
            message:
                `${e.target.value} has been pressed and the keycode is` +
                e.charCode,
        });
    };
    // Blurring happens when a mouse leave an input field
    handleBlur = (e) => {
        this.setState({ message: "Input field has been blurred" });
    };
    // This event triggers during a text copy
    handleCopy = (e) => {
        this.setState({
            message:
                "Using 30 Days Of React for commercial purpose is not allowed",
        });
    };
    handleSubmit = (e) => {
        e.prevent.default();

        this.setState({
            message: "Form submitted",
        });
    };
    handleMouseMove1 = (e) => {
        this.setState({
            message: `x: ${e.clientX} y: ${e.clientY}`,
        });
    };
    handleMouseEnter = (e) => {};
    randomCoordinates = () => {
        let randomNumX = Math.floor(Math.random() * 750);
        let randomNumY = Math.floor(Math.random() * 930);
        this.style = {
            left: randomNumX,
            top: randomNumY,
        };

        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.style.left, this.style.top, this.state.count);
    };
    render() {
        return (
            <div style={stylesDiv}>
                <p className="stylesP" style={this.style} onMouseEnter={this.randomCoordinates}>
                    30 DAYS OF REACT
                </p>
            </div>
        );
    }
}

export default App;

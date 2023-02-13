import React from "react";

class App extends React.Component {
    state = {
        firstName: "",
        message: "",
        key: "",
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
      console.log(123);
        e.prevent.default();
        
        this.setState({
            message: "Form submitted",
        });
    };
    handleMouseMove1 =(e)=>{
      this.setState({
        message: `x: ${e.clientX} y: ${e.clientY}`
      })
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove1}>
                <h1>Welcome to the World of Events</h1>

                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseMove={this.handleMouseMove}>
                    Move mouse on me
                </button>
                <p onCopy={this.handleCopy}>
                    Check copy right permission by copying this text
                </p>

                <p>{this.state.message}</p>
                <label htmlFor=""> Test for onKeyPress Event: </label>
                <input type="text" onKeyDown={this.handleKeyPress} />
                <br />

                <label htmlFor=""> Test for onBlur Event: </label>
                <input type="text" onBlur={this.handleBlur} />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            onChange={this.handleChange}
                            name="firstName"
                            value={this.state.value}
                        />
                    </div>
                    <div>
                        <label htmlFor="onInput">onInput </label>
                        <input
                            onInput={this.handleChange}
                            name="onInput"
                            value={this.state.value}
                        />
                    </div>
                    <div>
                        <label htmlFor="onBlur">onBlur </label>
                        <input
                            onInput={this.handleChange}
                            name="onBlur"
                            value={this.state.value}
                        />
                    </div>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;

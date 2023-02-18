import React from "react";

const Input = ({ onChange, text, style }) => {
    return (
        <div>
            <label htmlFor={text}>{text}</label>
            <input
                name={text}
                onChange={onChange}
                style={style}
                placeholder={text}
            />
        </div>
    );
};

const inputWithStyles = (CompParam, name = "default") => {
    const colors = [
        {
            name: "react",
            backgroundColor: "#61dbfb",
            color: "white",
        },
        {
            name: "success",
            backgroundColor: "#4CAF50",
            color: "#1f7fff",
        },
        {
            name: "info",
            backgroundColor: "#2196F3",
            color: "black",
        },
        {
            name: "warning",
            backgroundColor: "#ff9800",
            color: "brown",
        },
        {
            name: "danger",
            backgroundColor: "#f44336",
            color: "#f7f444",
        },
    ];
    const { backgroundColor, color } = colors.find((c) => c.name === name);

    const inputStyles = {
        backgroundColor,
        padding: "10px 45px",
        border: "none",
        borderRadius: 3,
        margin: 3,
        cursor: "pointer",
        fontSize: "1.25rem",
        color,
    };
    return (props) => {
        return <CompParam {...props} style={inputStyles} />;
    };
};

const SucInput = inputWithStyles(Input, "success");
const ReactInput = inputWithStyles(Input, "react");
const InfoInput = inputWithStyles(Input, "info");
const WarningInput = inputWithStyles(Input, "warning");
const DangerInput = inputWithStyles(Input, "danger");

class App extends React.Component {
    state = {
        text: 1,
    };
    render() {
        return (
            <div>
                <div className="App">
                    <SucInput
                        text={this.state.text}
                        onChange={() => console.log(1)}
                    />
                    <ReactInput
                        text={this.state.text + 1}
                        onChange={() => console.log(1)}
                    />
                    <InfoInput
                        text={this.state.text + 2}
                        onChange={() => console.log(1)}
                    />
                    <WarningInput
                        text={this.state.text + 3}
                        onChange={() => console.log(1)}
                    />
                    <DangerInput
                        text={this.state.text + 4}
                        onChange={() => console.log(1)}
                    />
                </div>
            </div>
        );
    }
}
export default App;

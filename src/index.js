import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const hexaColor = () => {
    const str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
};


const Colors = () => {
    let arr= [];
    for (let i = 0; i < 32; i++) {
        arr.push(hexaColor());
    }
    const color1 = arr.map((elem) => (
        <li key={elem} className="li-colors" style={{ backgroundColor: elem }}>
            {elem}
        </li>
    ));
    return <ul className="numbers-grid">{color1}</ul>;
};

const App = () => {
    const data = {
        title: "30 Days Of React",
        subtitle: "Hexadencimal Colors",
    };

    return (
        <div className="container6">
            <div style={{ textAlign: "center" }}>
                <h3>{data.title}</h3>
                <h4 style={{ margin: "15px 0" }}>{data.subtitle}</h4>
            </div>

            <Colors />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

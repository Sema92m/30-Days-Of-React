import React from "react";
import ReactDOM from "react-dom/client";
const Numbers = ({ numbers }) => {
    const style1 = {
        backgroundColor: numbers.key === 1 ? "lightgray" : "white",
    };
    const numList = numbers.map((num) => (
        <li
            key={num}
            className={num.key % 2 !== 0 ? "numbers-li" : "numbers-li-red"}
        >
            {num}
        </li>
    ));

    return numList;
};

const App = () => {
    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    const data = {
        title: "30 Days Of React",
        subtitle: "Number Generator",
    };

    return (
        <div className="container6">
            <div style={{ textAlign: "center" }}>
                <h3>{data.title}</h3>
                <h4 style={{ margin: "15px 0" }}>{data.subtitle}</h4>
            </div>

            <ul className="numbers-grid">
                <Numbers numbers={numbers} />
            </ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

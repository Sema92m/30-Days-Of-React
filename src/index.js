import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const Numbers = ({ numbers }) => {
    const numList = numbers.map((num, index) => {
        let className;
        if (isPrime(num)) {
            className = "numbers-li-red";
        } else if (index % 2 !== 0) {
            className = "numbers-li-yellow";
        } else {
            className = "numbers-li";
        }
        return (
            <li key={num} className={className}>
                {num}
            </li>
        );
    });
    return <ul className="numbers-grid">{numList}</ul>
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
            <Numbers numbers={numbers} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

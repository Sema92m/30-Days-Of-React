import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const hexaColor = () => {
//     const str = "0123456789abcdef";
//     let hexa = "#";
//     let index;
//     for (let i = 0; i < 6; i++) {
//         index = Math.floor(Math.random() * str.length);
//         hexa += str[index];
//     }
//     return hexa;
// };

// const Colors = () => {
//     let arr= [];
//     for (let i = 0; i < 32; i++) {
//         arr.push(hexaColor());
//     }
//     const color1 = arr.map((elem) => (
//         <li key={elem} className="li-colors" style={{ backgroundColor: elem }}>
//             {elem}
//         </li>
//     ));
//     return <ul className="numbers-grid">{color1}</ul>;
// };

const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "USA", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian", population: 146599183 },
    { country: "Japan", population: 126960000 },
];
function orangeLineWidth(elem) {
    return (elem.population * 100) / 7693165599 + "%";
}

const Countries = () => {
    const country = tenHighestPopulation.map((elem) => (
        <li key={elem.country} className="li-countries">
            <div className="country-name">{elem.country}</div>
            <div
                className="country-orangeLine"
                style={{ width: orangeLineWidth(elem) }}
            ></div>
            <div className="country-population">
                {elem.population.toLocaleString("en-US")}
            </div>
        </li>
    ));
    return <ul className="countries-container">{country}</ul>;
};
const App = () => {
    const data = {
        title: "30 Days Of React",
        subtitle: "World population",
        titleSmall: "Ten most populated countries",
    };

    return (
        <div className="container6">
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontWeight: "900" }}>{data.title}</h1>
                <h3 style={{ margin: "10px 0" }}>{data.subtitle}</h3>
                <h6 style={{ marginBottom: "15px" }}>{data.titleSmall}</h6>
            </div>
            <Countries />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

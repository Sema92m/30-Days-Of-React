import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import myImage from "./images/img1.png";
import elephant from "./images/elephant.png";
import gorilla from "./images/gorilla.png";
import home from "./images/home.png";
import iceCreamant from "./images/ice_cream.png";
// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
    firstName: "Semi",
    lastName: "Briczkowski",
};
const date = "Oct 2, 2020";

// JSX element, header
const header = (
    <header>
        <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
    <p>
        {" "}
        {author.firstName} {author.lastName} is {age} years old
    </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const user = (
    <div>
        <img src={myImage} alt="my" />
    </div>
);
const imgs = (
    <div className="images-wrapper">
        <img src={elephant} alt="elephant" />
        <img src={gorilla} alt="gorilla" />
        <img src={home} alt="home" />
        <img src={iceCreamant} alt="iceCreamant" />
    </div>
);
// JSX element, main
const main = (
    <main>
        <div className="main-wrapper">
            <p>
                Prerequisite to get started{" "}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
            {user}
            {imgs}
        </div>
    </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
    <footer>
        <div className="footer-wrapper">
            <p>{copyRight}</p>
        </div>
    </footer>
);

// JSX element, app
const app = (
    <div className="app">
        {header}
        {main}
        {footer}
    </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);

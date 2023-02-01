import React from "react";
import ReactDOM from "react-dom/client";
// import myImg from "./images/img1.png";
import elephant from "./images/elephant.png";
import gorilla from "./images/gorilla.png";
import home from "./images/home.png";
import ice from "./images/ice_cream.png";

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    height: "200px",
    margin: "20px auto",
    background: "lightblue",
    borderRadius: "10px",
};

const inputStyles = {
    width: "140px",
    padding: "7px 5px ",
    margin: "10px",
    fontSize: "10px",
    borderRadius: "5px",
    border: "none",
};
const buttonStyles = {
    width: "150px",
    padding: "5px 10px",
    background: "orangered",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: 'pointer',
};

const Button = ({text, style}) => (
  <button style={style}>{text}</button>
)

const SubscribeCard = ({ data: { title, subscribe,placeholderFN,placeholderLN,placeholderEmail } }) => {
    return (
        <div style={cardStyle}>
            <h3>{subscribe.toUpperCase()}</h3>
            <h4>{title}</h4>
            <div>
                <input style={inputStyles} placeholder={placeholderFN}></input>
                <input style={inputStyles} placeholder={placeholderLN}></input>
                <input style={inputStyles} placeholder={placeholderEmail}></input>
            </div>
            <Button text = 'Subscribe' style={buttonStyles}></Button>
            {/* <button style={buttonStyles}>{subscribe}</button> */}
        </div>
    );
};

const App = () => {
  const data = {
    subscribe: "Subscribe",
    title: "Sing up with your address to receive news and updates.",
    placeholderFN: "First Name",
    placeholderLN: "Last Name",
    placeholderEmail: "Email",
    
};
    return (
        <div className="app">
            <SubscribeCard data={data} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

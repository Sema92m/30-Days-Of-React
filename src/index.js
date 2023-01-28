import React from "react";
import ReactDOM from "react-dom";
import myImg from "./images/img1.png";
import elephant from "./images/elephant.png";
import gorilla from "./images/gorilla.png";
import home from "./images/home.png";
import ice from "./images/ice_cream.png";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
};
const date = "Oct 3, 2020";
const Header = () => (
    <header>
        <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Student: {author.firstName} {author.lastName}
            </p>
            <strong>{date}</strong>
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
const currentYear = 2020;
const age = currentYear - yearBorn;
const personAge = (
    <p>
        {" "}
        {author.firstName} {author.lastName} is {age} years old
    </p>
);
const UserCard = () => (
    <div className="user-card">
        <img src={myImg} alt="my" />
        <h2>
            Author:{author.firstName} {author.lastName}
        </h2>
    </div>
);

const techs = ["HTML", "CSS", "JS"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

const Main = () => (
    <main>
        <div className="main-wrapper">
            <div>
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
            </div>
            <UserCard />
        </div>
    </main>
);

const copyRight = "2020";
const Footer = () => (
    <footer>
        <div className="footer-wrapper">
            <p>Copyright & copy {copyRight}</p>
        </div>
    </footer>
);

const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
    }
    return "#" + color;
};

// const HexaColor = () => <div>{hexaColor()}</div>;

// const buttonStyles = {
//     padding: "10px 20px",
//     background: "rgb(0, 255, 0",
//     border: "none",
//     borderRadius: 5,
//     cursor: "pointer",
// };

// const Button = () => <button style={buttonStyles}> action </button>;
// const Input1 = () => <input></input>;

// const Alert = () => (
//     <div>
//         <p>AllClear</p>
//     </div>
// );
// const cardsStyles = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
// };
// const Card = () => (
//     <div style={cardsStyles}>
//         <h3>Technologies</h3>
//         <div>
//             <img src={elephant} alt="el" />
//             <img src={gorilla} alt="gorilla" />
//             <img src={home} alt="home" />
//             <img src={ice} alt="ice" />
//         </div>
//     </div>
// );



const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '85%',
  height: '200px',
  margin: '20px auto',
  background: 'lightblue',
  borderRadius: '10px',
}

const inputStyles = {
  width: '140px',
  padding: '7px 5px ',
  margin: '10px',
  fontSize: '10px',
  borderRadius: '5px',
  border: 'none',
}
const buttonStyles ={
  width: '150px',
  padding: '5px 10px',
  background: 'orangered',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
}
const SubscribeCard = () => (
  <div style={cardStyle}>
    <h3>SUBSCRIBE</h3>
    <h4>Sing up with your address to receive news and updates.</h4>
    <div>
      <input style={inputStyles} placeholder="First Name"></input>
      <input style={inputStyles} placeholder="Last Name"></input>
      <input style={inputStyles} placeholder="Email"></input>
    </div>
    <button style={buttonStyles}>Subscribe</button>
  </div>
)





const App = () => (
    <div className="app">
        {/* <Header />
      <Main />
      <Footer /> */}
        <SubscribeCard />
        {/* <Button /> */}
        {/* <Input1 /> */}
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

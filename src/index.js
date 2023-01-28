import React from "react";
import ReactDOM from "react-dom";




//Exercise 1
// import elephant from "./images/elephant.png";
// import gorilla from "./images/gorilla.png";
// import home from "./images/home.png";
// import iceCreamant from "./images/ice_cream.png";
// const title = "Front End Technologies";
// const headerh3Styles = {
//   display: 'flex',
//   justifyContent: 'center'
// }
// const headerStyles = {
//   background: 'lightgray'
// }
// const header = (
// 	<header style={headerStyles}>
// 		<div className="header-wrapper">
// 			<h3 style={headerh3Styles}>{title}</h3>
// 		</div>
// 	</header>
// )
// const main = (
// 	<main style={headerStyles}>
// 		<div className="main-wrapper">
// 		<img src={elephant} alt="elephant" />
//         <img src={gorilla} alt="gorilla" />
//         <img src={home} alt="home" />
//         <img src={iceCreamant} alt="iceCreamant" />
// 		</div>
// 	</main>
// )

// const app = (
// 	<div className="app">
// 		{header}
// 		{main}
// 	</div>
// )
// const rootElement = document.getElementById("root");
// ReactDOM.render(app, rootElement);
//Exercise 1


//Exercise2
// const title = 'SUBSCRIBE'
// const subTitle = "Sing up with your email address to recive news and updates"
// const header = (
  
//     <div className="header1">
//       <h2 className="h2">{title}</h2>
//       <h4>{subTitle}</h4>
//     </div>
  
// )

// const inputs = (
//   <div className="inputs-wrapper">
//     <label htmlFor="firstName"></label>
//     <input className="input" id="firstName" placeholder="First name"></input>
//     <label htmlFor="lastName"></label>
//     <input className="input" id="lastName" placeholder="Last Name"></input>
//     <label htmlFor="email"></label>
//     <input className="input" id="email" placeholder="Email"></input>
//   </div>
// )

// const subscribeButton = (
//   <div>
//     <button  className="subscribeButton">Subscribe</button>
//   </div>
// )

// const app = (
//   <div className="container">
//     {header}
//     {inputs}
//     {subscribeButton}
//   </div>
// )

// const rootElement = document.getElementById("root");
// ReactDOM.render(app, rootElement)
//Exercise2

// Exercise 3
import myFoto from './images/img1.png'
import checked from './images/checked.svg'
const myInfo =   {
  firstName: 'Semi',
  lastName: 'Bryczkowski',
  country: 'Poland',
  position: "Junior Developer"
}
const myImage = (
  <div className="myImage">
    <img className="my-foto"  src={myFoto} alt="my" />
  </div>
)
const myName = (
  <div className="my-info">
    <p className="my-name">{myInfo.firstName} {myInfo.lastName} 
    <img className="checked-svg" src={checked} alt="cheched" /></p>
  </div>
)
const myPosition = (
  <div className="my-position">
    <p>{myInfo.position}, {myInfo.country}</p>
  </div>

)
const skills = ['HTML','CSS','Sass','JS','React','Resux','Node','MongoDb','Python','Flask','MySQL','Docker','Git']

const skillsLI = skills.map((elem) => <li className="skills-li" key={elem}>{elem}</li>)

const skillsWrapper = (
  <div>
    <div>
      <p className="skills-header">SKILLS</p>
    </div>
    <ul className="skills-wrapper">{skillsLI}</ul>
  </div>
)



const footer = (
  <div className="footer3">
    <p className="footer-paragraph">🕑 Joined on Aug 30, 2020</p>
  </div>
)

  const app = (
    <div className="container3">
      {myImage}
      {myName}
      {myPosition}
      {skillsWrapper}
      {footer}
    </div>
  )

  const rootElement = document.querySelector('#root')
  ReactDOM.render(app, rootElement)
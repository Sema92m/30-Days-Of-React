// import React from "react";
// import ReactDOM from "react-dom/client";
// import checked from "./images/checked.svg";
// import myImg from "./images/img1.png";
// import elephant from "./images/elephant.png";
// import gorilla from "./images/gorilla.png";
// import home from "./images/home.png";
// import ice from "./images/ice_cream.png";

// // exercise 2 CARDS
// // const cardStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "space-around",
// //     alignItems: "center",
// //     width: "70%",
// //     height: "200px",
// //     margin: "20px auto",
// //     background: "lightblue",
// //     borderRadius: "10px",
// // };

// // const inputStyles = {
// //     width: "140px",
// //     padding: "7px 5px ",
// //     margin: "10px",
// //     fontSize: "10px",
// //     borderRadius: "5px",
// //     border: "none",
// // };
// // const buttonStyles = {
// //     width: "150px",
// //     padding: "5px 10px",
// //     background: "orangered",
// //     color: "white",
// //     borderRadius: "5px",
// //     border: "none",
// //     cursor: 'pointer',
// // };

// // const Button = ({text, style}) => (
// //   <button style={style}>{text}</button>
// // )

// // const SubscribeCard = ({ data: { title, subscribe,placeholderFN,placeholderLN,placeholderEmail } }) => {
// //     return (
// //         <div style={cardStyle}>
// //             <h3>{subscribe.toUpperCase()}</h3>
// //             <h4>{title}</h4>
// //             <div>
// //                 <input style={inputStyles} placeholder={placeholderFN}></input>
// //                 <input style={inputStyles} placeholder={placeholderLN}></input>
// //                 <input style={inputStyles} placeholder={placeholderEmail}></input>
// //             </div>
// //             <Button text = 'Subscribe' style={buttonStyles}></Button>
// //             {/* <button style={buttonStyles}>{subscribe}</button> */}
// //         </div>
// //     );
// // };

// // const App = () => {
// //   const data = {
// //     subscribe: "Subscribe",
// //     title: "Sing up with your address to receive news and updates.",
// //     placeholderFN: "First Name",
// //     placeholderLN: "Last Name",
// //     placeholderEmail: "Email",

// // };
// //     return (
// //         <div className="app">
// //             <SubscribeCard data={data} />
// //         </div>
// //     );
// // };
// // exercise 2 CARDS

// // exercise 3.1 COLORS

// // const paragraphStyles = {
// //     height: "100%",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     fontSize: "25px",
// //     color: "white",
// //     fontWeight: "900",
// //     letterSpacing: "2px",
// // };

// // const blockColorStyles = {
// //     width: "80%",
// //     height: "70px",
// //     margin: "5px auto",
// //     borderRadius: "5px",
// // };

// // const Block = ({ hexaColor }) => (
// //     <div style={{ ...blockColorStyles, background: hexaColor }}>
// //         <p style={paragraphStyles}>{hexaColor}</p>
// //     </div>
// // );
// // // exercise 3.1 COLORS

// // //Exercise 3.2 Skills card

// const MyData = ({ data: { firstName, lastName, exp, country } }) => (
//     <div>
//         <img className="my-foto" src={myImg} alt="myImg" />
//         <div className="my-name my-info">
//             <p>
//                 {firstName} {lastName}{" "}
//                 <img className="checked-svg" src={checked} alt="checked" />
//             </p>
//         </div>
//         <p>
//             {exp}, {country}
//         </p>
//     </div>
// );

// const techs = ["JS", "HTML", "CSS", "React", "Node", "Python", "Flask", "Git"];

// const skillsLiStyle = {
//     margin: "2px 5px",
//     padding: "5px",
//     background: "#61dbfb",
//     borderRadius: "5px",
// };

// const TechList = ({ techs }) => {
//     const techList = techs.map((tech) => (
//         <li style={skillsLiStyle} key={tech}>
//             {tech}
//         </li>
//     ));
//     return techList;
// };

// const MySkills = ({ data: { skillsTitle } }) => (
//     <div>
//         <h3 className="skills-header">{skillsTitle}</h3>
//         <ul className="skills-wrapper">
//             <TechList techs={techs} />
//         </ul>
//     </div>
// );

// const Footer = ({ data: { footerInfo } }) => (
//     <div className="footer3">
//         <p>{footerInfo}</p>
//     </div>
// );
// //Exercise 3.2-------------------------------------------

// const App = () => {
//     const techs = [
//         "JS",
//         "HTML",
//         "CSS",
//         "React",
//         "Node",
//         "Python",
//         "Flask",
//         "Git",
//     ];
//     const data = {
//         firstName: "Semion",
//         lastName: "Bryczkowski",
//         exp: "Senior Developer",
//         country: "Finland",
//         skillsTitle: "SKILLS",
//         footerInfo: "🕑 Joined on Aug 30, 2020",
//     };
//     return (
//         <div className="container3">
//             <MyData data={data} />
//             <MySkills data={data} techs={techs} />
//             <Footer data={data} />
//         </div>
//     );
// };
// // Exercise 3.2 Skills card

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// import myImg from "./images/img1.png";
// import elephant from "./images/elephant.png";
// import gorilla from "./images/gorilla.png";
// import home from "./images/home.png";
// import ice from "./images/ice_cream.png";



// const cardStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   width: '85%',
//   height: '200px',
//   margin: '20px auto',
//   background: 'lightblue',
//   borderRadius: '10px',
// }

// const inputStyles = {
//   width: '140px',
//   padding: '7px 5px ',
//   margin: '10px',
//   fontSize: '10px',
//   borderRadius: '5px',
//   border: 'none',
// }
// const buttonStyles ={
//   width: '150px',
//   padding: '5px 10px',
//   background: 'orangered',
//   color: 'white',
//   borderRadius: '5px',
//   border: 'none',
// }
// const SubscribeCard = () => (
//   <div style={cardStyle}>
//     <h3>SUBSCRIBE</h3>
//     <h4>Sing up with your address to receive news and updates.</h4>
//     <div>
//       <input style={inputStyles} placeholder="First Name"></input>
//       <input style={inputStyles} placeholder="Last Name"></input>
//       <input style={inputStyles} placeholder="Email"></input>
//     </div>
//     <button style={buttonStyles}>Subscribe</button>
//   </div>
// )





// const App = () => (
//     <div className="app">
//         {/* <Header />
//       <Main />
//       <Footer /> */}
//         <SubscribeCard />
//         {/* <Button /> */}
//         {/* <Input1 /> */}
//     </div>
// );

// //Exercise 3.1-------------------------------------------
// // const hexaColor = () => {
// //     let str = "0123456789abcdef";
// //     let color = "";
// //     for (let i = 0; i < 6; i++) {
// //         let index = Math.floor(Math.random() * str.length);
// //         color += str[index];
// //     }
// //     return "#" + color;
// // };

// // const paragraphStyles = {
// //     height: '100%',
// //     display: 'flex',
// //     alignItems: "center",
// //     justifyContent: 'center',
// //     fontSize: "25px",
// //     color: "white",
// //     fontWeight: "900",
// //     letterSpacing: "2px",
// // };

// // const Block = () => (
// //     <div style={{width: "80%",height: "70px",margin: "5px auto",borderRadius: "5px", background: hexaColor() }}>
// //         <p style={paragraphStyles}>{hexaColor()}</p>
// //     </div>
// // );
// //Exercise 3.1-------------------------------------------
// //Exercise 3.2-------------------------------------------
// const myInfo = {
//   firstName: "Semion",
//   lastName: "Bryczkowski",
//   exp: "Senior Developer",
//   country: "Finland",
// };
// const MyData = () => (
//   <div>
//       <img className="my-foto" src={myImg} alt="myImg" />
//       <div className="my-name my-info">
//           <p>{myInfo.firstName} {myInfo.lastName}  <img className="checked-svg" src={checked} alt="checked" /></p>
          
//       </div> 
//       <p>
//           {myInfo.exp}, {myInfo.country}
//       </p>
//   </div>
// );

// const skills = ["JS", "HTML", "CSS", "React", "Node", "Python", "Flask", "Git"];
// const skillsLI = skills.map((skill) => (
//   <li className="skills-li" key={skill}>
//       {skill}
//   </li>
// ));

// const MySkills = () => (
//   <div >
//       <h3 className="skills-header">SKILLS</h3>
//       <ul className="skills-wrapper">{skillsLI}</ul>
//   </div>
// );

// const Footer = () => (
//   <div className="footer3">
//       <p>🕑 Joined on Aug 30, 2020</p>
//   </div>
// );
// //Exercise 3.2-------------------------------------------

// const App = () => (
//   <div className="container3">
//       <MyData />
//       <MySkills />
//       <Footer />
//   </div>
// );
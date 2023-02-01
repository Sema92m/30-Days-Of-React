import myImg from "./images/img1.png";
import elephant from "./images/elephant.png";
import gorilla from "./images/gorilla.png";
import home from "./images/home.png";
import ice from "./images/ice_cream.png";



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
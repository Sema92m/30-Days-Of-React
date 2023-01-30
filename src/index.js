import React from "react";
import ReactDOM from "react-dom/client";
// import myImg from "./images/img1.png";
import elephant from './images/elephant.png'
import gorilla from './images/gorilla.png'
import home from './images/home.png'
import ice from './images/ice_cream.png'


const Main = ({header, images}) => (
    <main style={mainStyles}>
        <h3>{header}</h3>
        <div >
            <img style={imgStyles} src={images.elephant} alt="1" />
            <img style={imgStyles}  src={images.gorilla} alt="1" />
            <img style={imgStyles}  src={images.home} alt="1" />
            <img style={imgStyles}  src={images.ice} alt="1" />
        </div>
    </main>
)
const imgStyles = {
    width: '150px',
    height: '150px',
}
const mainStyles  = {
    width: '800px',
    height: '400px',
    margin: '0 auto',
    textAlign: 'center'
}
const App = () => {
    const header = 'Front End Technologies'
    
    const images = {elephant: elephant, gorilla: gorilla, home: home, ice: ice}
    return (
        <div className="app">
            <Main 
                header={header}
                images={images}
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

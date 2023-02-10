import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import myImg from "./images/img1.png";
import countriesData from "./countriesDAY8";

const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
);

const buttonStyles = {
    backgroundColor: "#61dbfb",
    padding: 10,
    border: "none",
    borderRadius: 5,
    margin: 3,
    cursor: "pointer",
    fontSize: 18,
    color: "white",
};

class Header extends React.Component {
    render() {
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data;

        return (
            <header style={this.props.styles}>
                <div className="header-wrapper">
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                </div>
            </header>
        );
    }
}

const Country = ({
    country: { name, capital, languages, population, flag },
}) => {
    return (
        <div className="country-card">
            <div className="country-flag">
                <img className="flag8" src={flag} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className="country-data">
                <p className="capital">Capital: {capital}</p>
                <p className="language">Languages: {languages}</p>
                <p className="population8">
                    Population: {population.toLocaleString("en-US")}
                </p>
            </div>
        </div>
    );
};

const Countries = ({ countries }) => {
    let randomIndex = Math.floor(Math.random() * countries.length);
    let randomCountryArr = countries[randomIndex];
    const countryList = (
        <Country country={randomCountryArr} key={randomIndex} />
    );
    return <div>{countryList}</div>;
};

class Main extends React.Component {
    render() {
        const { changeCountry, styles } = this.props;
        return (
            <main className="main8" style={styles}>
                <div className="main-wrapper-day8">
                    <Countries countries={countriesData} />
                    <Button
                        text="Select Country"
                        onClick={changeCountry}
                        style={buttonStyles}
                    />
                </div>
            </main>
        );
    }
}

class Footer extends React.Component {
    render() {
        const { styles } = this.props;
        return (
            <footer style={styles}>
                <div className="footer-wrapper">
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        );
    }
}

class App extends React.Component {
    state = {
        count: 0,
        styles: {
            backgroundColor: "",
            color: "",
        },
        
    };
    showDate = (time) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const month = months[time.getMonth()].slice(0, 3);
        const year = time.getFullYear();
        const date = time.getDate();
        return ` ${month} ${date}, ${year}`;
    };
    changeBackground = () => {
        this.setState((state) => {
            if (state.count === 0) {
                return {
                    styles: {
                        backgroundColor: "#082128",
                        color: "white",
                    },
                    count: state.count + 1,
                };
            } else if (state.count === 1) {
                return {
                    styles: {
                        backgroundColor: "",
                        color: "",
                    },
                    count: state.count - 1,
                };
            }
        });
    };
    changeCountry = () => {
        this.setState({ count: this.state.count });
        // The setState method updates the state and re-renders the component with the new values.
    };
    render() {
        const data = {
            welcome: "Welcome to 30 Days Of React",
            title: "Getting Started React",
            subtitle: "JavaScript Library",
            author: {
                firstName: "Asabeneh",
                lastName: "Yetayeh",
            },
            date: "Oct 7, 2020",
        };
        return (
            <div className="app">
                <Header data={data} />
                <Main changeCountry={this.changeCountry} />
                <Footer date={new Date()} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Header extends React.Component {
    render() {
        const { title, subtitle, date } = this.props.data;
        return (
            <header className="header-wrapper-day9">
                <div>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{date}</p>
                </div>
            </header>
        );
    }
}

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
    margin: "3px auto",
    cursor: "pointer",
    fontSize: 22,
    color: "white",
};

class Main extends React.Component {
    render() {
        const { handleSeason } = this.props;
        const { dayTimeName, seasonFontColor } = this.props.data;
        return (
            <main
                style={{ backgroundColor: seasonFontColor }}
                className="main-wrapper-day9"
            >
                <div style={{ marginTop: "200px" }}>
                    <Button
                        text="change season"
                        onClick={handleSeason}
                        style={buttonStyles}
                    />
                    <h2>{dayTimeName}</h2>
                </div>
            </main>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-wrapper">
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        );
    }
}
class App extends React.Component {
    state = {
        hour: '',
        seasonColor: "",
    };
    // showDate = () => {
    //   const hours = (new Date()).getHours();
    //   this.setState({
    //     hour: `${hours}`
    //   }) 
    //   return hours
    // }
    handleSeason = () => {
        this.setState({
            hour: Math.floor(Math.random() * 25),
        });
        console.log(this.state.hour);
    };

    render() {
        let dayTime;
        let seasonColor = this.state.seasonColor;

        if (this.state.hour >= 6 && this.state.hour < 12) {
            dayTime = "morning";
            seasonColor = "gray";
        }
        if (this.state.hour === 12) {
            dayTime = "noon";
            seasonColor = "red";
        }
        if (this.state.hour > 12 && this.state.hour <= 18) {
            dayTime = "afternoon";
            seasonColor = "green";
        }
        if (this.state.hour > 18 && this.state.hour < 21) {
            dayTime = "evening";
            seasonColor = "#cdf46bc5";
        }
        if (
            (this.state.hour >= 21 && this.state.hour < 24) ||
            (this.state.hour >= 0 && this.state.hour < 6)
        ) {
            dayTime = "night";
            seasonColor = "#f48d6bc5";
        }
        if (this.state.hour === 0 || this.state.hour === 24) {
            dayTime = "midnight";
            seasonColor = "#f49d9bc5";
        }

        const data = {
            title: "Change background",
            subtitle: "Click buttons!",
            date: "11-Feb-2023",
            dayTimeName: dayTime,
            seasonFontColor: seasonColor,
        };
        return (
            <div className="app">
                <Header data={data} />
                <Main
                    data={data}
                    style={{ color: { seasonColor } }}
                    handleSeason={this.handleSeason}
                />
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

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
        const { seasonName,seasonFontColor } = this.props.data;
        return (
            <main style={{backgroundColor: seasonFontColor}} className="main-wrapper-day9">
                <div style={{ marginTop: "200px" }}>
                    <Button
                        text="change season"
                        onClick={handleSeason}
                        style={buttonStyles}
                    />
                    <h2>{seasonName}</h2>
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
        season: 7,
        seasonColor: ''
    };
    handleSeason = () => {
        this.setState({
            season: Math.floor(Math.random() * 11),
            
        });
        console.log(this.state.season);
    };

    render() {
        let seasons;
        let seasonColor = this.state.seasonColor;

        if (this.state.season <= 3) {
            seasons = "winter";
            seasonColor = "gray";
        }
        if (this.state.season > 3 && this.state.season <= 6) {
            seasons = "spring";
            seasonColor = "green";
        }
        if (this.state.season > 6 && this.state.season <= 9) {
            seasons = "summer";
            seasonColor = "#cdf46bc5";
        }
        if (this.state.season > 9 && this.state.season <= 11) {
          seasons = "fall";
          seasonColor = "#f48d6bc5";
        }
        const data = {
          title: "Change background",
          subtitle: "Click buttons!",
          date: "11-Feb-2023",
          seasonName: seasons,
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

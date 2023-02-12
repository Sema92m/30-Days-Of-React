import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

class App extends React.Component {
    state = {
        count: 0,
        loggedIn: false,
        techs: ["HTML", "CSS", "JS"],
        message: "Click show time or Greet people to change me",
        styles: {
            backgroundColor: "",
            color: "",
        },
    };
    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn,
        });
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
        return `${month} ${date}, ${year}`;
    };
    handleTime = () => {
        let message = this.showDate(new Date());
        this.setState({ message });
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
        console.log(this.state.count, this.state.styles.backgroundColor);
    };
    greetPeople = () => {
        let message = "Welcome to 30 Days Of React Challenge, 2020";
        this.setState({ message });
    };

    render() {
        const data = {
            welcome: "30 Days Of React",
            title: "Getting Started React",
            subtitle: "JavaScript Library",
            author: {
                firstName: "Asabeneh",
                lastName: "Yetayeh",
            },
            date: "Oct 9, 2020",
        };
        const techs = ["HTML", "CSS", "JavaScript"];

        return (
            <div className="app">
                <Header data={data} styles={this.state.styles} />
                <Main
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    loggedIn={this.state.loggedIn}
                    handleLogin={this.handleLogin}
                    message={this.state.message}
                    changeBackground={this.changeBackground}
                    styles={this.state.styles}
                />
                <Footer date={new Date()} styles={this.state.styles} />
            </div>
        );
    }
}

export default App;

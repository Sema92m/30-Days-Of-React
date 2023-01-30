import React from "react";
import ReactDOM from "react-dom/client";

const showDate = (time) => {
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
// Header Component
const Header = ({
    data: {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
    },
}) => {
    return (
        <header>
            <div className="header-wrapper">
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    );
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
    const data = {
        welcome: "Welcome to 30 Days Of React",
        title: "Getting Started React",
        subtitle: "JavaScript Library",
        author: {
            firstName: "Asabeneh",
            lastName: "Yetayeh",
        },
        date: new Date(),
    };

    return (
        <div className="app">
            <Header data={data} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

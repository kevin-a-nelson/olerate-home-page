import React from "react";
// import olerateLogo from "./olerate-logo.png";
import "./App.css";
// import chromeLogo from "./chrome-logo2.png";

class App extends React.Component {
    componentDidMount() {
        window.location.href =
            "https://chrome.google.com/webstore/detail/olerate/dajfgijklhggppdpebfaioaehlkmlgif";
    }

    render() {
        return <div></div>;
    }
}

export default App;

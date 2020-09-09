import React from "react";
import olerateLogo from "./olerate-logo.png";
import "./App.css";
import chromeLogo from "./chrome-logo2.png";

function App() {
    return (
        <div className="App">
            <img
                class="olerate-logo"
                src={olerateLogo}
                alt="olerate-logo"
            ></img>
            <p className="title">Olerate</p>
            <p className="sub-title">
                Click on a Professor and get linked to their Rate my Professor
                Page
            </p>
            <a
                className="download-btn"
                target="_blank"
                href="https://chrome.google.com/webstore/detail/olerate/dajfgijklhggppdpebfaioaehlkmlgif?hl=en"
            >
                <div className="flex">
                    <div className="btn-left">
                        <img src={chromeLogo} className="chrome-logo"></img>
                    </div>
                    <div className="btn-right">GET OLERATE FOR CHROME</div>
                </div>
            </a>
            <div className="responsive-iframe-container">
                <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/wwxKCUbY3r4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default App;

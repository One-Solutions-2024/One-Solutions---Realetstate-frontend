// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteList from "./components/SiteList"

const App = () => {
    return (
        <Router>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>Site Management Frotend</h1>
                <Routes>
                    <Route path="/" element={<SiteList />} />
                 </Routes>
            </div>
        </Router>
    );
};

export default App;

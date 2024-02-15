// App.js
import React, { useState } from 'react';
import Navbar from "./Pages/Navbar/Navbar"
import Directors from "./Pages/Directors/Directors"
import Home from "./Pages/HomePage/Home"
import Donation from "./Pages/Donation/Donation"
import { Route, Routes } from "react-router-dom"
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

function App() {
    const { i18n } = useTranslation(); // Access i18n instance

    document.title = 'Saayam';

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Directors" element={<Directors />} />
                <Route path="/Donation" element={<Donation />} />
            </Routes>

            <select onChange={(e) => i18n.changeLanguage(e.target.value)}> {/* Language selector */}
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
                <option value="zh">Chineese</option>
                <option value="ja">Japanese</option>
                
            </select>
        </>
    )
}

export default App;

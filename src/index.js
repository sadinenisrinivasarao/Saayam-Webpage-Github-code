// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import "./styles.css"
// import { BrowserRouter } from "react-router-dom"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// )

import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n instance
import App from './App';



ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </I18nextProvider>,
    document.getElementById('root')
);
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client"
import reportWebVitals from "web-vitals"
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
 
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  document.getElementById("root")
);

serviceWorker.unregister();

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// window.React1 = require('react');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./App";
// import Homepage from "./components/homepage/Homepage";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} >
//         <Route path="homepage" element={<Homepage />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//           {/* <Route
//             index //this is index and not "path" because it shares the path of the parent
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":invoiceId" element={<Invoice />} />
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//         }
//       /> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
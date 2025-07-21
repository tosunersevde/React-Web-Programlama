import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'
//import {BrowserRouter} from 'react-router-dom'import 'alertify.js/build/css/alertify.min.css';
import {BrowserRouter} from 'react-router-dom'

//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// //If you want your app to work offline and load faster, you can change 
// //unregister() to register() below. Note this comes with some pitfalls.
// //Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();


// React 18'de createRoot ile root'u oluşturuyoruz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Uygulamayı BrowserRouter içinde render ediyoruz
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

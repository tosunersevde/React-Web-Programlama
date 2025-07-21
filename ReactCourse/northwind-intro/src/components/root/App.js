// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
// import { Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      {/* Router yapısı tanımlama */}
      {/* <Switch> yerine Routes kullandık*/}
      <Routes>
        {/* Anasayfaya geldiginde ve exacth match oldugunda Dashboard'ı aç, anasayfa dashboard'dir */}
        {/* <Route path="/" exact component={DashBoard}/> */}
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/product" element={<DashBoard/>}/>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <DashBoard/> */}
    </Container>
  );
}

export default App;

// <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>

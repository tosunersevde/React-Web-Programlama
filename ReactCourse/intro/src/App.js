// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'

import CategoryList from "./CategoryList";
import Navi from "./Navi"; //component import etme
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs"
import { Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

//class component'e cevirme //changeCategory'i tasimak icin //ProductList'te kullanilacak
export default class App extends Component {

  // state = { currentCategory: "" }
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {

    this.setState({ currentCategory: category.categoryName })

    // this.getProducts(category.seoUrl); //1.getProducts'i cagirir.
    //console.log(category); //f12 ile console acilarak category bilgisi geliyor mu kontrol edilebilir.
    this.getProducts(category.id);
  };

  // getProducts = () => {

  //seoUrl yonlendirmelerde kullanacagimiz ad
  //Api yetersiz oldugundan seoUrl kullanilamiyor.
  // getProducts = (seoUrl) => {

  getProducts = categoryId => {

    let url = "http://localhost:3000/products"

    // if(seoUrl){
    if (categoryId) {
      // url+="/"+seoUrl;
      url += "?categoryId=" + categoryId;
    }

    // fetch("http://localhost:3000/products")
    fetch(url)
      .then(response => response.json()) //response'u json'a dondurur
      .then(data => this.setState({ products: data }));; //2.products state degisir. Product list yeniden render edilir.
  }

  addToCart = (product) => {
    //alert(product.productName);
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id) //daha once eklenmis mi
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 }); //new cart array'e yeni eleman ekler
    }
    this.setState({ cart: newCart });
    // alertify.notify(product.productName + " added to cart!");
    alertify.success(product.productName + " added to cart!", 2); //2 saniye ekranda kalir.
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id) //array'daki elemanlari verilen sarta gore filtreler.
    this.setState({ cart: newCart })

    alertify.error(product.productName + " removed from cart!", 2);
  }

  render() {

    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }

    return (
      <div>
        <Container>
          {/* <Row>
            <Navi />
          </Row> */}
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              {/* <CategoryList info={categoryInfo} /> */}

              {/* category list'e bir event-fonksiyon-props yolladik */}
              {/* Degisken tasima gibi cunku js'de degiskenler de bir fonsksiyondur. */}
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              {/* <ProductList info={productInfo} /> */}

              {/* routing ile component'i degistirecegiz. */}
              {/* Anasayfa */}
              {/* <Switch>
                <Route path='/' Component={NotFound}/>
              </Switch> */}

              <Routes>
                {/* <Route path="/" render={props => ( */}
                <Route path="/" element={
                  <ProductList
                    // {...props} // proplarin kopyasini alir ve onu gonderir
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory} 
                    info={productInfo} />
                } />

                <Route path="/cart" element = {
                  //element={<CartList />} 
                  <CartList
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart} />
                } />

                <Route path="/form1" element={<FormDemo1 />} />

                <Route path="/form2" element={<FormDemo2 />} />

                <Route path="*" element={<NotFound />} />

              </Routes>

              {/* <ProductList
                products={this.state.products}
                addToCart = {this.addToCart}
                currentCategory={this.state.currentCategory} info={productInfo} /> */}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// function App() {

//   // let titleProduct = "Product List"
//   //let titleCategory = "Category List"
//   // let productInfo = {title:"ProductList"} 

//   // let productInfo = { title: "ProductList", baskaBirSey: "birSey" } //degisiklige gerek kalmaz
//   // let categoryInfo = { title: "CategoryList" } //Nesne

//   // return (
//   //   // <div className="App">
//   //   <div>

//   //     {/* <h3>Hello From React</h3> */}

//   //     {/* <Navi></Navi> */}

//   //     <Container>
//   //       <Row>
//   //         <Navi />
//   //       </Row>
//   //       <Row>
//   //         <Col xs="3">
//   //           {/* <CategoryList title="Category List" /> */}
//   //           {/* <CategoryList title={titleCategory}/> */}
//   //           <CategoryList info={categoryInfo}/>
//   //         </Col>
//   //         <Col xs="3">
//   //           {/* <ProductList title="Product List" /> */}
//   //           {/* <ProductList title={titleProduct}/> */}
//   //           <ProductList info={productInfo}/>
//   //         </Col>
//   //       </Row>
//   //     </Container>

//   //   </div>
//   // );
// }

// export default App;

//div altinda ilk asamada
/*<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
    Learn React
    </a>
</header> */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import { Table } from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import { Link } from 'react-router-dom';

// export default class ProductList extends Component {
class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  //aksiyon-baska fonksiyon yazma sebebimiz hem sepete ekleyip hem de alertify kullanmak istememiz
  addToCart = (product) => {
    this.props.actions.addToCart({quantity:1, product})
    //ilk kez eklenen urununun quantity'si 1 olur
    // alertify.notify(product.productName + " sepete eklendi")
    alertify.success(product.productName + " sepete eklendi")
  }

  render() {
    return (
      <div>
        {/* <h3>Products</h3> */}
        <h3>
          <Badge color='warning'>Products</Badge>
          {/* Products<Badge color='success'>{this.props.currentCategory.categoryName}</Badge></h3> */}
          <Badge color='success'>{this.props.currentCategory.categoryName}</Badge></h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              {/* add to cart icin */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                {/* <td>{product.productName}</td> */}
                <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button
                  color="success"
                  onClick={() => this.addToCart(product)}>
                  Ekle
                </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,

    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Bu component'in action'ları bir obje olacaktir.
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

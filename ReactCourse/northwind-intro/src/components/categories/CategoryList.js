import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem } from 'reactstrap'
//import { getCategories } from '../../redux/actions/categoryActions'
import { Badge } from 'reactstrap';
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories()
  }

  // selectCategory = category =>{
  // selectCategory = (category,id) => {
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);

    this.props.actions.getProducts(category.id);
  }

  render() {
    return (
      <div>
        {/* <h3>Categories</h3> */}
        {/* <h5>Secili Kategori: {this.props.currentCategory}</h5> */}

        {/* <h3>Categories {this.props.actions.getCategories().length}</h3> */}

        {/* <h3>Categories {this.props.categories.length}</h3> */}

        <h3>
          <Badge color='warning'>Categories</Badge>
        </h3>

        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem
                active={category.id === this.props.currentCategory.id}
                onClick={() => this.selectCategory(category)}
                key={category.id}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>

        {/* <h5>Secili Kategori: {this.props.currentCategory.categoryName}</h5> */}

      </div>
    )
  }
}

//reducer'a direk state baglama
function mapStateToProps(state) {
  return {
    //Store'da belli reducerlar var, currentCategory'i o store'daki changeCategoryReducer'a met et.
    currentCategory: state.changeCategoryReducer,

    categories: state.categoryListReducer
  }
}

//reducer'a aksiyon baglama
function mapDispatchToProps(dispatch) {
  return {
    //Bu component'in action'ları bir obje olacaktir.
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),

      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  }
}

// export default connect(mapStateToProps)(CategoryList)
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
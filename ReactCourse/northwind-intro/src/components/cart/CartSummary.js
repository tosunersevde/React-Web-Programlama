import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom"
import alertify from "alertifyjs"

class CartSummary extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi")
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepetiniz Bos</NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        //her bir cartItem için bir tane jsx calistir
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>

                                {/* <Badge color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>X</Badge> */}
                                <Badge color="danger" onClick={() => this.removeFromCart(cartItem.product)}>X</Badge>

                                {cartItem.product.productName}
                                {/* elemandan kac tane var ise Bedge ile yazdirdik */}
                                <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    {/* <DropdownItem>
                        Sepete Git
                    </DropdownItem> */}
                    <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    //Sepet doluysa veya bossa
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
                {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}
            </div>
        )
    }
}

//aksiyonu kullanabilme
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


//state'i proplara aktarma - state'te baglanma
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink,
    NavItem,
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                    {/* - {this.props.cart.length} */}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.productName}
                            <Badge color='success'>{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        {/* Reset */}
                        {/* sepete gittginde refresh olcagi ve sepet bosalacagi icin */}
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>)
    }

    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <div>

                {/* // <UncontrolledDropdown nav inNavbar>
            //     <DropdownToggle nav caret>
            //         Your Cart  - {this.props.cart.length}
            //     </DropdownToggle>
            //     <DropdownMenu right>
            //         {this.props.cart.map(cartItem => (
            //             <DropdownItem key={cartItem.product.id}>
            //                 {cartItem.product.productName}
            //                 <Badge color='success'>{cartItem.quantity}</Badge>
            //             </DropdownItem>
            //         ))}
            //         <DropdownItem divider />
            //         <DropdownItem>
            //             Reset
            //         </DropdownItem>
            //     </DropdownMenu>
            // </UncontrolledDropdown> */}

                {/* {this.props.cart.length > 0 ? this.renderSummary() : <div></div>} */}
                {/* cartta eleman varsa deger dondurur yoksa bos div dondurur */}

                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}


            </div>


        )
    }
}


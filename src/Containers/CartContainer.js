import { connect } from "react-redux";
import React, { Component } from 'react';
import Cart from "./../Components/Cart";
import * as Message from "./../Constants/Message";
import CartItem from "./../Components/CartItem";
import CartResult from "./../Components/CartResult";
import {removeProductInCart, updateProductInCart , actChangeMessage} from "./../Actions/index";
class ProductsContainer extends Component {
  render() {
    var { cart } = this.props;
    console.log(cart);
    
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalMount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart)=>{
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    if(cart.length > 0){
      result = cart.map((item,index)=>{
        return <CartItem 
        key = {index}
        item = {item} 
        onDelete = {this.props.onDelete}
        onUpdate = {this.props.onUpdate}
        onMessage = {this.props.onMessage}
        />
      })
    }
    return result;
  }
  showTotalMount = (cart)=>{
    var result = null;
    if(cart.length > 0){
      result = <CartResult cart = {cart}/> 
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    cart:state.cart
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (product) => {
      dispatch(removeProductInCart(product))
    },
    onUpdate :(product,quantity)=>{
      dispatch(updateProductInCart(product,quantity))
    },
    onMessage : (message)=>{
      dispatch(actChangeMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)

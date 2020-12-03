import React, { Component } from 'react';
import * as Message from "../Constants/Message"
class CartItem extends Component {
  render() {
    var {item} = this.props;
    var {quantity} = item;
    console.log(quantity);
    
    return (
      <>
      <tr>
        <th scope="row">
          <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label 
            onClick = {()=>this.onUpdateQuatity(item.product,item.quantity - 1)}
            className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
              <a href="/">—</a>
            </label>
            <label 
            onClick = {()=>this.onUpdateQuatity(item.product,item.quantity + 1)}
            className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
              <a href="/">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price,item.quantity)}$</td>
        <td>
          <button type="button"
          className="btn btn-sm btn-primary waves-effect waves-light" 
          data-toggle="tooltip" data-placement="top" 
          title data-original-title="Remove item"
          onClick = {()=>this.onDelete(item.product)}
          >
          X
          </button>
        </td>
      </tr>
    </>
    );
  }
  onDelete = (product)=>{
      var {onDelete,onMessage} = this.props;
      onDelete(product);
      onMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }
  showSubTotal = (price,quantity)=>{
    return price * quantity;
  }
  onUpdateQuatity = (product,quantity)=>{
    if(quantity > 0){
      this.props.onUpdate(product,quantity);
      this.props.onMessage(Message.MSG_UPDATE_CART_SUCCESS)

    }
  }
}
export default CartItem;
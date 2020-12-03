import Products from "./../Components/Products"
import { connect } from "react-redux";
import React, { Component } from 'react';
import Product from "./../Components/Product";
import PropTypes from "prop-types";
import {actAddToCart, actChangeMessage} from "../Actions/index"
class ProductsContainer extends Component {
  componentDidMount = () => {
    {this.props.onAddToCart(this.props.products)}
  };
  render() {
    var { products } = this.props;
    
    var {onAddToCart} = this.props;
    
    
    return (
              

      <Products>
        {products.map((product, index) => {
          return <Product product={product} key={index} onAddToCart = {onAddToCart} onChangeMessage = {this.props.onChangeMessage}/>
        })}
      </Products>
      
    );
  }
}

ProductsContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      image:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      price:PropTypes.number.isRequired,
      inventory:PropTypes.number.isRequired,
      rating:PropTypes.number.isRequired
    })
  ).isRequired,
  onAddToCart:PropTypes.func.isRequired,
  onChangeMessage:PropTypes.func.isRequired

} 

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product,1))
    },
    onChangeMessage:(message) =>{
      dispatch(actChangeMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)

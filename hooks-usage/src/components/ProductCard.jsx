import React from "react";


const ProductCard = ({ product, quantity, onIncrement, onDecrement, onAddToCart }) => {
  

  return (
    <div className="product-card">
      <div className="product">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <div className="quantity">
          <button
            type="button"
            onClick={() => onDecrement(product.id)}
            className="minus"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() => onIncrement(product.id)}
            className="plus"
          >
            +
          </button>
        </div>
        <div className="cart">
          <button type="button" onClick={() => onAddToCart(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

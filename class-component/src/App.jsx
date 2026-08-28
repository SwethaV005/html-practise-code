import react from "react";
import product from "./asset/meetup-2-graphite-01.webp"
class App extends React.Component{

  render(){
    return(
      <div className="ProductCard">
        <img src={product} alt="product"/>
        <h2>Meetup 2</h2>
        <p className="price">$99.99</p>
        <div className="quantity">
         
        <button type="button" onClick={this.props.onIncrement}>+</button>
        <span>{this.props.quantity}</span>
        <button type="button" onClick={this.props.onDecrement}>
          -
        </button>
        </div>
      </div>
    )
  }
}
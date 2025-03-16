import React from "react";
import "./CartItems.css";
import {useContext} from "react";
import {ShopContext} from "../../Context/ShopContext";
import minus from "../Assets/minus.png";
import plus from "../Assets/plus.png";


const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart, addToCart} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Add</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e)=> {
                if (cartItems[e.id] > 0){
                    return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img className="cartitems-add-icon" src={plus} alt="" onClick={() => {addToCart(e.id)}}/>
                                    <img className="cartitems-remove-icon" src={minus} alt="" onClick={() => {removeFromCart(e.id)}}/>
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have promo code, Please enter here!</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code"/>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;
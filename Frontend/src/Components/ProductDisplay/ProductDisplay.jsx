import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star.png";
import star_dull from "../Assets/star_dull.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src= {star} alt="" />
                    <img src= {star} alt="" />
                    <img src= {star} alt="" />
                    <img src= {star} alt="" />
                    <img src= {star_dull} alt="" />
                    <p>(120)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vero consequuntur voluptatum repudiandae. Accusantium voluptas consequatur laborum non, libero nulla architecto voluptatem. Aperiam, autem fuga? Quaerat consequatur illum ipsa molestias laborum voluptatum officiis quae asperiores magni repudiandae ipsam natus quisquam assumenda quidem incidunt, ipsum provident reprehenderit? Tempora commodi sunt laudantium, eligendi totam maxime delectus non hic, dolor quos provident. Excepturi quam enim earum ad doloremque, natus nemo neque aspernatur debitis distinctio maiores reprehenderit aut corrupti veniam placeat laudantium asperiores quo amet harum accusamus ducimus ea minima voluptatum fugiat! Assumenda, nisi cumque animi tenetur praesentium dolores fuga ex suscipit aliquid, corporis iure eos! Quo eaque, fugiat quidem sint eos at enim voluptatem. Hic expedita aspernatur amet laudantium illum ad labore consectetur quae.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags: </span>Modern, Latest
                </p>
            </div>
        </div>
    );
}

export default ProductDisplay;
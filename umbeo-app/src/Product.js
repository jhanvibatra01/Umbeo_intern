import React from 'react';
import "./Product.css";
import "./Home.css";
import StarIcon from '@material-ui/icons/Star';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">

            <img  className="cards__item__img" src={image} alt="pizza" />

            <div className="product_info">

            <p>{title}</p>
            <p className="product_price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
        <div className="product_rating">

         {
             Array(rating)
             .fill()
             .map((_)=>(
                <StarIcon/>
             ))
         }

            </div>

        </div>
         
        
         <button>Add to basket</button>

        </div>
    )
}

export default Product

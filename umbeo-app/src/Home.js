import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">

            <div className="container">
            <img className="banner"
            src="https://www.hotkhana.com/images/stories/flexicontent/item_22_field_15/m_banner2.jpg"
            alt=" restraunt banner"
            />
            <button class="btn">Order now</button>
            
            </div>
            <div className="product_heading"><h1>Choose your favorite</h1></div>

<div className="home_products">

<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={2}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>
<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={5}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>

</div>


<div className="home_products">

<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={3}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>
<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={2}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>

<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={4}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>

</div>

<div className="home_products">

<Product 
id="1"
title="Cheeze burst pizza"
price={300}
rating={5}
image="https://i.ndtvimg.com/i/2017-09/pizza_240x180_71506154143.jpg"
/>

</div>


        </div>
    )
}

export default Home

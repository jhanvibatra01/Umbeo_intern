import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import MenuIcon from '@material-ui/icons/Menu';



function Header() {
   
const [showLinks,setShowLinks] = useState(false);

    return (
        <nav className="header" id="myHeader">
             
              <MenuIcon className="toggle" onClick={()=> setShowLinks(!showLinks)} />

             < Link to="/" className="header_logo">
             <h1  > LOGO </h1>
          
             </Link>

             <div className="header_grp " id={showLinks? "hidden" : "not_hidden"}>
                <Link to="/login" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Sign In</span>
                    </div>       
                </Link> 

                <Link to="/contactUs" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Contact Us</span>
                    </div>       
                </Link> 


                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Order history</span>
                    </div>       
                </Link>

                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option">
                       <span className="header_line">Track order</span>
                    </div>       
                </Link>

                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Favorites</span>
                    </div>       
                </Link>

                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Notifications</span>
                    </div>       
                </Link>

                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">FAQs</span>
                    </div>       
                </Link>

                <Link to="/" className="header_btn_link" >
                   <div className="header_btn_option" >
                       <span className="header_line">Terms of services</span>
                    </div>       
                </Link> 
             

                <Link to="/checkout" className="cart" >
                   <div className="cart_grp">
                       <ShoppingBasketIcon/>
                        <span>0</span>
                    </div>       
                </Link> 
               
               
               

             </div>
           

        </nav>
    )
}

export default Header

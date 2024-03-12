import React from "react";
import '../components/headerStyle.css'

function Header(props){
    return(
        <>
        <div className="header-div">

            <div>
            <h2>UseReducer</h2>
            </div>

            <div style={{display:'flex'}}>
            <img src="https://cdn-icons-png.flaticon.com/128/1136/1136139.png" width="50px" height="60px"alt="add"></img>
            <div className="cart-datils">{props.totalItems}</div>
            </div>
            
            
        </div>
        </>
    )
};

export default Header;


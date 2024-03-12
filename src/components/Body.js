import React from "react";
import "../components/bodyStyle.css"

function Body(props){
    return(
        <>
        
        <div className="main-div"> 

            <div style={{display:"flex",gap:'20px'}}>

                <div>
                <img src={props.image} alt="item-img" width="50px" height='50px'></img>
                </div>

                <div>
                <strong>{props.mobilename}</strong>
                    <p>{"$"}{props.price}</p>
                    <button onClick={props.removed} style={{color:'blue',border:'none'}}>remove</button>
                </div>
                </div>
               
  
              <div  style={{display:'flex',flexDirection:'column',gap:'5px',alignItems:'center',justifyContent:'center'}}>
              <img src="https://cdn-icons-png.flaticon.com/128/3916/3916915.png" alt="item-img" onClick={props.increment} width="30px" height='30px'></img>
                <p>{props.add}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/3916/3916864.png" alt="item-img" onClick={props.decrement} width="50px" height='50px'></img>
              </div>

        </div>
        
        </>
    );
};

export default Body;
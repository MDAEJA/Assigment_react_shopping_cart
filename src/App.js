// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Body from './components/Body';
import phone1 from "./components/assets/phone-1.png";
import phone2 from "./components/assets/phone-2.png";
import phone3 from "./components/assets/phone-3.png";
import phone4 from "./components/assets/phone-4.png";
import React from 'react';



function App() {

  const [items,setItems] = useState([
    {mobileName : "Sansung Galaxy S8",mobilePrice: 399.99,mobileImage : phone1,quantity:0,id:1},
    {mobileName : "Google Pixel Note1",mobilePrice: 499.99,mobileImage : phone2,quantity:0,id:2},
    {mobileName : "Xiaomi Redmi Note2",mobilePrice: 699.99,mobileImage : phone3,quantity:0,id:3},
    {mobileName : "Sansung Galaxy S7",mobilePrice: 599.99,mobileImage : phone4,quantity:0,id:4}])

    const [totalamount,setTotalAmount] = useState(0);
    const [totalquantity,setTotalQuantity] = useState(0);

    function addingItems(getid){
      const updatedData = items.map(item=>{
        if(item.id === getid){
          setTotalAmount(totalamount + item.mobilePrice)
          setTotalQuantity(totalquantity + 1)
          return{...item,quantity : item.quantity + 1}
        }
        return item;
      })
      setItems(updatedData)
    };

    function removeItem(getid){
      const updatedData = items.map(item=>{
        if(item.id === getid && item.quantity >= 1 && item.mobilePrice >=1){
        setTotalAmount(totalamount - item.mobilePrice)
        setTotalQuantity(totalquantity - 1)
          return {...item,quantity:item.quantity - 1}
        }
        return item;
      })
      setItems(updatedData);
    }

    function removeselectitem(getid){
      const updatedList = [...items]
      let arr = updatedList.filter((ele)=>{
        if(ele.id === getid) {
          setTotalAmount(totalamount - ele.quantity * ele.mobilePrice)
        }
        return ele.id !== getid
      })
      setItems(arr);
    }

  return (
    
    <>
   
    <header>
      <Header totalItems={totalquantity}></Header>
    </header>
    <main>
    
    <h1 style={{textAlign:'center'}}>YOUR BAG</h1>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        {
          
          items.map((ele,index)=>{
            return <Body mobilename={ele.mobileName} price={ele.mobilePrice} add={ele.quantity} image={ele.mobileImage} key={index} increment={()=>{addingItems(ele.id)}} decrement={()=>{removeItem(ele.id)}} removed={()=>{removeselectitem(ele.id)}}></Body>
          })
          
        }
      </div>
    </main>
    
     
    <footer>
      <hr style={{margin:'5px 20%'}}></hr>
      <div className='total-div'>
        <h2>Total</h2>
        <div>{totalamount}</div>
      </div>
      {
       items.length <= 0 &&
         <div><h1 style={{textAlign:'center'}}>YOUR CART IS EMPTY ???</h1></div>
       
    }

     
     <button className='clear-cart' onClick={()=>{
      setItems([]);
      setTotalAmount(0);
     }}> CLEAR CART </button>
     
   
    </footer>
    </>
  );
}

export default App;

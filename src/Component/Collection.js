import React, { useEffect, useState } from 'react'
import '../App.css';

function Collection({bag,setCart,handleQuantity}) {
  // const {id,title,author,price,img,amount}=props.bag;
  // console.log(bag)
  const [price, setPrice] = useState(0)
  const totalPrice=()=>{
   let tp=0;
   console.log(bag.length)
    bag.forEach(element => {
      tp +=element.amount*element.price
      setPrice(tp)
      
    });
    if (bag.length===0) {
      setPrice(0)
    }
  }
  useEffect(()=>{
    totalPrice()
  })
  const handleRemove=(id)=>{
    
    let arr = bag.filter((element)=>element.id !== id 
    )
    setCart(arr)
  }
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:'30px', marginBottom:'40px', color:"rgb(90, 28, 52)"}}>Welcome to your Cart</h2>
    {
      bag.map((add)=>{
        return(
        <div className='cart-item' >
        <div>
        <img className='img-cart' src={add.img} alt=''/> 
        <span style={{position:"absolute",marginLeft:"20px", top:"20px"}} >{add.title}</span>
        </div>
        <div className='Butt-cart'>
        <button onClick={()=>handleQuantity(add, +1)}>+</button><span style={{margin:"0px 20px"}}>{add.amount}</span>
        <button onClick={()=>handleQuantity(add, -1)}>-</button>
        </div>
        <div>
        <span style={{position:"absolute",marginLeft:"400px", top:"20px"}}>${add.price}</span>
        <button className='remove-cart' onClick={()=>handleRemove(add.id)}>Remove</button>
        </div>
        </div>
        )
      })
    }
    <div style={{color:"black",fontWeight:"600", display:"flex",margin:"auto",padding:"5px", width:'80%',background:'pink',justifyContent:'space-between'}}>
    <p style={{marginLeft:"29px",fontSize:"20px"}}> Total price</p>
    <p style={{marginRight:"29px" ,fontSize:"20px"}}>${price}</p>
    </div>
   
    </>
  )
}

export default Collection

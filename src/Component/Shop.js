import React from 'react';
import '../App.css';
import Card from './Card';
import item from './Item';

function Shop(prop) {
  return (
   <>
   <h1 style={{textAlign:"center", marginTop:"50px", marginBottom:"50px"}}>Your Online Book Shop!!</h1>
   {
    item.map((data)=>{
     return <Card data={data} key={data.id} addCart={prop.addCart}/>
    })
   }
   </>
  )
}

export default Shop

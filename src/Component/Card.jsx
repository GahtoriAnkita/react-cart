import React from 'react'
import '../App.css';

const Card = ({data, addCart}) => {
    const {title,author,price,img}=data;
  return (
    <div>
    {/*   card start */}

    <div className="wrapper"  >
    <div className="product-img">
      <img src={img} height="420" width="327" alt='logo' />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth.</p>
      </div>
      <div className="product-price-btn">
        <p><span>{price}</span>$</p>
        <button type="button" onClick={()=>addCart(data)}>buy now</button>
      </div>
    </div>
  </div>
    {/* card end */}
    </div>
  )
}

export default Card

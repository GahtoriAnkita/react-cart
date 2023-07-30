import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
    <section className="header">
    <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
      </div>
      <div className="nav-links"> 
        <Link to="/">Shop</Link> 
        <Link to="/cart"><iconify-icon icon="tabler:shopping-bag" width="35" flip="horizontal"
            style={{marginTop:"10px"}}></iconify-icon><span>{props.size}</span></Link> 
      </div>

    </div>
  </section>      
    </>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
 const navBar = () => {
  function scrollHeader() {
  const header = document.getElementById("nav");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
  return (
       <div className="row_nav" id='nav'>
      <div className="container">
        <div className="nav">
          <a href="#home">
            <img src="/images/logo.png" alt="solid" />
          </a>
          <ul className="nav_links">
           <a href="#home"> <li className="links">Home</li></a>
           <a href="#about"> <li className="links">About Us</li></a>
            <a href="#Products"><li className="links">Products</li></a>
            <a href="#Accessories"><li className="links">Accessories</li></a>
            <a href="#Portfolio"><li className="links">Our Portfolio</li></a>
            <a href="#Contact"><li className="links">Contact Us</li></a>
          </ul>
        </div>
        <div className="buttons">
          <button>Contact Us</button>
          <Link to="/ar">
            <img src="/images/egypt.png" alt='#'  onClick={() => {
              document.getElementById("body").classList.add("ar");
            }}/>
          </Link>
        </div>
           <ul class="side-nav" id="sidenav">
          <a href="#home" onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> <li className="links active">Home</li></a>
         <a href="#about" onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> <li className="links ">About Us</li></a>
         <a href="#Products" onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> <li className="links ">Products</li></a>
          <a href="#Portfolio" onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> <li className="links ">Our Portfolio</li></a>
          <a href="#Contact" onClick={() => {
              document.getElementById("sidenav").classList.remove("show");
            }}> <li className="links ">Contact Us</li></a>
          <Link to="/ar">
            <img src="/images/egypt.png" alt='#' className='lang_icons' onClick={() => {
              document.getElementById("body").classList.add("ar");
            }} />
          </Link> 
        </ul>

        <div className="mobile_icons" id="nav_icon">
          <i
            class="uil uil-align-justify"
            id="open"
            onClick={() => {
              document.getElementById("sidenav").classList.toggle("show");
            }}></i>
    </div>
      </div>
    </div>
  )
}
export default navBar
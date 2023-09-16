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
        <a href="#home"><img src="/images/logo.png" alt="solid" /></a>
          <ul className="nav_links">
             <a href="#home"> <li className="links">الرئيسية</li></a>
           <a href="#about"> <li className="links">من نحن</li></a>
            <a href="#Products"><li className="links">المنتجات</li></a>
            <a href="#Accessories"><li className="links">الإكسسوارات</li></a>
            <a href="#Portfolio"><li className="links">سابقة الأعمال</li></a>
            <a href="#Contact"><li className="links">تواصل معنا</li></a>
          </ul>
        </div>
        <div className="buttons">
          <button>تواصل معنا</button>
          <Link to="/">
            <img src="/images/united-states.png " alt='#'  onClick={() => {
              document.getElementById("body").classList.remove("ar");
            }} />
          </Link>
        </div>
        <ul class="side-nav" id="sidenav">
          <Link to="/"><li>الصفحة الرئيسية</li></Link>
          <Link to="/من_نحن"><li>من نحن</li></Link>
          <Link to="/الخدمات"><li>المنتجات</li></Link>
          <Link to="/محامين_المؤسسة"><li>الإكسسوارات</li></Link>
          <Link to="/محامين_المؤسسة"><li>سابقة الأعمال</li></Link>
          <Link to="/تواصل_معنا"><li>تواصل معنا</li></Link>
          <Link to="/">
            <img src="/images/united-states.png " className='lang_icons ' alt='#'  onClick={() => {
              document.getElementById("body").classList.remove("ar");
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
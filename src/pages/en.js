import React from 'react'
import NavBar from "../components/en/navBar";
import Main from '../components/en/main';
import About from '../components/en/about';
import WhyUs from '../components/en/why';
import Products from '../components/en/Products';
import Client from '../components/en/client';
import Portfolio from '../components/en/Portfolio';
import Acc from '../components/en/acc';
import Contact from '../components/en/contact';
import Footer from '../components/en/footer';
 const en = () => {
  return (
    <>
      <div className="bottom_icons">
        <a href="https://wa.me/+201221932532">
          <img src="images/whatsapp.png" alt="#" />
        </a>
        <a href="#home">
          <img src="images/up-arrow.png" alt="#" className="up" />
        </a>
      </div>
      <NavBar />
      <Main />
      <About />
      <WhyUs />
      <Products />
      <Acc />
      <Portfolio />
      <Client />
      <Contact />
      <Footer />
    </>
  ); 
}
export default en